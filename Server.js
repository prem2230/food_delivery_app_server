import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from './routes/user.routes.js';
import restaurantRoutes from './routes/restaurant.routes.js';
import foodItemRoutes from './routes/foodItem.routes.js';
import orderRoutes from './routes/order.routes.js';



dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => { 
    console.log(`Server running on port ${process.env.PORT}` );
});


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Error connecting Database",error);
    }
};

connectDB();


app.use("/api/user",userRoutes);
app.use("/api/restaurant",restaurantRoutes);
app.use("/api/food-items", foodItemRoutes);
app.use("/api/orders", orderRoutes);
app.get("/", (req, res) => {
    res.send(`<h1>Food Delivery App Server</h1>`);
  });