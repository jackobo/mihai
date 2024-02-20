import styled from "styled-components";
import {TopBannerSearch} from "./top-banner-search";
import {DeliverySteps} from "./delivery-steps";
import React from "react";

const TopBannerTitleBox = styled.h1`
  color: white;
  font-size: 50px;
  padding-top: 85px;
  padding-bottom: 30px;
  
`
const TopBannerBox = styled.div`
  background-image: url("https://www.pandabuy.com/static/img/home_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 440px;
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const TopBannerContentBox = styled.div`
 
`
export function TopBanner(){
    return(
        <TopBannerBox>
            <TopBannerContentBox>
                <TopBannerTitleBox>
                    Shop from China, Shop with Pandabuy
                </TopBannerTitleBox>
                <TopBannerSearch/>
                <DeliverySteps/>
            </TopBannerContentBox>

        </TopBannerBox>
    )


}
