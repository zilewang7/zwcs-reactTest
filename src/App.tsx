import React from 'react';
import zwcs from './mockdata/zwcs.json'
import Zwcs from './components/Zwcs'
import styles from './App.module.css';
import logo from './assets/images/logo.png'
import ShoppingCart from './components/ShoppingCart';


// const hacker = "<h1>Hacked!</h1>";
// const jsHacker = "javascript: alert('Hacked!');"


interface Props { };
interface State {
  gallery: any[]
  count: number;
};

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      count: 0,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ gallery: data }));
  }

  render(): React.ReactNode {
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
          {/* <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 },
                
                () => {
                  console.log(this.state.count);
                  this.setState({ count: this.state.count + 1 },
                    () => { console.log(this.state.count) }
                  );
                }

              );

            }}
          >+1s</button> */}

          <button
            onClick={() => {
              this.setState((preState, preProps) => {
                return { count: preState.count + 1 }
              },
                () => { console.log(this.state.count); }
              );
              this.setState((preState, preProps) => {
                return { count: preState.count + 1 }
              },
                () => { console.log(this.state.count); }
              );
            }}
          >+1s</button>

          <span>count: {this.state.count}</span>
          <ShoppingCart />
          <div className={styles.zwcsList}>
            {zwcs.map(z => <Zwcs id={z.id} name={z.name} email={z.email} />)}
            {this.state.gallery.map(z => <Zwcs id={z.id} name={z.name} email={z.email} />)}
          </div>
        </div>
      </>
    );
  }
}

export default App;
