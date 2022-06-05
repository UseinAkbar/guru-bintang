import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { listKelas } from "../data";
import leftArr from '../asset/icon/leftArrow.svg';
import trash from '../asset/icon/trash.svg';
import kelasCheckout from '../asset/images/kelasCheckout.png';
import bookKategori from '../asset/icon/book-kategori.svg'
import bookmark from '../asset/icon/bookmark.svg'
import AlertLeave from "./AlertLeave";
import Payment from "./Payment";

const Checkout = () => {
    const navigate = useNavigate()
    const { judul } = useParams()
    const [diskon, setDiskon] = useState('')
    const [isLeave, setLeave] = useState(false)
    const [isPay, setPay] = useState(false)
    const [checkoutKelas, setCheckoutKelas] = useState({banner: '', title: '', materi: [], isPurchased: '', harga_asli: '', harga_coret: '', desc: '', total_materi: '', kategori: ''})
    const {banner, title, materi, isPurchased, harga_asli, harga_coret, desc, total_materi, kategori} = checkoutKelas

    useEffect(() => {
        const checkout = listKelas.find(item => item.title === judul)
        setCheckoutKelas(checkout)
    }, [])

    const handleOverlay = () => {
        setLeave(false)
        setPay(false)
        document.body.classList.toggle('fixBody')
    }
    
    const handleLeavingPage = () => {
        navigate(-1)
    }
    
    const alertLeavingPage = () => {
        setLeave(!isLeave)
        document.body.classList.toggle('fixBody')
    }
    
    const alertProps = {
        isLeave,
        handleLeavingPage,
        alertLeavingPage
    }

    const handlePaymentPopUp = () => {
        setPay(!isPay)
        document.body.classList.toggle('fixBody')
    }

    const paymentProps = {
        isPay,
        handlePaymentPopUp
    }

    const handleDiskon = e => {
        setDiskon(e.target.value)
    }
    return (
        <div className="checkout">
            <div className="checkout__nav">
                <button className="checkout__back" type="button" onClick={alertLeavingPage}><img src={leftArr} alt=""/></button>
                <h1 className="checkout__title">Checkout</h1>
            </div>
            <div className="checkout__content">
                <div className="checkout__item">
                    <img className="checkout__item-image" src={banner} alt="" />
                    <div className="checkout__item-detail">
                        <div className="checkout__item-heading">
                            <h1 className="checkout__item-title">{title}</h1>
                            <img src={trash} alt="" className="checkout__item-delete" />
                        </div>
                        <p className="checkout__item-desc">Growth mindset untuk pengajar guna membentuk pemikiran yang lebih luas.</p>
                        <div className="checkout__item-spec">
                            <div className="checkout__item-kategori">
                                <div><img src={bookKategori} alt="" />{total_materi}</div>
                                <div><img src={bookmark} alt="" />{kategori}</div>
                            </div>
                            <div className="checkout__item-harga">
                                <h3 className="checkout__item-harga-coret">{harga_coret}</h3>
                                <h2 className="checkout__item-harga-asli">{harga_asli}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout__pembayaran">
                    <form className="checkout__form">
                        <div className="checkout__form-harga">
                            <span>Harga Produk</span>
                            <span>{harga_asli}</span>
                        </div>
                        <div className="checkout__form-diskon">
                            <span>Kode Diskon</span>
                            <div>
                                <input type="text" value={diskon} name='diskon' onChange={handleDiskon} autoComplete='off' />
                                <button type="button">Pakai</button>
                            </div>
                        </div>
                        <div className="checkout__form-totalDiskon">
                            <span>Diskon</span>
                            <span>Rp 0</span>
                        </div>
                        <div className="checkout__form-totalBayar">
                            <span>Total Pembayaran</span>
                            <span>{harga_asli}</span>
                        </div>
                        <button type="button" className="checkout__form-button" onClick={handlePaymentPopUp}>Lanjut ke Pembayaran</button>
                    </form>
                </div>
            </div>
            <div className="checkout__cardBox kelas-suggestion">
                <h1>Kamu Mungkin Akan Suka</h1>
                <Card listKelas={listKelas} />
            </div>
            <div className={`overlay ${(isLeave || isPay) && 'popUp'}`} onClick={handleOverlay}></div>
            <AlertLeave {...alertProps}   />
            <Payment {...paymentProps} />
        </div>
    )
}

export default Checkout