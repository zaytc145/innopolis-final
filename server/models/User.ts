import {
    BaseEntity,
    Column,
    Entity,
    ObjectId,
    ObjectIdColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import {Todo} from "./Todo";
import {UserInfo} from "./UserInfo";

@Entity()
export class User extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column("varchar")
    email: string

    @Column("varchar")
    password: string

    @OneToMany(() => Todo, todo => todo.user)
    todos: Todo[]

    @OneToOne(() => UserInfo)
    info: ObjectId
}
