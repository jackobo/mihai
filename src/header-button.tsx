import styled from "styled-components";
import React from "react";


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

interface MoreFunctionsButtonProps {
    text: string;
    icon: React.ReactElement;
}

export function HeaderButton (props: MoreFunctionsButtonProps) {
    return (
        <MoreFunctionsButtonBox>
            {props.icon}
            <div>
                {props.text}
            </div>
        </MoreFunctionsButtonBox>
    )

}
