import TodoStatusEnum from "../../../server/enums/TodoStatusEnum";

export default interface Todo {
    title: string;
    status: TodoStatusEnum;
    _id: string;
}
