import React from "react";
import styled from "styled-components";


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


//test

export function EllipsisButton(){
    return (
        <EllipsisBox>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="ellipsis"><path fill="currentColor" d="M4 8a2 2 0 1 1-3.999.001A2 2 0 0 1 4 8zM10 8a2 2 0 1 1-3.999.001A2 2 0 0 1 10 8zM16 8a2 2 0 1 1-3.999.001A2 2 0 0 1 16 8z"></path></svg>
        </EllipsisBox>);
}
