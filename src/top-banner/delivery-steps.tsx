import styled from "styled-components";
import {DeliveryStep} from "./delivery-step";

const DeliveryStepsBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 25px;
  padding: 0 40px;
  position: relative;
`

const LineBox = styled.div`
  --margin-offset: calc(252px/2 + 40px);
  height: 2px;
  width: calc(100% - 2 * var(--margin-offset));
  background-color: white;
  position: absolute;
  top: 9px;
  left: var(--margin-offset);
  
`

export function DeliverySteps() {
    return (
        <DeliveryStepsBox>
            <LineBox/>
            <DeliveryStep title={"Place Orders"} details={"Selection & Purchase"}/>
            <DeliveryStep title={"Submit Parcels"} details={"QC Confirm & Global Shipping"}/>
            <DeliveryStep title={"Sign Delivery"} details={"Receive & Share"}/>
        </DeliveryStepsBox>
    )
}
