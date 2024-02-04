import React from "react";
import styled from "styled-components";
import {ButtonBox} from "./button-box";

const SignupButtonBox = styled(ButtonBox)`
  background-color: var(--primary-color-contrast);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  &:hover{
    background-color: #e7f8f0;
  }
`
export function SignupButton (){
    return(
    <SignupButtonBox>
        Sign Up
    </SignupButtonBox>
    )
}
