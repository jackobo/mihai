import React, {useState} from "react";
import styled from "styled-components";

const MessageBox = styled.div`
    display: flex;
    gap: 5px;
`


export const IncrementButtonComponent: React.FC = () =>{
    const [messages, setMessages] = useState<string[]>([]);
    const [newMessage, setNewMessage] = useState('');

    const onAddClick = () =>{
        setMessages([
            ...messages,
            newMessage
        ]);
    }



    const renderOneMessage = (m: string, index: number) =>{

        const removeMessage = () =>{
            const clona = [...messages];
            clona.splice(index, 1);
            setMessages(clona);
        }

        return (
            <MessageBox>
                <button onClick={removeMessage}>
                    X
                </button>
                <div>
                    {m}
                </div>
        </MessageBox>)
    }

    return(
        <div>
           <input onChange={event => setNewMessage(event.target.value)}/>
            <button onClick={onAddClick}>
                Add
            </button>
            <div>
                {messages.map(renderOneMessage)}
            </div>
        </div>

    )
}