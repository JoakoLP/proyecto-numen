import React from "react";
import imgUser from "../../../../img/fi-rr-user.svg"
import * as styles from "./styles"

const Account = () =>{
    return(
        <div className={styles.account}>
            <img src={imgUser} alt="" className={styles.imgUser}/>
            <span className={styles.userText}>Mi Cuenta</span>
        </div>
    )
}

export default Account;