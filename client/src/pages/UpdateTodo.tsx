import {FC, FormEvent, useCallback, useEffect, useState} from "react";
import FormGroup from "../components/FormGroup.tsx";
import Button from "../components/Button.tsx";
import Card from "../components/Card.tsx";
import useAuth from "../context/AuthContext/useAuth.ts";
import api from "../api/api.ts";
import {useNavigate, useParams} from "react-router-dom";
import {TODOS} from "../routes/routerLinks.ts";
import TodoStatusEnum from "../enums/TodoStatusEnum.ts";
import {eventsLogger} from "../App.tsx";
import LogTypeEnum from "../enums/LogTypeEnum.ts";

const UpdateTodo: FC = () => {

    const {user} = useAuth();
    const navigate = useNavigate();
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState<TodoStatusEnum>(TodoStatusEnum.IN_PROGRESS)

    useEffect(() => {
        getTodo();
    }, []);

    const getTodo = async () => {
        const response = await api.get(`/todos/${id}`)

        setTitle(response.data.title)
        setStatus(response.data.status)
    }

    const onSubmit = useCallback(async (e: FormEvent) => {
        e.preventDefault()
        await api.put(`/todos/${id}`, {
            user: user!._id,
            title: title,
            status: status
        })
        eventsLogger.postMessage({
            type: LogTypeEnum.INFO,
            text: `todo ${id} updated`
        })
        navigate(TODOS)
    }, [title, status])

    return <Card>
        <form onSubmit={onSubmit}>
            <h2>Create Todo</h2>
            <FormGroup>
                <label>Title</label>
                <input value={title} type={"text"} placeholder="title" required
                       onInput={(e) => setTitle(e.currentTarget.value)}/>
            </FormGroup>
            <FormGroup>
                <label>Status</label>
                <select value={status} onChange={e => setStatus(e.target.value as TodoStatusEnum)}>
                    <option value={TodoStatusEnum.IN_PROGRESS}>В работе</option>
                    <option value={TodoStatusEnum.COMPLETED}>Завершено</option>
                </select>
            </FormGroup>
            <Button type={"submit"}>Update</Button>
        </form>
    </Card>
}

export default UpdateTodo
