import {DataSource, DataSourceOptions} from "typeorm";
import {User} from "./models/User";
import {UserInfo} from "./models/UserInfo";
import {Todo} from "./models/Todo";
import {Log} from "./models/Log";

export const connection: DataSourceOptions = {
    type: "mongodb",
    host: "localhost",
    port: 27017,
    username: "root",
    password: "root",
    authSource: "admin",
    synchronize: true,
    entities: [
        User,
        UserInfo,
        Todo,
        Log
    ]
}
export const AppDataSource = new DataSource(connection)
