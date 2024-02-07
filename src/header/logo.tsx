import React from "react";
import styled from "styled-components";

const LogoBox = styled.img`
  width: 162px;
`
export function Logo () {
    return (

        <LogoBox src="https://www.pandabuy.com/static/img/header-logo.png" alt={"Logo Pandabuy"}/>
    )
}
