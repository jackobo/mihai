import styled from "styled-components";

const SecondaryHeaderButtonBox = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 20px;
  &:hover{
    background-color: #f2f2f2;
  }
`

interface SecondaryHeaderButtonProps{
    text: string;
}

export function SecondaryHeaderButton (props: SecondaryHeaderButtonProps){
    return(
        <SecondaryHeaderButtonBox>
            {props.text}
        </SecondaryHeaderButtonBox>
    )
}
