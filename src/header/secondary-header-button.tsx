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
    className?: string;
}

export function SecondaryHeaderButton (props: SecondaryHeaderButtonProps){
    return(
        <SecondaryHeaderButtonBox className={props.className}>
            {props.text}
        </SecondaryHeaderButtonBox>
    )
}
