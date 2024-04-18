import {BaseEntity, Column, Entity, ObjectId, ObjectIdColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class UserInfo extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @OneToOne(() => User)
    user: ObjectId

    @Column("varchar")
    firstName: string

    @Column("varchar")
    lastName: string
}
