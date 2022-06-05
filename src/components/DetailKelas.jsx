import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import diskon from '../asset/icon/diskon.svg';
import bookKategori from '../asset/icon/book-kategori.svg';
import bookmark from '../asset/icon/bookmark.svg';
import bag from '../asset/icon/bag.svg';
import titikBanner from '../asset/icon/titik-detail-kelas.svg';
import detailbanner from '../asset/images/detailbanner.png';
import FiturKelas from "./FiturKelas";
import Card from "./Card";
import Footer from "./Footer";
import { listKelas } from "../data";


const DetailKelas = () => {
    const { judul } = useParams()
    const [selectedKelas, setSelectedKelas] = useState({banner: '', title: '', materi: [], isPurchased: '', harga_asli: '', harga_coret: '', desc: '', total_materi: '', kategori: ''})
    const {banner, title, materi, isPurchased, harga_asli, harga_coret, desc, total_materi, kategori} = selectedKelas

    useEffect(() => {
        const searchKelas = listKelas.find(item => item.title === judul)
        setSelectedKelas(searchKelas)
    }, [])

    return (
        <div className="detailKelas">
            <div className="detailKelas__content">
                <div className="detailKelas__banner">
                    <div className="detailKelas__banner-desc">
                        <div className="diskon">
                            <img src={diskon} alt="" />
                            Diskon 40%
                        </div>
                        <h1 className="detailKelas__title">{title}</h1>
                        <div className="detailKelas__spesifikasi">
                            <div><img src={bookKategori} alt="" />{total_materi}</div>
                            <div><img src={bookmark} alt="" />{kategori}</div>
                        </div>
                        <div className="detailKelas__price">
                            <h3>{harga_coret}</h3>
                            <h2>{harga_asli}</h2>
                        </div>
                        <a href={`/checkout/${title}`} className="detailKelas__cta"><img src={bag} alt="" />Beli Kelas</a>
                    </div>
                    <div className="detailKelas__image-box">
                        <div className="detailKelas__rectangle"></div>
                        <img src={titikBanner} alt="" className="detailKelas__titik" />
                        <img src={banner} alt="" className="detailKelas__kelas-image" />
                    </div>
                </div>
                <FiturKelas title={title} isPurchased={isPurchased} materi={materi} />
                <div className="detailKelas__cardBox kelas-suggestion">
                    <h1>Kamu Mungkin Akan Suka</h1>
                    <Card listKelas={listKelas} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DetailKelas