import React, {useState} from "react";
import style from './signUp.module.scss';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";

const SignUp = () => {
    const [signed, setSigned] = useState(false)
    const inputArray = signed ? [
        {placeholder: 'E-mail', type: 'email'},
        {placeholder: 'Password', type: 'password'}
    ] : [
        {placeholder: 'E-mail', type: 'email'},
        {placeholder: 'Password', type: 'password'},
        {placeholder: 'Confirm password', type: 'password'}
    ]

    return (
        <div className={style.mainContainer}>
            <div className={style.leftPic}>
                    <img align="middle" src={require('../../assets/logo.png')} alt={'img'}/>
            </div>
            <div className={style.rightBlock}>
                <div className={style.rightLabel}>{signed ? 'Sing In' : 'Sing Up'}</div>
                <div style={{width: '60%'}}>
                    {inputArray.map((item) => {
                        return (
                            <Input type={item.type} placeholder={item.placeholder}/>
                        )
                    })}
                </div>
                {signed ? (
                    <div style={{marginTop: '5.7vh'}}>
                        <a>Forgot password?</a>
                    </div>
                ) : null}
                <div style={{marginTop: '5vh'}}>
                    <Link style={{all: 'unset'}} to={'/'}>
                        <Button label={signed ? 'Sign In' : 'Sign Up'}/>
                    </Link>
                </div>
                    <div className={style.signBlock}>
                        {signed ? (
                            <div>
                                <a onClick={() => setSigned(false)}>Sign up</a>
                            </div>
                        ) : (
                            <div>
                                I already have an account
                                <a style={{marginLeft: '5px'}} onClick={() => setSigned(true)}>Sign in</a>
                            </div>
                        )}

                <div>
                    <div>By accessing your account, you agree to our</div>
                    <div><a>Terms conditions</a> and <a>Privacy Policy</a></div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp;
