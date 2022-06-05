import React, { useState } from "react";
import back from '../asset/icon/back.svg';
import itemError from '../asset/icon/item-error.svg';
import { listDashboardSertif } from "../data";

const SemuaSertifUser = () => {
    return (
        <div className="allsertif">
            <div className="allsertif__nav">
                <a className="allsertif__back" href="/dashboard"><img src={back} alt=""/> Kembali</a>
                <h1 className="allsertif__title">Semua Sertifikat</h1>
            </div>
            {!listDashboardSertif.length ?
            <div className="kelas-notFound">
                <img src={itemError} alt="" />
                <h1>Kamu Belum Memiliki Sertifikat Apapun.</h1>
                <p>Mulai atau selesaikan kelas dan ambil sertifikasi untuk meningkatkan value-mu!</p>
            </div> :
            <div className="allsertif__box">
                {listDashboardSertif.map(({thumbnail, judul}, i) => {
                    return (
                        <div className="allsertif__item" key={i}>
                            <img src={thumbnail} alt="" />
                            <h1>{judul}</h1>
                            <a href={thumbnail} download={judul}>Download Sertifikat</a>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}

export default SemuaSertifUser