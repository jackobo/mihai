import React from "react";
import styled from "styled-components";
import {ButtonBox} from "./button-box";


const LoginButtonBox = styled(ButtonBox)`
  background-color: var(--primary-color);
  color: var(--primary-color-contrast);
  border:none;

`
export function LoginButton(){
    return (
        <LoginButtonBox>
            Log In
        </LoginButtonBox>
    )

}
