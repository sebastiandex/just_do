import React from "react";
import style from './button.module.scss'

const Button = ({label}) => {
    return (
        <button className={style.mainContainer}>
            {label}
        </button>
    )
}
export default Button
