import dotenv from 'dotenv';
dotenv.config();

export const CLOUDINARY_API_KEY: string = process.env.CLOUDINARY_API_KEY || "";
export const CLOUDINARY_API_SECRET: string =
  process.env.CLOUDINARY_API_SECRET || "";
export const CLOUDINARY_CLOUD_NAME: string =
  process.env.CLOUDINARY_CLOUD_NAME || "";
export const DATABASE_URL: string = "mongodb+srv://vortex:Kmzwa8awaa@belajar-backend-nodejs.frkandv.mongodb.net/?retryWrites=true&w=majority&appName=belajar-backend-nodejse";
export const SECRET: string = process.env.SECRET || "12345678901234567890123456789012";