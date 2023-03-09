import db from "knex";
import dotenv from "dotenv"

dotenv.config();

export default db({
    client: 'mysql2',
    connection: {
        host: process.env.HOST_CONNECTION,
        port: Number(process.env.PORT_CONNECTION),
        user: process.env.USER_ACCESS,
        password: process.env.PASSWORD_USER_ACCESS,
        database: process.env.DATABASE_CONNECTION
    }
})