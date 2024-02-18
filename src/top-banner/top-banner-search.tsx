import styled from "styled-components";

const TopBannerSearchBox = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: white;
  gap: 10px;
  font-size: 28px;
  width: min(980px, 100%);
  border-radius: 5px;
  
`
const SelectBox = styled.div`
  padding-left: 20px;
`
const SearchInputBox = styled.input`
  outline: none;
  border: none;
  color: inherit;
  background-color: inherit;
  font-size: inherit;
  width: 100%;
`

const SearchButtonBox = styled.div`
  background-color: var(--primary-color);
  color: var(--primary-color-contrast);
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 30px;
`

export function TopBannerSearch(){
    return(
        <TopBannerSearchBox>
            <SelectBox>
                Select
            </SelectBox>
            <SearchInputBox placeholder="Product's link or name/shop's link/PI" />

            <SearchButtonBox>
                Search
            </SearchButtonBox>
        </TopBannerSearchBox>
    )
}
