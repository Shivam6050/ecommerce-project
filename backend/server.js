import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';
import cartRouter from './routes/cart.routes.js';
import orderRouter from './routes/order.routes.js'; 

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to DB and Cloudinary
connectDB().catch(err => console.error("Database connection failed:", err));
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// Api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    res.send("API Working")
});

// For local development
if (process.env.NODE_ENV !== 'production' || process.env.PORT) {
    app.listen(port, () => console.log("Server started on PORT : " + port));
}

export default app;