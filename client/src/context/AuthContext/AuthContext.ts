import {createContext} from "react";
import User from "../../types/User.ts";

interface IAuthContext{
    user: User | null;
    setUser: (user: User | null) => void;
}

const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: (_user) => {},
});

export default AuthContext;
