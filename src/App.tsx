import React from 'react';
import zwcs from './mockdata/zwcs.json'
import Zwcs from './components/Zwcs'
import styles from './App.module.css';
import logo from './assets/images/logo.png'

// const hacker = "<h1>Hacked!</h1>";
// const jsHacker = "javascript: alert('Hacked!');"

function App() {
  return (
    <>
      {/* {hacker} */}
      {/* <a href={jsHacker}>hacker</a> */}
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <div id={styles.headerLogo}>
            <img src={logo} className={styles.appLogo} alt="logo" />
          </div>
          <div id={styles.headerWord}>
            <h1>中午吃啥</h1>
          </div>
        </div>
        <div className={styles.zwcsList}>
          {zwcs.map(z => <Zwcs id={z.id} name={z.name} email={z.email} />)}
        </div>
      </div>
    </>
  );
}

export default App;
