import React, { useState } from "react";
import bookKategori from '../asset/icon/book-kategori.svg'
import bookmark from '../asset/icon/bookmark.svg'

const Card = ({listKelas, className}) => {
    // const handleClick = (i) => {
    //     const cards = [...document.querySelectorAll('.card__item')]
    //     cards[i].classList.toggle('click')
    // }

    return (
        <div className={`card ${className}`}>
            {listKelas.map(({banner, title, desc, total_materi, kategori, harga_coret, harga_asli}, i) => {
                return (
                    <div className='card__item'>
                        <img src={banner} alt={title} className="card__img" />
                        <div className="card__desc">
                            <h1 className="card__title">{title}</h1>
                            <p className="card__subtitle">{desc}</p>
                            <div className="card__kategori">
                                <div><img src={bookKategori} alt="" />{total_materi}</div>
                                <div><img src={bookmark} alt="" />{kategori}</div>
                            </div>
                        </div>
                        <div className="card__border"></div>
                        <div className="card__cta-box">
                            <div className="card__price">
                                <h3 className="card__price-stroke">{harga_coret}</h3>
                                <h2 className="card__price-real">{harga_asli}</h2>
                            </div>
                            <a href={`/detail-kelas/${title}`} className="card__cta">Lihat Detail</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card