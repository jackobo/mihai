import React from "react";
import styled from "styled-components";

const HeaderSearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background-color: #f5f5f5;
  color: #606266;
  border-radius: 8px;
  padding: 8px;
  font-size: 14px;
`

const InputBox = styled.input`
  border: none;
  background-color: inherit;
  color:inherit;
  outline: none;
  font-size: inherit;

  &::placeholder {
    color: #b0b0b6;
  }
`

const ImageBox = styled.div`
  background-image: url("/image-icon.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 20px;
`

const SelectBox = styled.select`
    background-color: inherit;
    border:none;
    color:inherit;
    outline:none;
    font-size: inherit;
 
    
`

const SelectOptionBox = styled.option`
  background-color: #f5f5f5;
`

export function HeaderSearchInput(){
    //#f5f5f5
    return (
        <HeaderSearchBox>
            <SelectBox value={""}>
               <SelectOptionBox>
                   product
               </SelectOptionBox>
                <SelectOptionBox>
                    shop
                </SelectOptionBox>
            </SelectBox>
            <InputBox placeholder="Product's link or name/shop's link/PI"/>
            <ImageBox/>
        </HeaderSearchBox>

    );
}
