import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Empty from "../pages/Empty";
import {LOGIN, PROFILE, TODOS, TODOS_CREATE} from "./routerLinks";
import Default from "../layouts/Default";
import Todos from "../pages/Todos";
import Profile from "../pages/Profile";
import CreateTodo from "../pages/CreateTodo";
import useAuth from "../context/AuthContext/useAuth";
import {ReactElement} from "react";


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
                <Route path={PROFILE} element={wrapAuth(<Profile/>)}/>
                <Route path={LOGIN} element={<Login/>}/>
                <Route path="*" element={<Empty/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default MainRoutes
