import React from "react";
import styled from "styled-components";

const BannerBox = styled.div`
  width: 278px;
  height: 200px;
`
interface BannerProps{
    imgUrl: string;
    link: string;
}
export function Banner(props: BannerProps){
    return(
        <BannerBox>
            <a href={props.link} target={"_blank"}>
                <img src={props.imgUrl} />
            </a>
        </BannerBox>
    )
}
