import { config } from 'dotenv'
config();

export default {
    port: process.env.PORT || 8500, 
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env_DB_SERVER || '', 
    dbDatabase: process.env.DB_DATABASE || '',
};
