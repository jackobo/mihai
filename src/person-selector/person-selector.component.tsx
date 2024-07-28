import React, {useState} from "react";
import styled from "styled-components";

const PersonSelectorBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 400px;
    background-color: bisque;
    gap: 4px;
`
const PersonsBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    gap: 3px;
`

const ButtonsBox = styled.div`
    display: flex;
    flex-direction: column;
`
interface PersonBoxProps{
    isSelected: boolean;
}


const PersonBox = styled.div<PersonBoxProps>`
    cursor: pointer;
    background-color: ${props => props.isSelected ? "blue" : "unset"};
    color: ${props => props.isSelected ? "white" : "unset"};
    
`
export const PersonSelectorComponent: React.FC = () => {
    const [currentAvailablePersonIndex, setCurrentAvailablePersonIndex] = useState(0)
    const [currentSelectedPersonIndex, setCurrentSelectedPersonIndex] = useState(0)
    const [availablePersons, setAvailablePersons] = useState([
        "Florin",
        "Mihai",
        "Stefan",
        "Lucia"
    ])
    const [selectedPersons, setSelectedPersons]= useState<string[]>([])

    const renderAvailablePerson = (person: string, index: number) =>{
        return(
            <PersonBox key={person} isSelected={index === currentAvailablePersonIndex} onClick={() => setCurrentAvailablePersonIndex(index)}>
                {person}
            </PersonBox>
        )
    }

    const renderSelectedPerson = (person: string, index: number) =>{
        return(
            <PersonBox key={person} isSelected={index === currentSelectedPersonIndex} onClick={() => setCurrentSelectedPersonIndex(index)}>
                {person}
            </PersonBox>
        )
    }

    const selectPerson = () =>{
        let selectedPerson = availablePersons[currentAvailablePersonIndex];

        setSelectedPersons([
            ...selectedPersons,
            selectedPerson
        ]);
        setCurrentSelectedPersonIndex(selectedPersons.length)

        const clona = [...availablePersons];
        clona.splice(currentAvailablePersonIndex, 1);

        setAvailablePersons(clona);

        if (currentAvailablePersonIndex > clona.length - 1){
            setCurrentAvailablePersonIndex(clona.length - 1)
        }
    }

    const unselectPerson = () =>{
        let unselectedPerson = selectedPersons[currentSelectedPersonIndex]
        setAvailablePersons(
            [
                ...availablePersons,
                unselectedPerson
            ])
        setCurrentAvailablePersonIndex(availablePersons.length)
        const clona = [...selectedPersons]
        clona.splice(currentSelectedPersonIndex, 1)
        setSelectedPersons(clona)
        if(currentSelectedPersonIndex > clona.length - 1){
            setCurrentSelectedPersonIndex(clona.length - 1)
        }
    }
    return(
        <PersonSelectorBox>
            <PersonsBox>
                {availablePersons.map(renderAvailablePerson)}
            </PersonsBox>
            <ButtonsBox>
                <button onClick={selectPerson}>
                    {">"}
                </button>
                <button onClick={unselectPerson}>
                    {"<"}
                </button>
            </ButtonsBox>
            <PersonsBox>
                {selectedPersons.map(renderSelectedPerson)}
            </PersonsBox>
        </PersonSelectorBox>
        )
}