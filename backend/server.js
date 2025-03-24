import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
import homeRoutes from "./routes/home.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json()); // allows us to accept JSON data in the req.body

// app.use("/api/products", productRoutes);
app.use("/api", homeRoutes);

app.listen(5000, () => {
    // connectDB();
    console.log("Server started at http://localhost:" + PORT);
});

