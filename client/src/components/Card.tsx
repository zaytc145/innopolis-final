import styled from "styled-components";
import {FC, ReactNode} from "react";

interface Props {
    children: ReactNode;
}

const StyledCard = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
`

const Card: FC<Props> = (props) => {
    return (
        <StyledCard>
            {props.children}
        </StyledCard>
    );
}

export default Card;
