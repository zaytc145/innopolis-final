import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";
import {LOGIN, PROFILE, TODOS} from "../routes/routerLinks";
import useAuth from "../context/AuthContext/useAuth";
import {FC, useCallback} from "react";

const Header = styled.div`
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  gap: 15px;
`

const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`

const Default: FC = () => {

    const {user, removeUser} = useAuth();

    const logout = useCallback(() => {
        removeUser();
    }, [removeUser]);

    return <div>
        <Header>
            {!user && <Link to={LOGIN}>Login</Link>}
            {user && <>
                <Link to={PROFILE}>Profile</Link>
                <Link to={TODOS}>Todos</Link>
                <Link onClick={logout} to={""}>Logout</Link>
            </>}
        </Header>
        <ContentWrapper>
            <Outlet/>
        </ContentWrapper>
    </div>
}

export default Default
