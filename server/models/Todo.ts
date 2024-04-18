import {BaseEntity, Column, Entity, ManyToOne, ObjectId, ObjectIdColumn, OneToMany} from "typeorm";
import TodoStatusEnum from "../enums/TodoStatusEnum";
import {User} from "./User";

@Entity()
export class Todo extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @ManyToOne(() => User)
    user: string

    @Column("varchar")
    title: string

    @Column("varchar")
    status: TodoStatusEnum
}
