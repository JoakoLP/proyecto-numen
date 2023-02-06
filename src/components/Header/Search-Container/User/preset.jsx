import React from "react";
import * as styles from "./styles"

const Preset = props =>{
    return(
        <div className={styles.account}>
                <img src={props.img} alt="" className={styles.imgUser}/>
                <span className={styles.userText}>{props.txt}</span>
        </div>
    )
}

export default Preset