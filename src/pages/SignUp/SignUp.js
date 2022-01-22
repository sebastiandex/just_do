import React from "react";
import style from './signUp.module.scss';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const SignUp = () => {
    const inputArray = [
        {placeholder: 'E-mail', type: 'email'},
        {placeholder: 'Password', type: 'password'},
        {placeholder: 'Confirm password', type: 'password'}
    ]

    return (
        <div className={style.mainContainer}>
            <div className={style.leftPic}>
                    <img align="middle" src={require('./assets/logo.png')} alt={'img'}/>
            </div>
            <div className={style.rightBlock}>
                <div className={style.rightLabel}>Sing Up</div>
                {inputArray.map((item) => {
                    return (
                            <Input type={item.type} placeholder={item.placeholder}/>
                        )
                })}
                <div style={{marginTop: '5vh'}}>
                    <Button label='Sign Up'/>
                </div>

            </div>
        </div>
    )
}
export default SignUp;
