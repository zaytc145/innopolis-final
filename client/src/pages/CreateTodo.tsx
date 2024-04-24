import {FC, FormEvent, useCallback, useState} from "react";
import FormGroup from "../components/FormGroup.tsx";
import Button from "../components/Button.tsx";
import Card from "../components/Card.tsx";
import useAuth from "../context/AuthContext/useAuth.ts";
import api from "../api/api.ts";
import {useNavigate} from "react-router-dom";
import {TODOS} from "../routes/routerLinks.ts";
import {eventsLogger} from "../App.tsx";
import LogTypeEnum from "../enums/LogTypeEnum.ts";

const CreateTodo: FC = () => {

    const {user} = useAuth();
    const navigate = useNavigate();

    const [title, setTitle] = useState("")

    const onSubmit = useCallback(async (e: FormEvent) => {
        e.preventDefault()
        const response = await api.post("/todos", {
            user: user!._id,
            title: title
        })
        eventsLogger.postMessage({
            type: LogTypeEnum.INFO,
            text: `todo ${response.data._id} created`
        })
        navigate(TODOS)
    }, [title])

    return <Card>
        <form onSubmit={onSubmit}>
            <h2>Create Todo</h2>
            <FormGroup>
                <label>Title</label>
                <input value={title} type={"text"} placeholder="title" required
                       onInput={(e) => setTitle(e.currentTarget.value)}/>
            </FormGroup>
            <Button type={"submit"}>Create</Button>
        </form>
    </Card>
}

export default CreateTodo
