import React, { useContext } from "react";
import styles from "./Zwcs.module.css";
import { appContext, appSetStateContext } from "../AppState";
import { FiSquare, FiCheckSquare } from "react-icons/fi";

interface RestaurantProps {
    id: number,
    name: string,
    email: string,
    setCount?: any,
    count: number
}



// const numGet = (items, id): number => {
//     console.log(items);
//     let num: number = 0;
//     num = items.find(item => {
//         return item.id === id;
//     }).num;
//     console.log("num", num);
//     return num;
// }

// interface checkList {
//     id: number,
//     ifCheck: boolean
// }

// let notCheaked: checkList[];
const Restaurant: React.FC<RestaurantProps> = ({ id, name, email, setCount, count }) => {
    // const value = useContext(appContext);
    const setState = useContext(appSetStateContext);
    const state = useContext(appContext);


    // const num = numGet(state.shoppingCart.items, id);

    // console.log("state", state.shoppingCart.items);

    const addToCart = () => {
        // console.log("addToCart");
        if (setState) {
            setState(state => {
                // console.log("item", state.shoppingCart.items.find(item => { return item.id === id }));
                if (state.shoppingCart.items.find(item => { return item.id === id })) {
                    // console.log("再加一份", id);
                    for (let i = 0; i < state.shoppingCart.items.length; i++) {
                        if (state.shoppingCart.items[i].id === id) {
                            state.shoppingCart.items[i].num++;
                        }
                    }
                    return state;
                }

                return {
                    ...state,
                    shoppingCart: {
                        items: [...state.shoppingCart.items, { id, name, num: 1 }]
                    }
                }
            })
            // setState(state => {
            //     console.log({
            //         ...state,
            //         items: [...state.shoppingCart.items, { id, name }]
            //     });
            //     return {
            //         ...state,
            //         items: [...state.shoppingCart.items, { id, name }]
            //     }
            // })
            // setState((state) => {
            //     console.log({
            //         ...state,
            //         items: [...state.shoppingCart.items, { id, name }],
            //     });
            //     let lists = state.shoppingCart.items;
            //     lists.push({ id, name, num });
            //     console.log(lists);
            //     return {
            //         ...state,
            //         items: lists,
            //     };
            // });
            setCount(count + 1);
        }
    }

    return (
        // <appContext.Consumer>
        //     {(value) => {
        //         return (
        <div className={styles.cardContainer}>
            <img src={`./img/${(id + 2) % 3 + 1}.png`} alt="Restarant" />
            <h2 className={styles.itemName} title={name}>{name}</h2>
            <p>{email}</p>
            <button onClick={addToCart} className={styles.addCartButton}>
                {!state.shoppingCart.items.find(item => { return item.id === id }) ?
                    <><FiSquare /><h3 className={styles.tittle}> 恰这个</h3></>
                    : <><FiCheckSquare /><h3 className={styles.tittle}> 恰这个</h3></>}
            </button>
            {/* <p>{value.username}</p> */}
        </div>
        //         )
        //     }}
        // </appContext.Consumer>
    )
}

export default Restaurant;