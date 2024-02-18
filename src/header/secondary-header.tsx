import styled from "styled-components";
import {SecondaryHeaderButton} from "./secondary-header-button";
import {ProductCategoryButton} from "./product-category-button";

const SecondaryHeaderBox = styled.div`
 
`

const SecondaryHeaderContentBox =  styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 20px;
`
export function SecondaryHeader (){
    return(
        <SecondaryHeaderBox>
            <SecondaryHeaderContentBox>
                <ProductCategoryButton/>
                <SecondaryHeaderButton text={"Shoes"}/>
                <SecondaryHeaderButton text={"Men's Wear"}/>
                <SecondaryHeaderButton text={"Women's Wear"}/>
                <SecondaryHeaderButton text={"Bags"}/>
                <SecondaryHeaderButton text={"Accessories"}/>
            </SecondaryHeaderContentBox>

        </SecondaryHeaderBox>
    )
}
