import React, {useState} from "react";
import style from './input.module.scss';

const Input = ({type, mask, placeholder, onChange, value}) => {
    const [inputType, setInputType] = useState(type)
    return (
        <div className={style.mainContainer}>
            <input
                placeholder={placeholder}
                type={inputType}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {type === 'password' ? (
                <div
                    onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
                    className={`${style.eyeImage} ${inputType === 'text' ? style.visible : ''}`}
                />
            ) : null}
        </div>
    )
};

export default Input;
