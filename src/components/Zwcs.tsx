import React, { useContext } from "react";
import styles from "./Zwcs.module.css";
import { appContext, /*appSetStateContext*/ } from "../AppState";
import { FiSquare, FiCheckSquare } from "react-icons/fi";
import { withAddToCart } from './AddToCart';

export interface RestaurantProps {
    id: number,
    name: string,
    email: string,
    setCount?: any,
    count: number
    addToCart: (id, name, count, setCount) => void;
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
const Restaurant: React.FC<RestaurantProps> = ({ id, name, email, setCount, count, addToCart }) => {
    const state = useContext(appContext);

    return (
        // <appContext.Consumer>
        //     {(value) => {
        //         return (
        <div className={styles.cardContainer}>
            <img src={`./img/${(id + 2) % 3 + 1}.png`} alt="Restarant" />
            <h2 className={styles.itemName} title={name}>{name}</h2>
            <p>{email}</p>
            <button onClick={() => addToCart(id, name, count, setCount)} className={styles.addCartButton}>
                {!state.shoppingCart.items.find(item => { return item.id === id }) ?
                    <FiSquare /> : <FiCheckSquare />}
                <h3 className={styles.tittle}> 恰这个</h3>
            </button>
            {/* <p>{value.username}</p> */}
        </div>
        //         )
        //     }}
        // </appContext.Consumer>
    )
}

export default withAddToCart(Restaurant);