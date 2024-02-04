import styled from "styled-components";
import {HeaderSearchInput} from "./header-search-input";
import {HeaderButton} from "./header-button";
import {EllipsisButton} from "./ellipsis-button";
import {LoginButton} from "./login-button";
import {SignupButton} from "./signup-button";
import React from "react";
import {Logo} from "./logo";

const MainHeaderBox = styled.div`
  width:100%;
`
const MainHeaderContentBox = styled.div`
  margin-right: auto;
  margin-left: auto;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export function MainHeader(){
    return(
        <MainHeaderBox>
            <MainHeaderContentBox>
                <Logo/>
                <HeaderSearchInput/>
                <HeaderButton text={"More functions"} icon={<EllipsisButton/>}/>
                <HeaderButton text={"Estimation"} icon={<div>x</div>}/>
                <HeaderButton text={"English/CNY"} icon={<div>y</div>}/>
                <LoginButton/>
                <SignupButton/>
            </MainHeaderContentBox>
        </MainHeaderBox>
    )
}
