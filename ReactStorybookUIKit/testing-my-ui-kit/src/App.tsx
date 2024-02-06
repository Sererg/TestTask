import React from 'react';
import './App.css';
import {MyButton, MyInput} from 'my-ui-kit'

function App() {
  return (
    <div className="App">
      <MyButton color={'GREEN'} >Button</MyButton>
      <MyInput 
      big
      label='input'
      placeholder='Введите текст'></MyInput>
    </div>
  );
}

export default App;
