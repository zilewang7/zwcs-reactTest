import React from "react";

interface RestaurantProps{
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
        <li>
            <img src={`./img/${id}.png`} alt="Restarant" />
            <h2>{name}</h2>
            <p>{email}</p>
        </li>
    )
}

export default Restaurant;