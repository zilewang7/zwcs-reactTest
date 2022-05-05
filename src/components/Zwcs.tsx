import React, { useContext } from "react";
import styles from "./Zwcs.module.css";
import {/* appContext, */  appSetStateContext } from "../AppState";
import { FiSquare, FiCheckSquare } from "react-icons/fi";

interface RestaurantProps {
    id: number,
    name: string,
    email: string,
    count?: number,
    setCount?: any,
}

const Restaurant: React.FC<RestaurantProps> = ({ id, name, email, count = 0, setCount }) => {
    // const value = useContext(appContext);
    const setState = useContext(appSetStateContext);

    const addToCart = () => {
        console.log("addToCart");
        if (setState) {
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
            setState((state) => {
                console.log({
                    ...state,
                    items: [...state.shoppingCart.items, { id, name }],
                });
                let lists = state.shoppingCart.items;
                lists.push({ id, name });
                console.log(lists);
                return {
                    ...state,
                    items: lists,
                };
            });
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
                {true ?
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