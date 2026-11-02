import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';
import "dotenv/config";
dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected successfully');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('MongoDB connection failed:', error.message);
    });