import styled from "styled-components";
import {HeaderSearchInput} from "./header-search-input";
import {HeaderButton} from "./header-button";
import {EllipsisButton} from "../ellipsis-button";
import {LoginButton} from "../login-button";
import {SignupButton} from "../signup-button";
import React from "react";
import {Logo} from "./logo";

const MainHeaderBox = styled.div`
  width:100%;
`

const MainHeaderContentBox = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-color) ;
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
