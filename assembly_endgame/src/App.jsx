import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/Header'
import Eliminations from './components/Eliminations'
import Notice from './components/Notice';
import Letters from './components/Letters';
import Board from './components/Board';
import './utils.js'
import { nanoid } from 'nanoid';
import { getRandomWord } from './utils.js';
import {languages} from './languages.js'

function App() {

  const arrayLetter = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split("")
  const [chosenWord, setChosenWord] = useState(() => getRandomWord());
  const [chosenWordObj, setChosenWordObj] = useState(() => parseChosenWord(chosenWord));
  const [boardObjects, setBoardObjects] = useState(() => generateBoardObjects());
  const [eliminationNumber, setEliminationsNumber] = useState(0);
  const [gameOver, setGameOver] = useState({over: false, won: false})
  console.log(chosenWord)

  useEffect(() => {
    gameOverCheck();
  }, [chosenWordObj, eliminationNumber]);

  function generateBoardObjects(){
      return arrayLetter.map(letterArr => {
                return {id : nanoid(), letter: letterArr, wrongLetter: false, pressed: false}
      })
  }

  function parseChosenWord(word) {
    return word.split("").map((letter, index) => ({
      position: index,
      letter: letter,
      found: false
    }));
  }

  function renderLetter(letter){
    setChosenWordObj( prevObjState => {
      return prevObjState.map(obj => {
     
        if (obj.letter.toLowerCase() === letter.toLowerCase()){
        
          return {...obj, found : true}
        } else {
          
          return {...obj}
        }
      })
    })
  }

  function gameOverCheck(){
    setGameOver( (prev) => {
    if(chosenWordObj.every((obj) => obj.found === true) && ((languages.length - 1)  >= eliminationNumber)){
        return {over: true, won: true}
    } else if ((!chosenWordObj.every((obj) => obj.found === true) && ((languages.length - 1) === eliminationNumber))) {
        return {over: true, won: false}
    } else{
        return prev

    }
    }) 
  }

  function handleClickBoardItem(id){
    setBoardObjects(prevObjState => {
      return prevObjState.map(obj => {
        if (obj.id === id) {
          if (obj.pressed) {
        
            return { ...obj };
          } else if (!chosenWord.includes(obj.letter.toLowerCase())) {

            setEliminationsNumber(prevValue => prevValue + 1)
          
            return { ...obj, wrongLetter: true, pressed: true };

          } else {
            
            renderLetter(obj.letter);
            return { ...obj, pressed: true };

          }
        } else {
          return { ...obj };
        }
      });
    });

  }

  function resetGame(){
    const newWord = getRandomWord();
    setChosenWord(newWord);
    setChosenWordObj(parseChosenWord(newWord));
    setBoardObjects(generateBoardObjects());
    setEliminationsNumber(0);
    setGameOver({ over: false, won: false });
  }
 
  return (
    <>
      <main className='gameBoard'>

        <Header/>

        <Notice gameOver={gameOver} numberOfEliminations={eliminationNumber} languages={languages}/>
      
        <Eliminations languages={languages} numberOfEliminations={eliminationNumber}/>

        <Letters chosenWordObj={chosenWordObj}/>

        <Board boardObjectsB={boardObjects} handleClickApp={!gameOver.over && handleClickBoardItem}/>

        {gameOver.over && <button className='newGameButton' onClick={() => resetGame()}>New Game</button>}
      </main>
    </>
  )
}

export default App
