import {FC, ReactNode} from "react";
import styled from "styled-components";

interface Props {
    children?: ReactNode
}

const StyledTableTh = styled.th`
  border: 1px solid lightgrey;
  padding: 8px 10px;
`

const TableTh: FC<Props> = ({children}) => {
    return <StyledTableTh>
        {children}
    </StyledTableTh>
}

export default TableTh;
