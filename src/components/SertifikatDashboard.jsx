import React, { useState } from "react";
import { listDashboardSertif } from "../data";
import itemError from '../asset/icon/item-error.svg';
import awardSertif from '../asset/icon/award-sertif.svg';

const SertifikatDashboard = () => {
    return (
        <div className="sertifikat">
            <h1 className="sertifikat__title"><img src={awardSertif} alt="" /> Sertifikat Kamu</h1>
            {!listDashboardSertif.length ? 
            <div className="sertif-notFound">
                <img src={itemError} alt="" />
                <h1>Kamu Belum Memiliki Sertifikat Apapun.</h1>
                <p>Mulai atau selesaikan kelas dan ambil sertifikasi untuk meningkatkan value-mu!</p>
            </div> :
            <div className="sertifikat__list">
                {listDashboardSertif.map(({thumbnail, judul}, i) => {
                    return (
                        <img className="sertifikat__image" src={thumbnail} alt={judul} key={i} />
                    )
                })}
                <a href="/dashboard/sertifikat" className="sertifikat__cta">Lihat Semua Sertifikat</a>
            </div>
            }
        </div>
    )
}

export default SertifikatDashboard