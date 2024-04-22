import {ChangeEvent, FC, useEffect, useState} from "react";
import Card from "../components/Card";
import styled from "styled-components";
import Todo from "../types/Todo";
import api from "../api/api";
import useAuth from "../context/AuthContext/useAuth";
import Button from "../components/Button";
import {Link} from "react-router-dom";
import {getTodoEditLink, TODOS_CREATE} from "../routes/routerLinks";
import TodoStatusEnum from "../enums/TodoStatusEnum";
import Table from "../components/Table";
import TableTh from "../components/TableTh";
import {eventsLogger} from "../App";
import LogTypeEnum from "../enums/LogTypeEnum";

const StyledTableActions = styled.div`
  display: flex;
  gap: 10px
`

const AddTodoStyles = styled.div`
  text-align: end;
  margin-bottom: 5px;
`

const Todos: FC = () => {

    const {user} = useAuth();

    const [todos, setTodos] = useState<Todo[]>([])


    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = async () => {
        const response = await api.get('/todos', {
            params: {
                user: user!._id
            }
        })
        setTodos(response.data);
        eventsLogger.postMessage({
            type: LogTypeEnum.INFO,
            text: `todos fetched`
        })
    }

    const deleteTodo = async (id: string) => {
        await api.delete(`/todos/${id}`);
        getTodos();
    }

    const updateTodoStatus = async (e: ChangeEvent<HTMLSelectElement>, index: number) => {
        const status = e.target.value;
        const todo = todos[index];
        const response = await api.put(`/todos/${todo._id}`, {
            status
        })

        const nextTodos = todos.map(todo => {
            if (todo._id === response.data._id) {
                return response.data;
            }
            return todo;
        })

        setTodos(nextTodos)
    }


    return <div>
        <h1>Todos</h1>
        <Card>
            <AddTodoStyles>
                <Link to={TODOS_CREATE}>
                    <Button>Add Todo</Button>
                </Link>
            </AddTodoStyles>
            <Table>
                <thead>
                <tr>
                    <TableTh>title</TableTh>
                    <TableTh>status</TableTh>
                    <TableTh></TableTh>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo, index) => {
                    return <tr key={todo._id}>
                        <TableTh>{todo.title}</TableTh>
                        <TableTh>
                            <select value={todo.status} onChange={e => updateTodoStatus(e, index)}>
                                <option value={TodoStatusEnum.IN_PROGRESS}>В работе</option>
                                <option value={TodoStatusEnum.COMPLETED}>Завершено</option>
                            </select>
                        </TableTh>
                        <TableTh>
                            <StyledTableActions>
                                <Link to={getTodoEditLink(todo._id)}>
                                    <Button>Edit</Button>
                                </Link>
                                <Button onClick={() => deleteTodo(todo._id)}>Delete</Button>
                            </StyledTableActions>
                        </TableTh>
                    </tr>
                })}
                </tbody>
            </Table>
        </Card>
    </div>
}

export default Todos
