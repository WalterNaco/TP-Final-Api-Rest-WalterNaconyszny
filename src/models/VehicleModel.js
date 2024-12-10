import { Schema, model } from "mongoose";
import { updateVehicle } from "../controllers/vehicleController";

const vehicleSchema = new Schema({
  brand: {
    type: String,
    unique: true,
    required: [true, 'La marca del vehiculo es obligatorio'],
    trim: true,
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    maxlength: [100, 'El nombre no puede exceder los 100 caracteres']
  },
  model: {
    type: String,
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'El precio del vehiculo es obligatorio'],
    min: [0, 'El precio no puede ser menor a 0']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'La descripción no puede exceder los 500 caracteres']
  },
  stock: {
    type: Number,
    required: [true, 'El stock es obligatorio'],
    min: [0, 'El stock no puede ser menor a 0'],
    validate: {
      validator: Number.isInteger,
      message: 'El stock debe ser un número entero'
    }
  }
}, {
  versionKey: false
});

const Vehicle = model("vehicle", vehicleSchemaSchema)

const getAllVehicle = () => {
  return Vehicle.find()
}

const addVehicle = (vehicleData) => {
  const vehicle= new Vehicle(vehicleData);
  return vehicle.save();
}

const deleteVehicle = async (id) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(id);
    return vehicle;
  } catch (error) {
    throw new Error("Error deleting vehicle");
  }
};

const updateVehicle = async (id, updateVehicle) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(id, updateVehicle);
    return vehicle;
  } catch (error) {
    throw new Error("Error updating a vehicle");
  }
};

export default { getAllVehicle, addVehicle, deleteVehicle, updateVehicle };