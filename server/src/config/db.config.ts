import mongoose from 'mongoose';

export const connectDB = async () => {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) throw new Error("DATABASE_URL is not defined in the environment variables");

    try {
        await mongoose.connect(dbUrl);
    } catch (error) {
        console.error(error);
    }
}