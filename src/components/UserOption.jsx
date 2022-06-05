import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dashboard from '../asset/icon/dashboard.svg';
import note from '../asset/icon/note.svg';
import receipt from '../asset/icon/receipt.svg';
import setting from '../asset/icon/setting.svg';
import logout from '../asset/icon/logout.svg';

const UserOption = ({isClicked}) => {
     let navigate = useNavigate();
     const refresh_token = localStorage.getItem('token_refresh')

     const handleLogout = () => {
          fetch('https://rangkoom.com/gurubintang/api/v1/auth/logout', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `Bearer ${refresh_token}`}
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                 console.log(data);
                localStorage.removeItem('token_access');
                localStorage.removeItem('token_refresh');
                localStorage.removeItem('user_info');
                navigate('/')
                window.location.reload()
            });
     }

    return (
       <ul className={`option ${isClicked && 'option-clicked'}`}>
           <li className="option__list">
                <a href="/dashboard" className="option__link"><img className="option__icon" src={dashboard} alt="" /> Dashboard</a>
           </li>
           <li className="option__list">
                <a href="/dashboard/kelas-saya" className="option__link"><img className="option__icon" src={note} alt="" /> Kelas Saya</a>
           </li>
           <li className="option__list">
                <a href="/dashboard/transaksi" className="option__link"><img className="option__icon" src={receipt} alt="" /> Daftar Transaksi</a>
           </li>
           <li className="option__list">
                <a href="/setting" className="option__link"><img className="option__icon" src={setting} alt="" /> Pengaturan Akun</a>
           </li>
           <li className="option__list" onClick={handleLogout}>
                <a className="option__link"><img className="option__icon" src={logout} alt="" /> Logout</a>
           </li>
       </ul>
    )
}

export default UserOption