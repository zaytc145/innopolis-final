import {FC, FormEvent, useCallback, useState} from "react";
import FormGroup from "../components/FormGroup";
import Button from "../components/Button";
import Card from "../components/Card";
import useAuth from "../context/AuthContext/useAuth";
import api from "../api";
import {useNavigate} from "react-router-dom";
import {TODOS} from "../routes/routerLinks";
import {eventsLogger} from "../App";
import LogTypeEnum from "../enums/LogTypeEnum";

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
