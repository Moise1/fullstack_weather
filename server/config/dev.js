import dotenv from 'dotenv';

dotenv.config(); 
let CONFIG = {}; 
CONFIG.apiKey = process.env.API_KEY;

export default {
    DATABASE_URL: "postgresql://postgres:12345@localhost:5432/moweather_db",
    SECRET_OR_PUBLIC_KEY:"myweather",
    DB_PASSWORD:"myweatherapp",
    MY_API_KEY: CONFIG.apiKey 
};


