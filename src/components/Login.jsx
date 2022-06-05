import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./UI/Form";
import google from '../asset/icon/google.svg';
import eye from '../asset/icon/eye.svg';
import eyeSlash from '../asset/icon/eye-slash.svg';

const Login = () => {
    let navigate = useNavigate();
    const [loginValue, setLoginValue] = useState({email: '', password: ''})
    const [isHidePass, setHidePass] = useState(true)
    const {email, password} = loginValue

    const handleChange = e => {
        setLoginValue(preValue => {
            return {
                ...preValue,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleHidePass = () => {
        setHidePass(!isHidePass)
    }

    const handleLogin = e => {
        e.preventDefault()

        fetch('https://rangkoom.com/gurubintang/api/v1/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',  'Accept': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                const {tokens, user} = data
                const {access: {token: token_access}, refresh: {token: token_refresh}} = tokens
                localStorage.setItem('token_access', token_access);
                localStorage.setItem('token_refresh', token_refresh);
                localStorage.setItem('user_info', JSON.stringify(user));
                navigate('/')
                window.location.reload()
            });
    }

    return (
        <Form>
            <div className="form-header">
                <h1 className="form-title">Masuk untuk Melanjutkan Progress Belajar!</h1>
                <p className="form-redirect">Belum punya akun? <a href="/register">Sign Up</a></p>
            </div>
            <div className="form-box">
                <form action="" className="login__form form"  onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="username" value={email} onChange={handleChange} placeholder="Tulis email kamu disini ..." required autoComplete='off' autoFocus='on' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input type={`${isHidePass ? 'password' : 'text'}`} name="password" id="password" value={password} onChange={handleChange} placeholder="Tulis password kamu disini ..." required autoComplete='off' />
                        <div className="eye-box eye-box-login" onClick={handleHidePass}>
                            {isHidePass ? <img src={eyeSlash} alt="" /> : <img src={eye} alt="" />}
                        </div>
                        <a href="#" className="forgot-password">Lupa password?</a>
                    </div>
                    <button type="submit" className="form-cta">Login</button>
                    <div className="form-alternatif">
                        <div></div>
                        <p>atau lanjut dengan</p>
                        <div></div>
                    </div>
                    <button type="button" className="form-google-cta">
                        <img src={google} alt="" />
                        <span>Google</span>
                    </button>
                </form>
            </div>
        </Form>
    )
}

export default Login