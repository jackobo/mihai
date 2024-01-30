import {EllipsisButton} from "./ellipsis-button";
import styled from "styled-components";


const MoreFunctionsButtonBox = styled.div`
  --hover-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  &:hover {
    --hover-color: var(--primary-color);
  }
  
  color: var(--hover-color);
  
`

export function MoreFunctionsButton () {
    return (
        <MoreFunctionsButtonBox>
            <EllipsisButton/>
            <div>
                More functions
            </div>
        </MoreFunctionsButtonBox>
    )

}
