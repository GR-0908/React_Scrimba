import { useEffect, useState } from 'react';
import './index.css';
import Die from '../components/Die';
import { nanoid } from 'nanoid';

function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const [boardReset, setBoardReset] = useState(false);

  useEffect(() => {
    if (checkEndGame(dice)) {
      handleEndGameBoard();
    }
  }, [dice]);

  function generateAllNewDice() {
    let randNumArray = [];
    for (let i = 0; i < 10; i++) {
      randNumArray[i] = {
        id: nanoid(),
        number: Math.floor(Math.random() * 6) + 1,
        hold: false
      };
    }
    return randNumArray;
  }

  function registerHold(id) {
    setDice(prevDice =>
      prevDice.map(diceEl =>{
        
        if(diceEl.id === id){
          return { ...diceEl, hold: !diceEl.hold }
        }else{
          return diceEl;
        }  
      }
      )
    );
  }

  function checkEndGame(){
    let allHeld = true;
    
    dice.forEach((element) => {
      if (!element.hold) {
        allHeld = false;
      }
    });
    
    if (!allHeld) return false;

    const firstElementValue = dice[0].number;
    
    let allSameValue = true;

    dice.forEach((element) => {
      if (element.number !== firstElementValue) {
        allSameValue = false;
      }
    });
    
    return allSameValue;
  }

  function handleEndGameBoard() {
    setBoardReset(true);

  }

  function handleResetGame(){
    setDice(generateAllNewDice())
    setBoardReset(false);
  }

  function handleRollBtnClick() {
    setDice(prevDice =>
          prevDice.map(diceEl => {
          if (!diceEl.hold) {
            return { ...diceEl, number: Math.floor(Math.random() * 6) + 1 };
          }
          return { ...diceEl };
        })
    )

  }

  function generateDiceElements(){
      
    if(boardReset){
      return dice.map((obj) => (
                <Die
                  key={obj.id}
                  value={obj.number}
                  hold={obj.hold}
                  handleClick={() => null}
                />
              ))
    }else{
      return dice.map((obj) => (
                  <Die
                    key={obj.id}
                    value={obj.number}
                    hold={obj.hold}
                    handleClick={() => registerHold(obj.id)}
                  />
                ))
    }
    
  }

  return (
    <>
      <main className="gameBoard">
        <div className="titleAndDescription">
          <h1>Tenzies</h1>
          <p>
            Roll until all dice are the same.
            Click each die to freeze it at its current value between rolls.
          </p>
        </div>
        <div className="playGrid">
          {generateDiceElements()}
        </div>
        {boardReset ? <button className="rollButton" onClick={handleResetGame}>New Game</button> 
                    : <button className="rollButton" onClick={handleRollBtnClick}>Roll</button>}
      </main>
    </>
  );
}

export default App;
