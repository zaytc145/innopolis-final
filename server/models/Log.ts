import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    ObjectId,
    ObjectIdColumn,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import {User} from "./User";
import LogTypeEnum from "../enums/LogTypeEnum";

@Entity()
export class Log extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @ManyToOne(() => User)
    user: User

    @Column("text")
    text: string

    @Column("varchar")
    type: LogTypeEnum

    @Column("datetime")
    date: Date
}
