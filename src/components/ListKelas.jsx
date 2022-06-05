import React, { useState } from "react";
import itemError from '../asset/icon/item-error.svg';

const ListKelas = ({arrKelas, notFoundState = 'progress'}) => {
    return (
        <div className="item-kelas">
            {!arrKelas.length ? 
            <div className="kelas-notFound">
                <img src={itemError} alt="" />
                <h1>Kamu Belum {notFoundState == 'progress' ? 'Memulai' : 'Menyelesaikan'} Kelas Apapun.</h1>
                <p>Belum ada kelas yang kamu {notFoundState == 'progress' ? 'mulai' : 'selesaikan'}. {notFoundState == 'progress' ? 'Mulai' : 'Selesaikan'} kelas dan ambil sertifikasi untuk meningkatkan value-mu!</p>
            </div> : 
            arrKelas.map(({thumbnail, judul, progress}, i) => {
                return (
                    <div className="item" key={i}>
                        <div className="item__top">
                            <img className="item__thumbnail" src={thumbnail} alt="" />
                            <div className="item__detail">
                                <h1 className="item__judul">{judul}</h1>
                                {progress === '100' ? 
                                <span className="passed">Lulus</span> :
                                <div className="item__progress">
                                    <div className="progress-detail">
                                        <div className="progress-bar">
                                            <span className="progress-bar-number" style={{width: `${progress}%`}}></span>
                                        </div>
                                        <p className="progress-percentage">{progress}%</p>
                                    </div>
                                    <p className="progress-materi">9 / 11 materi</p>
                                </div>}
                            </div>
                        </div>
                        <div className="item__bottom">
                            <div className="item__cta-box">
                                <a href="#" className="item__cta-secondary">{progress === '100' ? 'Review Materi' : 'Lihat Detail'}</a>
                                <a href="#" className="item__cta-primary">{progress === '100' ? 'Lihat Sertifikat' : 'Lanjutkan Belajar'}</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ListKelas