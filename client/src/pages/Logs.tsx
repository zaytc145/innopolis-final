import {useEffect, useState} from "react";
import Log from "../types/Log.ts";
import Table from "../components/Table.tsx";
import TableTh from "../components/TableTh.tsx";
import api from "../api/api.ts";

const Logs = () => {

    const [logs, setLogs] = useState<Log[]>([]);

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleString();
    }

    useEffect(() => {
        getLogs()
    },[])

    const getLogs = async () => {
        const response = await api.get("/logs");
        setLogs(response.data);
    }


    return (
        <div>
            <h1>Logs</h1>
            <Table>
                <thead>
                <tr>
                    <TableTh>Text</TableTh>
                    <TableTh>Type</TableTh>
                    <TableTh>Date</TableTh>
                </tr>
                </thead>
                <tbody>
                {logs.map((log) => (
                    <tr key={log._id}>
                        <TableTh>{log.text}</TableTh>
                        <TableTh>{log.type}</TableTh>
                        <TableTh>{formatDate(log.date)}</TableTh>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Logs;
