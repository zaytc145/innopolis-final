import LogTypeEnum from "../../../server/enums/LogTypeEnum";
import User from "./User";

export default interface Log {
    _id: number;
    user: User
    text: string
    type: LogTypeEnum
    date: Date
}
