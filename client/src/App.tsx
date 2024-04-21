import React from 'react';
import AuthProvider from "./providers/AuthProvider";
import MainRoutes from "./routes/MainRoutes";

export const eventsLogger = new Worker(new URL("./eventsLogger.ts", import.meta.url));

function App() {
    return (
        <AuthProvider>
            <MainRoutes/>
        </AuthProvider>
    );
}

export default App;
