import { Request, Response } from "express"
import VehicleModel from "../models/VehicleModel.js"

const getAllVehicle = async (req, res) => {
  try {
    const vehicle = await VehicleModel.getAllVehicle()
    res.status(200).json(vehicle)
  } catch (error) {
    res.status(500).json({ error: "internal server error" })
  }
}

const addVehicle = async (req, res) => {
  try {
    const { brand, model, price, description, stock } = req.body
    const newVehicle = await VehicleModel.addVehicle({ brand, model, price, description, stock })
    res.status(201).json(newVehicle)
  } catch (error) {
    const { message } = error

    if (message.startsWith("E11000")) {
      return res.status(400).json({ error: "no se puede repetir un vehiculo" })
    }

    res.status(500).json({ error: "internal error server" })
  }
}

const updateVehicle = async (req, res) => {
  try {
    const { id } = req.params
    const { brand, model, price, description, stock } = req.body

    const updatedVehicle = await Vehicle.updatedVehicle (id, { brand, model, price, description, stock })

    res.json(updatedVehicle)
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
}
const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params

    const deletedVehicle = await Vehicle.deleteVehicle(id)

    res.json(deletedVehicle)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export { getAllVehicle, addVehicle, updateVehicle, deleteVehicle }