import React from "react";
import close from '../asset/icon/close.svg';
import alert from '../asset/icon/alert.svg';

const AlertLeave = ({isLeave, handleLeavingPage, alertLeavingPage}) => {
    return (
        <div className={`alert ${isLeave && 'popUp'}`}>
            <img src={close} alt="" className="alert__close" onClick={alertLeavingPage} />
            <div className="alert__icon">
                <img src={alert} alt="" className="alert__leave"/>
            </div>
            <h1 className="alert__heading">Yakin ingin Keluar dari Halaman ini?</h1>
            <p className="alert__desc">Transaksi kamu akan hilang dan dibatalkan jika kamu keluar dari halaman ini. Tapi kamu masih bisa untuk melakukan transaksi lainnya</p>
            <button className="alert__cta" onClick={handleLeavingPage}>Ya, keluar</button>
        </div>
    )
}

export default AlertLeave