import React, { useState, useEffect } from 'react';
import zwcs from './mockdata/zwcs.json'
import Zwcs from './components/Zwcs'
import styles from './App.module.css';
import logo from './assets/images/logo.png'
import ShoppingCart from './components/ShoppingCart';
import UserCard from './components/UserCard'


// const hacker = "<h1>Hacked!</h1>";
// const jsHacker = "javascript: alert('Hacked!');"
interface Props {
  username?: string;
}


const App: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [gallery, setGallery] = useState<any>([]);
  const [loading, setLoding] = useState<boolean>(true);
  const [error, setError] = useState<string>('none');

  useEffect(() => {
    document.title = `${count}个菜啊`
  }, [count])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(data => setGallery(data));
        const data = await response.json()
        setGallery(data);
      } catch (e: any) {
        setError(e.message);
      }
      setLoding(false)
    }
    fetchData();
  }, [])

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
        {/* <h2>USER:{props.username}</h2> */}
        <UserCard />
        {/* <button className={styles.plus1s}
          onClick={() => {
            setCount(count + 1);//异步，如需处理异步逻辑需要介入副作用钩子
          }}
        >+1s</button>

        <span>count: {count}</span> */}
        <ShoppingCart />
        {(error !== 'none') ? <><h2>出错</h2><p>{error}</p></> : <></>}
        {loading ? <h2>loading......</h2> :
          <div className={styles.zwcsList}>
            {zwcs.map(z => <Zwcs id={z.id} name={z.name} email={z.email} setCount={setCount} count={count} />)}
            {gallery.map(z => <Zwcs id={z.id + 3} name={z.name} email={z.email} setCount={setCount} count={count} />)}
          </div>
        }
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
