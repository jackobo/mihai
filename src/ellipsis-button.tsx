import React from "react";
import styled from "styled-components";

const DotBox = styled.div`
  width:3px;
  height:3px;
  background-color: var(--hover-color);
  border-radius: 50%;
  
`

const EllipsisBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid var(--hover-color);
  height: 25px;
  width: 25px;
  padding:2px;
`




export function EllipsisButton(){
    return (
        <EllipsisBox>
            <DotBox/>
            <DotBox/>
            <DotBox/>
        </EllipsisBox>);
}
