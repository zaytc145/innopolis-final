import {FC, ReactNode} from "react";
import styled from "styled-components";

interface Props {
    children: ReactNode
}

const StyledTable = styled.table`
  border: 1px solid lightgrey;
  border-collapse: collapse;
`

const Table: FC<Props> = ({children}) => {
    return <StyledTable>
        {children}
    </StyledTable>
}

export default Table;
