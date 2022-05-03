import React from "react";
import styles from '../components/ShoppingCart.module.css'
import { FiShoppingCart } from "react-icons/fi"
import { appContext } from "../AppState";

interface Props {

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
        console.log("e.target", e.target);
        console.log("e.currentTarget", e.currentTarget);
        if ((e.target as HTMLElement).nodeName === 'svg') {
            this.setState({ isOpen: !this.state.isOpen });
        }
    }


    render() {
        return (
            <div className={styles.cartContainer}>
                <button
                    className={styles.button}
                    onClick={this.handleClick}
                >
                    <FiShoppingCart />
                    <span>购物车: 2</span>
                </button>
                <div className={styles.cartDropDown}
                    style={{
                        display: this.state.isOpen ? "block" : "none"
                    }}
                >
                    <ul>
                        <li>zzwxj</li>
                        <li>=5maocai</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShoppingCart;