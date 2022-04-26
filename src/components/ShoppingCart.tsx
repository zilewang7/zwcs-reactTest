import React from "react";
import styles from '../components/ShoppingCart.module.css'

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
    }

    render() {
        return (
            <div className={styles.cartContainer}>
                <button className={styles.button}
                    onClick={() => {
                        this.setState({ isOpen: !this.state.isOpen })
                    }}
                >购物车: 2</button>
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