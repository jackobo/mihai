import {SecondaryHeaderButton} from "./secondary-header-button";
import styled from "styled-components";

const ProductCategoryButtonContainerBox =  styled.div`
  position: relative;
`

const BadgeBox = styled.div`
  background-color: red;
  color: white;
  border-radius: 8px;
  font-size: 10px;
  padding: 3px 6px;
  width: fit-content;
  line-height: 1;
  position: absolute;
  top: -3px;
  right: -15px;
`

const ProductCategoryButtonBox = styled(SecondaryHeaderButton)`
  &:hover{
    background-color: var(--primary-color);
  }
`
export function ProductCategoryButton(){

    return(
        <ProductCategoryButtonContainerBox>
            <ProductCategoryButtonBox text="Product Category"/>
            <BadgeBox>
                NEW
            </BadgeBox>
        </ProductCategoryButtonContainerBox>

    )
}
