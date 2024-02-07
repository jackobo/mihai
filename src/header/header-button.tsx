import styled from "styled-components";
import React from "react";


const HeaderButtonBox = styled.div`
  --hover-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: var(--hover-color);
  &:hover {
    --hover-color: var(--primary-color);
  }
  
  
  
`

interface HeaderButtonProps {
    text: string;
    icon: React.ReactElement;
}

export function HeaderButton (props: HeaderButtonProps) {
    return (
        <HeaderButtonBox>
            {props.icon}
            <div>
                {props.text}
            </div>
        </HeaderButtonBox>
    )

}
