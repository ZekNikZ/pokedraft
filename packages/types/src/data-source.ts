import { DataSource } from "typeorm";
import * as models from "./models";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export function createDataSource(options?: Partial<MysqlConnectionOptions>) {
  return new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "hotmagenta",
    database: "pokedraft",
    synchronize: true,
    logging: true,
    entities: models,
    subscribers: [],
    migrations: [],
    ...options,
  });
}
