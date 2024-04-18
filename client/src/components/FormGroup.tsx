import {FC, ReactNode} from "react";
import styled from "styled-components";

interface Props {
    children: ReactNode;
}

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 5px;
`

const FormGroup: FC<Props> = (props: Props) => {
    return <StyledFormGroup>
        {props.children}
    </StyledFormGroup>
}

export default FormGroup
