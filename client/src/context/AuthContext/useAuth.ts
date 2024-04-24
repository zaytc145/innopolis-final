import {useCallback, useContext} from "react";
import AuthContext from "./AuthContext.ts";
import User from "../../types/User.ts";

const useAuth = () => {
    const {user, setUser} = useContext(AuthContext);

    const addUser = useCallback((user: User) => {
        setUser(user);
    },[setUser])

    const removeUser = useCallback(() => {
        setUser(null);
    },[setUser])

    return {user, addUser, removeUser}
}

export default useAuth
