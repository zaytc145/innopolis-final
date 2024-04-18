import {FC, FormEvent, useCallback, useState} from "react";
import FormGroup from "../components/FormGroup";
import Button from "../components/Button";
import Card from "../components/Card";

const CreateTodo: FC = () => {

    const [title, setTitle] = useState("")

    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
    }, [])

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
