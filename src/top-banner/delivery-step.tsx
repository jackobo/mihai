import styled from "styled-components";

const DeliveryStepBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 33.33%;
`
const DotOuterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color:rgba(255, 255, 255, 0.32);
  margin-bottom: 15px;
`
const DotInnerBox = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: white;
`
const TitleBox = styled.div`
    color: white;
`
const DetailsBox = styled.div`
    color: #8b8b8b;
`
interface DeliveryStepProps{
    title: string;
    details: string;
}
export function DeliveryStep(props: DeliveryStepProps){
    return(
        <DeliveryStepBox>
            <DotOuterBox>
                <DotInnerBox/>
            </DotOuterBox>
            <TitleBox>
                {props.title}
            </TitleBox>
            <DetailsBox>
                {props.details}
            </DetailsBox>
        </DeliveryStepBox>

    )
}
