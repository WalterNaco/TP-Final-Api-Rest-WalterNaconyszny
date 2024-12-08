import express from "express"
import { connectDb } from "./src/config/mongoConnection.js";
import { productsRoutes } from "./src/routes/productRoutes.js";
import { authRoutes } from "./src/routes/authRoutes.js"
import { auth } from "./src/middlewares/authMiddleware.js";

process.loadEnvFile();

const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.use("/api/auth", authRoutes)

app.use(auth)
// http://localhost:1234/api/products/
app.use("/api/products", productsRoutes)

app.listen(PORT, () => {
  console.log("Servidor en encucha en el puerto http://localhost:" + PORT)
  connectDb()
})