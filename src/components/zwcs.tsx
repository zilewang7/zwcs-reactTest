import React from "react";
import styles from "./Zwcs.module.css"

interface RestaurantProps {
    id: number,
    name: string,
    email: string,
}

const Restaurant: React.FC<RestaurantProps> = ({
    id,
    name,
    email
}) => {


    return (
        <div className={styles.cardContainer}>
            <img src={`./img/${id}.png`} alt="Restarant" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Restaurant;