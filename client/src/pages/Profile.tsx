import {FC, useEffect, useState} from "react";
import api from "../api/api.ts";
import useAuth from "../context/AuthContext/useAuth.ts";
import Card from "../components/Card.tsx";
import UserInfo from "../types/UserInfo.ts";
import {eventsLogger} from "../App.tsx";
import LogTypeEnum from "../enums/LogTypeEnum.ts";

const Profile: FC = () => {
    const {user} = useAuth();
    const [profile, setProfile] = useState<UserInfo | null>(null);
    useEffect(() => {
        getProfile();
    }, [])

    const getProfile = async () => {
        const response = await api.get(`/user/${user!._id}/info`)
        setProfile(response.data);
        eventsLogger.postMessage({
            type: LogTypeEnum.INFO,
            text: `profile fetched`
        })
    }

    return <div>
        <h1>Profile</h1>
        {profile && <Card>
            <div>First Name: <u>{profile.firstName}</u></div>
            <div>Last Name: <u>{profile.lastName}</u></div>
            <div>Email: <u>{user!.email}</u></div>
        </Card>}
    </div>
}

export default Profile
