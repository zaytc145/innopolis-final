import React, {useEffect} from 'react';
import './App.css';
import AuthProvider from "./providers/AuthProvider";
import MainRoutes from "./routes/MainRoutes";
import api from "./api";

function App() {
    useEffect(() => {
        api.get('/auth/csrf')
    }, [])

    return (
        <AuthProvider>
            <MainRoutes/>
        </AuthProvider>
    );
}

export default App;
