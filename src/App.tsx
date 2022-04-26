import React from 'react';
import zwcs from './mockdata/zwcs.json'
import Zwcs from './components/Zwcs'
import styles from './App.module.css';

// const hacker = "<h1>Hacked!</h1>";
// const jsHacker = "javascript: alert('Hacked!');"

function App() {
  return (
    <>
      {/* {hacker} */}
      {/* <a href={jsHacker}>hacker</a> */}
      <div className={styles.app}>
        <div className={styles.zwcsList}>
          {zwcs.map(z => <Zwcs id={z.id} name={z.name} email={z.email} />)}
        </div>
      </div>
    </>
  );
}

export default App;
