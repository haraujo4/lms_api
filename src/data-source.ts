import { DataSource } from "typeorm";
import "reflect-metadata";

require("dotenv").config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PWD,
    database: process.env.PG_DB,

    synchronize: false,
    logging: true,
    entities: ["src/Models/Entities/*.ts"],
    migrations: ["src/DataBase/Migrations/*.ts"],

});

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("Database connection failed", err);
    });
