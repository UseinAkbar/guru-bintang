import React, { useState } from "react";
import { listTransaksi } from "../data";
import itemError from '../asset/icon/item-error.svg';

const ListTransaksi = ({arrTransaksi}) => {
    const statusColor = (status) => {
        if(status === 'berhasil') {
            return 'success'
        } else if(status === 'menunggu') {
            return 'pending'
        } else {
            return 'dibatalkan'
        }
    }

    return (
        <div className="list-transaksi">
            {!arrTransaksi.length ? 
            <div className="transaksi-notFound">
                <img src={itemError} alt="" />
                <h1>Kamu Tidak Memiliki Transaksi yang Dimaksud.</h1>
                <p>Cari dan beli kelas yang sesuai denganmu!</p>
            </div> :
            listTransaksi.map((item, i) => {
                const {thumbnail, judul, tanggal, jam, invoice, harga_coret, harga_asli, status} = item
                return (
                    <div className="item-transaksi">
                        <div className="item-transaksi__top">
                            <div className="detail-transaksi">
                                <p>Waktu pembayaran : {tanggal}, {jam}</p>
                                <p>No.Invoice : <span className="invoice">{invoice}</span></p>
                            </div>
                            <span className={`status ${statusColor(status)}`}>{status}</span>
                        </div>
                        <div className="item-transaksi__middle">
                            <div className="middle-detail">
                                <span>Produk :</span>
                                <div>
                                    <img src={thumbnail} alt={judul} />
                                    <h1 className="middle-judul">{judul}</h1>
                                </div>
                            </div>
                            <div className="middle-detail">
                                <span>Harga Produk : </span>
                                <div>
                                    <h2 className="harga-coret">{harga_coret}</h2>
                                    <h1 className="harga-produk">{harga_asli}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="item-transaksi__bottom">
                            <span>Total Pembayaran :</span>
                            <h1 className="harga-asli">{harga_asli}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ListTransaksi