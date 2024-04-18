import {createContext} from "react";
import User from "../../types/User";

interface IAuthContext{
    user: User | null;
    setUser: (user: User | null) => void;
}

const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: (user) => {},
});

export default AuthContext;
