import Card from "../components/Card";
import {FC, FormEvent, useCallback, useState} from "react";
import FormGroup from "../components/FormGroup";
import Button from "../components/Button";
import api from "../api";
import {useNavigate} from "react-router-dom";
import {TODOS} from "../routes/routerLinks";
import useAuth from "../context/AuthContext/useAuth";
import LogTypeEnum from "../enums/LogTypeEnum";
import {eventsLogger} from "../App";

const Login: FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {addUser} = useAuth();
    const navigate = useNavigate();

    const onSubmit = useCallback(async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.post("/login", {
                email,
                password
            })
            addUser(response.data)
            navigate(TODOS)
            eventsLogger.postMessage({
                type: LogTypeEnum.INFO,
                text: "User logged in"
            })
        } catch (e) {
            eventsLogger.postMessage({
                type: LogTypeEnum.ERROR,
                text: "Login error"
            })
            console.error(e)
        }
    }, [addUser, email, password, navigate])

    return <Card>
        <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <FormGroup>
                <label>Email</label>
                <input name={"email"} type={"email"} placeholder="Email" required onInput={(e) => setEmail(e.currentTarget.value)}/>
            </FormGroup>
            <FormGroup>
                <label>Password</label>
                <input name={"password"} type={"password"} placeholder="Password" required
                       onInput={(e) => setPassword(e.currentTarget.value)}/>
            </FormGroup>
            <Button type={"submit"}>Login</Button>
        </form>
    </Card>
}

export default Login
