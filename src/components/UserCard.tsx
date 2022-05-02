import React, { useContext } from "react";
import styles from "./UserCard.module.css"
import { FiUser } from "react-icons/fi"
import { appContext } from "../index";

interface Props {

}

const UserCard: React.FC<Props> = () => {
    const value = useContext(appContext);
    return (

        <div className={styles.userCard}>
            <div className={styles.info}>
                <FiUser />
                <h2 className={styles.userName}>{value.username}</h2>
            </div>
        </div>
        // <appContext.Consumer>
        //     {(value) => {
        //         return (
        //             <div className={styles.userCard}>
        //                 <div className={styles.info}>
        //                     <FiUser />
        //                     <h2 className={styles.userName}>{value.username}</h2>
        //                 </div>
        //             </div>
        //         )
        //     }}
        // </appContext.Consumer>
    )
}

export default UserCard;