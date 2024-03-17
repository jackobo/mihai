import React, {useState} from 'react';
import {GameManager, GameStatus} from "../game-logic/game-manager";
import styled from "styled-components";

const MatrixBox = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    width: fit-content;
    gap: 4px;
    
    
`
const CellBox =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
`
interface CellComponentProps{
    displayNumber: number;
    onNumberRevealed: (n: number) => void;
}
const CellComponent: React.FC<CellComponentProps> = (props) =>{
    const [isRevealed, setIsRevealed] = useState(false)
    const reveal = () =>{
        setIsRevealed(true);
        props.onNumberRevealed(props.displayNumber)
    }

    if ( isRevealed){
        return(
            <CellBox>
                {props.displayNumber}
            </CellBox>
        )
    }

    return(
        <CellBox onClick={reveal} />
    )
}

export const GuessGameComponent: React.FC = () => {

    const [gameManager, setGameManager] = useState<GameManager>(new GameManager());
    const [gameState, setGameState] = useState<GameStatus>(GameStatus.GameOver);


    const startGame = () => {
        const g = new GameManager();
        g.startGame();
        setGameManager(g);
        setGameState(GameStatus.GameStarted);
    }

    const onNumberRevealed = (n: number) =>{
        const result = gameManager.revealNumber(n);
        if(result === GameStatus.GameOver){
            setGameState(GameStatus.GameOver);
        }
    }


    const renderGameBody = () =>{
        if (gameState === GameStatus.GameOver)
        {
            return(
                <div>
                    <div>
                        Game Over
                    </div>
                    <div>
                        {`Your score is: ${gameManager.getScore()}`}
                    </div>

                </div>
            )
        }
        return(
            <MatrixBox>
                {gameManager.randomNumbers.map((n, index) => <CellComponent key={`${n}_${index}`} displayNumber={n} onNumberRevealed={onNumberRevealed}/>)}
            </MatrixBox>
        )
    }





    return(
        <div>
            <button onClick={startGame}>
                Start Game
            </button>
            {renderGameBody()}
        </div>
    )
}
