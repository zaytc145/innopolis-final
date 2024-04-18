import Card from "../components/Card";
import {FC, FormEvent, useCallback, useState} from "react";
import FormGroup from "../components/FormGroup";
import Button from "../components/Button";
import api from "../api";
import {useNavigate} from "react-router-dom";
import {TODOS} from "../routes/routerLinks";
import useAuth from "../context/AuthContext/useAuth";

const Login: FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {addUser} = useAuth();
    const navigate = useNavigate();

    const onSubmit = useCallback(async (e: FormEvent) => {
        e.preventDefault();

        const response = await api.post("/login", {
            email,
            password
        })
        addUser(response.data)
        navigate(TODOS)
    }, [addUser, email, password, navigate])

    return <Card>
        <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <FormGroup>
                <label>Email</label>
                <input type={"email"} placeholder="Email" required onInput={(e) => setEmail(e.currentTarget.value)}/>
            </FormGroup>
            <FormGroup>
                <label>Password</label>
                <input type={"password"} placeholder="Password" required onInput={(e) => setPassword(e.currentTarget.value)}/>
            </FormGroup>
            <Button type={"submit"}>Login</Button>
        </form>
    </Card>
}

export default Login
