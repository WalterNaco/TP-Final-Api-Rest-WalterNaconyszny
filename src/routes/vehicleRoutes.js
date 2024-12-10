import { Router } from "express"
import { addVehicle, getAllVehicle } from "../controllers/vehicleController.js"

const vehicleRoutes = Router()

vehicleRoutes.get("/", getAllVehicle)
vehicleRoutes.post("/", addVehicle)
vehicleRoutes.patch("/:id", updatevehicle)
vehicleRoutes.delete("/:id", deletevehicle)

export { productsRoutes }