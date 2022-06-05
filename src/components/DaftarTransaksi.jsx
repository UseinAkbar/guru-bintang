import React, { useState, useEffect } from "react";
import ListTransaksi from "./ListTransaksi";
import { listTransaksi } from "../data";

const DaftarTransaksi = () => {
    const [filteredTransaksi, setFilteredTransaksi] = useState(listTransaksi)
    const [transaksiSuccess, setTransaksiSuccess] = useState([])
    const [transaksiPending, setTransaksiPending] = useState([])
    const [transaksiCancel, setTransaksiCancel] = useState([])
    const [isChecked, setChecked] = useState(false)
    const [notFoundState, setNotFoundState] = useState('')

    useEffect(() => {
        setChecked(true)
        const berhasil = listTransaksi.filter(item => item.status === 'berhasil')
        const menunggu = listTransaksi.filter(item => item.status === 'menunggu')
        const dibatalkan = listTransaksi.filter(item => item.status === 'cancel')
        setTransaksiSuccess(berhasil)
        setTransaksiPending(menunggu)
        setTransaksiCancel(dibatalkan)
    }, [])

    const handleChange = e => {
        setChecked(false)
        if(e.target.value === 'all') {
            setFilteredTransaksi(listTransaksi)
        } else if(e.target.value === 'berhasil') {
            setFilteredTransaksi(transaksiSuccess)
        } else if(e.target.value === 'menunggu') {
            setFilteredTransaksi(transaksiPending)
        } else {
            setFilteredTransaksi(transaksiCancel)
        }
    }

    return (
        <div className="transaksi">
            <h1 className="transaksi__title">Daftar Transaksi</h1>
            <div className="transaksi__box">
                <div className="transaksi__nav">
                    <div className="tab-group">
                        <input type="radio" id='all' name='tab' value='all' onChange={handleChange} hidden />
                        <label className={`transaksi__tab ${isChecked && 'transaksi__tab-checked'}`}htmlFor="all">Semua Transaksi</label>
                    </div>
                    <div className="tab-group">
                        <input type="radio" id='berhasil' name='tab' value='berhasil' onChange={handleChange} hidden />
                        <label className="transaksi__tab" htmlFor="berhasil">Transaksi Berhasil</label>
                    </div>
                    <div className="tab-group">
                        <input type="radio" id='menunggu' name='tab' value='menunggu' onChange={handleChange} hidden />
                        <label className="transaksi__tab" htmlFor="menunggu">Menunggu Pembayaran</label>
                    </div>
                    <div className="tab-group">
                        <input type="radio" id='dibatalkan' name='tab' value='dibatalkan' onChange={handleChange} hidden />
                        <label className="transaksi__tab" htmlFor="dibatalkan">Dibatalkan</label>
                    </div>
                </div>
                <ListTransaksi arrTransaksi={filteredTransaksi} />
            </div>
        </div>
    )
}

export default DaftarTransaksi