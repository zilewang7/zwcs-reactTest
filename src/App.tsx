import React from 'react';
import './App.css';
import zwcs from './mockdata/zwcs.json'
import Zwcs from './components/zwcs'

// const hacker = "<h1>Hacked!</h1>";
const jsHacker = "javascript: alert('Hacked!');"

function App() {
  return (
    <>
      {/* {hacker} */}
      <a href={jsHacker}>hacker</a>
      <ul>
        {jsHacker}
        {zwcs.map( z => <Zwcs id = {z.id} name = {z.name} email = {z.email}/>)}
      </ul>
    </>
  );
}

export default App;
