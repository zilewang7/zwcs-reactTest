import React, { useContext } from "react";
import { appContext, appSetStateContext } from "../AppState";
import { RestaurantProps } from "./Zwcs";

export const withAddToCart = (ChildComponent: React.ComponentType<RestaurantProps>) => {

    // return class extends React.Component{}
    return (props) => {
        const setState = useContext(appSetStateContext);
        const state = useContext(appContext);


        // const num = numGet(state.shoppingCart.items, id);
        // console.log("state", state.shoppingCart.items);
        const addToCart = (id, name, count, setCount) => {
            console.log("addToCart");
            let stateCopy = state;
            if (stateCopy.shoppingCart.items.find(item => { return item.id === id })) {
                // console.log("再加一份", id);
                for (let i = 0; i < stateCopy.shoppingCart.items.length; i++) {
                    if (stateCopy.shoppingCart.items[i].id === id) {
                        stateCopy.shoppingCart.items[i].num++;
                        // console.log("num", stateCopy.shoppingCart.items[i].num);
                    }
                }
            }
            if (setState) {
                setState(state => {
                    // console.log("item", state.shoppingCart.items.find(item => { return item.id === id }));
                    if (state.shoppingCart.items.find(item => { return item.id === id })) {
                        return stateCopy;
                    } else {
                        return {
                            ...state,
                            shoppingCart: {
                                items: [...state.shoppingCart.items, { id, name, num: 1 }]
                            }
                        }
                    }
                })
            }
            setCount(count + 1);
        }
        return <ChildComponent {...props} addToCart={addToCart} />
    }
}

export const useAddToCart = () => {
    const setState = useContext(appSetStateContext);
    const state = useContext(appContext);
    const addToCart = (id, name, count, setCount) => {
        console.log("addToCart");
        let stateCopy = state;
        if (stateCopy.shoppingCart.items.find(item => { return item.id === id })) {
            for (let i = 0; i < stateCopy.shoppingCart.items.length; i++) {
                if (stateCopy.shoppingCart.items[i].id === id) {
                    stateCopy.shoppingCart.items[i].num++;
                }
            }
        }
        if (setState) {
            setState(state => {
                if (state.shoppingCart.items.find(item => { return item.id === id })) {
                    return stateCopy;
                } else {
                    return {
                        ...state,
                        shoppingCart: {
                            items: [...state.shoppingCart.items, { id, name, num: 1 }]
                        }
                    }
                }
            })
        }
        setCount(count + 1);
    }
    return addToCart;
}