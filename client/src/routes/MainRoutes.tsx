import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Empty from "../pages/Empty";
import {LOGIN, LOGS, PROFILE, TODOS, TODOS_CREATE, TODOS_UPDATE} from "./routerLinks";
import Default from "../layouts/Default";
import Todos from "../pages/Todos";
import Profile from "../pages/Profile";
import CreateTodo from "../pages/CreateTodo";
import useAuth from "../context/AuthContext/useAuth";
import {ReactElement} from "react";
import Logs from "../pages/Logs";
import UpdateTodo from "../pages/UpdateTodo";


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
