import React, {PropsWithChildren, useState} from "react";
import styled from "styled-components";

const TitleBox = styled.div`
    
`
const ButtonsContainerBox = styled.div`
    display: flex;
    gap: 10px;
`
const CardBox = styled.div`
    padding: 12px;
    border-radius: 8px;
    background-color: #ececec;
`
enum Options {
    none,
    yes,
    no
}

const SelectedButtonBox = styled.button`
    background-color: #11ba66;
    color: white;
`

interface OptionButtonProps extends PropsWithChildren {
    isSelected: boolean;
    onClick: () => void;
}

const OptionButton: React.FC<OptionButtonProps> = (props) => {
    if (props.isSelected) {
        return (
            <SelectedButtonBox onClick={props.onClick}>
                {props.children}
            </SelectedButtonBox>
        )
    }
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )
}
export const OptionButtonsComponent: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState(Options.none);

    const ToggleButtonValue = (targetValue: Options) => {
        if (selectedOption === targetValue) {
            setSelectedOption(Options.none)
        } else {
            setSelectedOption(targetValue)
        }
    }

    const onYesCLick = () => {
        ToggleButtonValue(Options.yes)
    }
    const onNoCLick = () => {
        ToggleButtonValue(Options.no)


    }

    return (
        <CardBox>
            <TitleBox> Esti sigur?</TitleBox>
            <ButtonsContainerBox>
                <OptionButton isSelected={selectedOption === Options.yes} onClick={onYesCLick}>
                    <div>DA</div>
                </OptionButton>
                <OptionButton isSelected={selectedOption === Options.no} onClick={onNoCLick}>
                    NU
                </OptionButton>
            </ButtonsContainerBox>

        </CardBox>
    )
}
