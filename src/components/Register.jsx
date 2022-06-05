import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./UI/Form";
import google from '../asset/icon/google.svg';
import eye from '../asset/icon/eye.svg';
import eyeSlash from '../asset/icon/eye-slash.svg';

const Register = () => {
    let navigate = useNavigate();
    const [regisValue, setRegisValue] = useState({username: '', email: '', password: '', validasiPassword: ''})
    const [isHidePass, setHidePass] = useState(true)
    const [isHideValidatePass, setHideValidatePass] = useState(true)
    const {username, email, password, validasiPassword} = regisValue

    const handleChange = e => {
        setRegisValue(preValue => {
            return {
                ...preValue,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleHidePass = () => {
        setHidePass(!isHidePass)
    }

    const handleHideValidatePass = () => {
        setHideValidatePass(!isHideValidatePass)
    }

    const handleRegis = e => {
        e.preventDefault()

        fetch('https://rangkoom.com/gurubintang/api/v1/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',  'Accept': 'application/json'},
                body: JSON.stringify({
                    username: username,
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
                <h1 className="form-title">Daftar untuk Memulai Progress Belajar!</h1>
                <p className="form-redirect">Sudah punya akun? <a href="/login">Login</a></p>
            </div>
            <div className="form-box">
                <form action="" className="register__form form" onSubmit={handleRegis}>
                    <div className="input-group">
                        <label htmlFor="">Username</label>
                        <input type="text" name="username" id="username" value={username} onChange={handleChange} placeholder="Tulis username kamu disini ..." required autoComplete='off' autoFocus='on' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={handleChange} placeholder="Tulis email kamu disini ..." required autoComplete='off' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input type={`${isHidePass ? 'password' : 'text'}`} name="password" id="password" value={password} onChange={handleChange} placeholder="Tulis password kamu disini ..." required autoComplete='off' />
                        <div className="eye-box" onClick={handleHidePass}>
                            {isHidePass ? <img src={eyeSlash} alt="" /> : <img src={eye} alt="" />}
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Tulis Ulang Password</label>
                        <input type={`${isHideValidatePass ? 'password' : 'text'}`} name="validasiPassword" id="validasiPassword" value={validasiPassword} onChange={handleChange} placeholder="Tulis ulang password kamu disini ..." autoComplete='off' />
                        <div className="eye-box"onClick={handleHideValidatePass}>
                            {isHideValidatePass ? <img src={eyeSlash} alt="" /> : <img src={eye} alt="" />}
                        </div>
                    </div>

                    <button type="submit" className="register__cta form-cta">Sign Up</button>
                    <div className="register__alternatif form-alternatif">
                        <div></div>
                        <p>atau daftar dengan</p>
                        <div></div>
                    </div>
                    <button type="button" className="register__google form-google-cta">
                        <img src={google} alt="" />
                        <span>Google</span>
                    </button>
                </form>
            </div>
        </Form>
    )
}

export default Register