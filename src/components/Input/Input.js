import React, {useState} from "react";
import style from './input.module.scss'

const Input = ({type, mask, placeholder}) => {
    const [inputType, setInputType] = useState(type)
    return (
        <div className={style.mainContainer}>
            <input
                placeholder={placeholder}
                type={inputType}
            />
            {type === 'password' ? (
                <div
                    onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
                    className={`${style.eyeImage} ${inputType === 'text' ? style.visible : ''}`}
                />
            ) : null}
        </div>
    )
}
export default Input
