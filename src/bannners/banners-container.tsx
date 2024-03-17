import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Banner} from "./banner";

const BannersContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`

const CounterBox = styled.div`
    background-color: green;
    cursor: pointer;
    color: white;
`

export function BannersContainer(){
    const [allBanners, setAllBanners] = useState([
            <Banner imgUrl={"https://imgus.pandabuy.com/static/images/2022-08-12/b8b8c11a470c47988e01e774316e2805-16602947169371121938302294965255.png"}
                    link={"https://www.pandabuy.com/notice/ntdetail?id=390854650061497"}/>,
            <Banner imgUrl={"https://imgus.pandabuy.com/static/images/2022-08-12/0fb25add1fea430786b1ea859385e90e-16602947437365099984762404147260.png"}
                    link={"https://www.pandabuy.com/notice/ntdetail?id=2077927159955515"}/>,
            <Banner imgUrl={"https://imgus.pandabuy.com/static/images/2023-05-29/196585c919dc4ccaa40133000f0ae1f4-1685344249849101207344552515760.png"}
                    link={"https://www.pandabuy.com/notice/ntdetail?id=391902299111500"}/>,
            <Banner imgUrl={"https://imgus.pandabuy.com/static/images/2023-05-17/b9dab6a089484a499c8d3b7bb1a3b807-168432065133283492567551979545.png"}
                    link={"https://www.pandabuy.com/notice/ntdetail?id=673328097164942"}/>,

            <Banner imgUrl={"https://imgus.pandabuy.com/static/images/2023-04-12/8b628abb2c724986ad5affe0fd34af3c-16812703481396187792147790977477.png"}
                    link={"https://www.pandabuy.com/notice/ntdetail?id=672263746433316"}/>,
            <Banner imgUrl={"https://imgus.pandabuy.com/static/images/2022-08-22/16e44e75dd63408d8ac39cc1eb235356-16611485930547104526334017471868.png"}
                    link={"https://www.pandabuy.com/mb/app"}/>
        ]
    );

    useEffect(() => {
        console.log('Render component ' + Date.now());
        const intervalId = setInterval(() => {
            console.log('Set interval ' + Date.now());
            const clona = [...allBanners];
            const removed = clona.splice(0, 1);
            setAllBanners([
                ...clona,
                ...removed
            ])

        }, 2000);

        return () => {
            console.log('Destroy component ' + Date.now());
            clearInterval(intervalId)
        }

    });

    const bannersToRender = allBanners.slice(0, 4);


    return(
        <BannersContainerBox>
            {bannersToRender.map(b => b)}
        </BannersContainerBox>
    )
}
