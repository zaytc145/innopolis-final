import Card from "../components/Card.tsx";
import {FC, FormEvent, useCallback, useState} from "react";
import FormGroup from "../components/FormGroup.tsx";
import Button from "../components/Button.tsx";
import api from "../api/api.ts";
import {useNavigate} from "react-router-dom";
import {TODOS} from "../routes/routerLinks.ts";
import useAuth from "../context/AuthContext/useAuth.ts";
import LogTypeEnum from "../enums/LogTypeEnum.ts";
import {eventsLogger} from "../App.tsx";

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
                <label htmlFor={"email"}>Email</label>
                <input
                    id={"email"}
                    name={"email"}
                    type={"email"}
                    placeholder="Email"
                    required
                    onInput={(e) => setEmail(e.currentTarget.value)}
                />
            </FormGroup>

            <FormGroup>
                <label htmlFor={"password"}>Password</label>
                <input
                    id={"password"}
                    name={"password"}
                    type={"password"}
                    placeholder="Password"
                    required
                    autoComplete="current-password"
                    onInput={(e) => setPassword(e.currentTarget.value)}
                />
            </FormGroup>
            <Button type={"submit"}>Login</Button>
        </form>
    </Card>
}

export default Login
