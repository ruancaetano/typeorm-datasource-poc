import { resolve } from "path";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: resolve(__dirname, "..", "..", "db.sqlite"),
  synchronize: false,
  logging: true,
  entities: [resolve(__dirname, "..", "app", "**", "*.entity.ts")],
  subscribers: [],
  migrations: [resolve(__dirname, "..", "database", "migrations", "*.ts")],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
