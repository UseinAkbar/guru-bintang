import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UserOption from "./UserOption";
import logo from '../asset/images/logo.png';
import avatar from '../asset/images/avatar.png';
import arrow from '../asset/icon/arrow.svg';

const Navigation = () => {
    let token = localStorage.getItem('token_access')
    const user = JSON.parse(localStorage.getItem('user_info'))
    const [isClicked, setClicked] = useState(false)

    const handleOptionNav = () => {
        setClicked(!isClicked)
    }

    return (
        <nav className="nav">
            <div className="nav__box-left">
                <a href="/" className="nav__logo-link"><img src={logo} alt="Guru Bintang Logo" className="nav__logo" /></a>
                <ul className="nav__list">
                    <li className="nav__item"><NavLink to='/' activeClassName="active" className="nav__link" exact>Beranda</NavLink></li>
                    <li className="nav__item"><NavLink to='/kelas' activeClassName="active" className="nav__link" >Kelas</NavLink></li>
                    <li className="nav__item"><NavLink to='/tentang' activeClassName="active" className="nav__link" >Tentang</NavLink></li>
                    {/* <li className="nav__item">
                        <span className={`nav__option ${isClicked && 'clicked'}`} onClick={handleOption}>
                            Tentang 
                            <svg className={`arrow ${isClicked && 'rotate'}`}>
                                <use xlinkHref={`${icon}#icon-arrow`}></use>
                            </svg>
                        </span>
                    </li> */}
                </ul>
            </div>
            {!token && 
            <div className="nav__box-right">
                <a href="/register" className="nav__register">Sign Up</a>
                <a href="/login" className="nav__login">Login</a>
            </div>}
            {token && <div className={`nav__user ${isClicked && 'nav__user-clicked'}`} onClick={handleOptionNav}>
                <img src={avatar} alt="" className='nav__user-avatar' />
                <h1 className="nav__user-name">{user.username}</h1>
                <img src={arrow} alt="" className={`nav__user-arrow ${isClicked && 'arrow-clicked'}`} />
                <UserOption isClicked={isClicked} />
            </div>}
        </nav>
    )
}

export default Navigation