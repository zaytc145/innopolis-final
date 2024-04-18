import {FC, ReactNode} from "react";
import styled from "styled-components";

interface Props {
    children?: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset"
}

const StyledButton = styled.button`
  padding: 5px;
  border: 1px solid lightgray;
  background: white;
  cursor: pointer;
`

const Button: FC<Props> = (props) => {
    const {children, onClick, type="button"} = props;
    return <StyledButton onClick={onClick} type={type}>
        {children}
    </StyledButton>
}

export default Button
