import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import close from '../asset/icon/close.svg';
import mandiri from '../asset/images/mandiri.png';
import bca from '../asset/images/bca.png';
import moment from 'moment';
import 'moment/locale/id';

const Payment = ({isPay, handlePaymentPopUp}) => {
    const [bank, setBank] = useState('')
    const navigate = useNavigate()

    const handleTimePayment = () => {
        const tomorrow = moment().add(1, 'days')
        localStorage.setItem('countdown', (Date.now() + 86400000))
        localStorage.setItem('dueTime', tomorrow.locale('id').format('LLLL'))
        localStorage.setItem('bank', bank)
        document.body.classList.toggle('fixBody')
        navigate('/instruksi-pembayaran')
    }

    const handleOptionBank = e => {
        setBank(e.target.value)
    }

    return (
        <div className={`payment ${isPay && 'popUp'}`}>
            <div className="payment__heading">
                <img src={close} alt="" className="payment__close" onClick={handlePaymentPopUp} />
                <h1 className="payment__title">Pembayaran</h1>
            </div>
            <div className="payment__metode">
                <h1>Metode Pembayaran</h1>
                <div className="payment__bank">
                    <div>
                        <div className="payment__bank-name">
                            <img src={mandiri} alt="" />
                            <h2>Mandiri Virtual Account</h2>
                        </div>
                        <input type="radio" name="bank" id="mandiri" value='Mandiri Virtual Account' hidden onChange={handleOptionBank} />
                        <label htmlFor="mandiri"></label>
                    </div>
                    <div>
                        <div className="payment__bank-name">
                            <img src={bca} alt="" />
                            <h2>BCA Virtual Account</h2>
                        </div>
                        <input type="radio" name="bank" id="bca" value='BCA Virtual Account' hidden onChange={handleOptionBank} />
                        <label htmlFor="bca"></label>
                    </div>
                </div>
            </div>
            <div className="payment__ringkasan">
                <h1>Ringkasan Pembayaran</h1>
                <div className="payment__detailRingkasan">
                    <div>
                        <h2>Total Pembayaran</h2>
                        <span className="payment__hargaTotal">Rp 105.000</span>
                    </div>
                    <div>
                        <h2>Diskon</h2>
                        <span className="payment__hargaDiskon">Rp 0</span>
                    </div>
                </div>
            </div>
            <div className="payment__total">
                <div>
                    <h3>Total Bayar</h3>
                    <h2>Rp 105.000</h2>
                </div>
                <button className="payment__cta" onClick={handleTimePayment}>Bayar</button>
            </div>
        </div>
    )
}

export default Payment