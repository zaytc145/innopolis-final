import LogTypeEnum from "../enums/LogTypeEnum";
import User from "./User.ts";

export default interface Log {
    _id: number;
    user: User
    text: string
    type: LogTypeEnum
    date: Date
}
