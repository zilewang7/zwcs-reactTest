import React from "react";
import styles from '../components/ShoppingCart.module.css'
import { FiShoppingCart } from "react-icons/fi"
import { appContext } from "../AppState";

interface Props {
    count?: number
}

interface State {
    isOpen: boolean
}


class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //     this.setState({ isOpen: !this.state.isOpen });
    // }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // console.log("e.target", e.target);
        // console.log("e.currentTarget", e.currentTarget);
        if ((e.target as HTMLElement).nodeName === 'svg') {
            this.setState({ isOpen: !this.state.isOpen });
        }
    }


    render() {
        return (
            <appContext.Consumer>
                {(value) => {
                    console.log("valueInShoppingCart", value);
                    return <div className={styles.cartContainer}>
                        <button
                            className={styles.button}
                            onClick={this.handleClick}
                        >
                            <FiShoppingCart />
                            <span>购物车: {this.props.count}</span>
                        </button>
                        <div className={styles.cartDropDown}
                            style={{
                                display: this.state.isOpen ? "block" : "none"
                            }}
                        >
                            <ul>
                                {
                                    value.shoppingCart.items.map(i =>
                                        (<li key={i.id}>{i.name}*{i.num}</li>)
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                }}
            </appContext.Consumer>
        )
    }
}

export default ShoppingCart;