import React, { useState } from 'react';
import zwcs from './mockdata/zwcs.json'
import Zwcs from './components/Zwcs'
import styles from './App.module.css';
import logo from './assets/images/logo.png'
import ShoppingCart from './components/ShoppingCart';


// const hacker = "<h1>Hacked!</h1>";
// const jsHacker = "javascript: alert('Hacked!');"



const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);




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

        <button
          onClick={() => {
            setCount(count + 1);//异步，如需处理异步逻辑需要介入副作用钩子
          }}
        >+1s</button>

        <span>count: {count}</span>
        <ShoppingCart />
        <div className={styles.zwcsList} key={1}>
          {zwcs.map(z => <Zwcs id={z.id} name={z.name} email={z.email} />)}
          {/* {this.state.gallery.map(z => <Zwcs id={z.id} name={z.name} email={z.email} />)} */}
        </div>
      </div>
    </>
  );
}



// interface Props { };
// interface State {
//   gallery: any[]
//   count: number;
// };

// class App extends React.Component<Props, State> {
//类组件
// //*生命周期第一阶段：初始化
// //初始化state
// constructor(props) {
//   super(props);
//   this.state = {
//     gallery: [],
//     count: 0,
//   }
// }

// //在组件创建好dom元素以后、挂载进页面的时候调用
// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => this.setState({ gallery: data }));
// }

// //*生命周期第二阶段：更新
// // 在组件接收到一个新的 prop(更新后）时被调用。
// // componentWillReceiveProps
// // state getDerivedStateFromProps(nextProps,prevState){}
// // shouldComponentUpdate(nextProps,nextState){
// // return nextState.some !==this.state.some}
// //组件更新后调用
// // componentDidUpdate() { }

// //*生命周期第三阶段：销毁
// //组件销毁后调用，
// //可以当作析构函数 destructor 来使用
// // componentWillUnmount() { }


// render(): React.ReactNode {
// return ({/* <button
//         onClick={() => {
//           this.setState({ count: this.state.count + 1 },

//             () => {
//               console.log(this.state.count);
//               this.setState({ count: this.state.count + 1 },
//                 () => { console.log(this.state.count) }
//               );
//             }

//           );

//         }}
//       >+1s</button> */}

//       <button
//         onClick={() => {
//           this.setState((preState, preProps) => {
//             return { count: preState.count + 1 }
//           },
//             () => { console.log(this.state.count); }
//           );
//           this.setState((preState, preProps) => {
//             return { count: preState.count + 1 }
//           },
//             () => { console.log(this.state.count); }
//           );
//         }}
//       >+1s</button>)

//      }
//   }

export default App;
