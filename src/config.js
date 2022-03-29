import { config } from "dotenv"

config()

// console.log(process.env.URI_MONGO)
export const MONGODB_URI = process.env.URI_MONGO || "mongodb://localhost/test"
export const PORT = process.env.PORT || 3000;