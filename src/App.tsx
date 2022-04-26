import React from 'react';
import './App.css';
import zwcs from './mockdata/zwcs.json'
import Zwcs from './components/zwcs'



function App() {
  return (
    <ul>
      {zwcs.map( z => <Zwcs id = {z.id} name = {z.name} email = {z.email}/>)}
    </ul>
  );
}

export default App;
