import React, { useContext } from "react";
import styles from "./Zwcs.module.css";
import { appContext, /*appSetStateContext*/ } from "../AppState";
import { FiSquare, FiCheckSquare } from "react-icons/fi";
import { useAddToCart } from './AddToCart';

export interface RestaurantProps {
    id: number,
    name: string,
    email: string,
    setCount?: any,
    count: number
}


const Restaurant: React.FC<RestaurantProps> = ({ id, name, email, setCount, count }) => {
    const state = useContext(appContext);
    const addToCart = useAddToCart();
    return (
        <div className={styles.cardContainer}>
            <img src={`./img/${(id + 2) % 3 + 1}.png`} alt="Restarant" />
            <h2 className={styles.itemName} title={name}>今日特价:{name}</h2>
            <p>{email}</p>
            <button onClick={() => addToCart(id, name, count, setCount)} className={styles.addCartButton}>
                {!state.shoppingCart.items.find(item => { return item.id === id }) ?
                    <FiSquare /> : <FiCheckSquare />}
                <h3 className={styles.tittle}> 恰这个</h3>
            </button>
        </div>
    )
}

export default Restaurant;