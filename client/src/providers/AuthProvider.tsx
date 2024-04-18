import AuthContext from "../context/AuthContext/AuthContext";
import {ReactNode, useState} from "react";
import User from "../types/User";

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
