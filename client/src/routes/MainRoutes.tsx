import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/Login.tsx";
import Empty from "../pages/Empty.tsx";
import {LOGIN, LOGS, PROFILE, TODOS, TODOS_CREATE, TODOS_UPDATE} from "./routerLinks.ts";
import Default from "../layouts/Default.tsx";
import Todos from "../pages/Todos.tsx";
import Profile from "../pages/Profile.tsx";
import CreateTodo from "../pages/CreateTodo.tsx";
import useAuth from "../context/AuthContext/useAuth.ts";
import {ReactElement} from "react";
import Logs from "../pages/Logs.tsx";
import UpdateTodo from "../pages/UpdateTodo.tsx";


const MainRoutes = () => {
    const {user} = useAuth();
    const wrapAuth = (component: ReactElement) => {

        if (!user) {
            return <Navigate to={LOGIN}/>
        }

        return component;
    }

    return <BrowserRouter>
        <Routes>
            <Route element={<Default/>}>
                <Route path={TODOS} element={wrapAuth(<Todos/>)}/>
                <Route path={TODOS_CREATE} element={wrapAuth(<CreateTodo/>)}/>
                <Route path={TODOS_UPDATE} element={wrapAuth(<UpdateTodo/>)}/>
                <Route path={PROFILE} element={wrapAuth(<Profile/>)}/>
                <Route path={LOGS} element={wrapAuth(<Logs/>)}/>
                <Route path={LOGIN} element={<Login/>}/>
                <Route path="*" element={<Empty/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default MainRoutes
