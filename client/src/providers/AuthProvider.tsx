import AuthContext from "../context/AuthContext/AuthContext.ts";
import {ReactNode, useState} from "react";
import User from "../types/User.ts";

interface Props {
    children: ReactNode;
}

const AuthProvider = ({children}: Props) => {
    const [user, setUser] = useState<User | null>(null);

    return <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider
