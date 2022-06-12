import React, { useEffect } from "react";
import Footer from "./Footer";
import person from '../asset/images/person.png';
import rectangle1 from '../asset/images/rectangle1.png';
import rectangle2 from '../asset/images/rectangle2.png';
import dots from '../asset/images/dots.png';
import path from '../asset/images/path.png';
import { perks, listKelas } from "../data";
import Card from "./Card";
import Testimoni from "./Testimoni";
import FAQ from "./FAQ";

const Home = ({access_token}) => {

    // useEffect(() => {
    //     fetch('https://rangkoom.com/gurubintang/api/v1/classes', {
    //             method: 'GET',
    //             headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `Bearer ${access_token}`}
    //         }).then(function(response) {
    //             return response.json();
    //         }).then(function(data) {
    //             console.log(data);
    //         });
    //   }, [])

    return (
        <main className="home">
            <header className="banner">
                <div className="banner__desc">
                    <h1 className="banner__title">Tingkatkan Keahlian, untuk Menjadi Guru Bintang
                        <img src={path} alt="" />
                    </h1>
                    <p className="banner__subtitle">Belajar bersama kami, riset dan karya ilmiah tidak lagi terasa susah.  Kami membangun Ekosistem Keilmiahan & Penelitian untuk Mencetak Inovator Muda Indonesia dengan pembelajaran secara daring.</p>
                    <a href="#kelas-populer" className="banner__cta">Mulai Belajar Sekarang</a>
                </div>
                <div className="banner__image-box">
                    <img src={person} loading='lazy' alt="Women holding the book" className="banner__image banner__image--1" />
                    <img src={rectangle2} loading='lazy' alt="Rectangle" className="banner__image banner__image--2" />
                    <img src={rectangle1} loading='lazy' alt="Rectangle" className="banner__image banner__image--3" />
                    <img src={dots} loading='lazy' alt="Dots Rectangle" className="banner__image banner__image--4" />
                </div>
            </header>
            <section className="content">
                <div className="perk">
                    {perks.map(({title, desc, icon}, i) => {
                        return (
                            <div className="perk__card" key={i}>
                                <img src={icon} alt='' className="perk__icon" />
                                <h1 className="perk__title">{title}</h1>
                                <p className="perk__desc">{desc}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="kelas" id="kelas-populer">
                    <div className="kelas__header">
                        <h1 className="kelas__title">Kelas Online Spesial <span>Guru Bintang</span></h1>
                        <p className="kelas__desc">Akses materi yang berupa Modul, Video Pembelajaran, Quiz, Pre-Test, dan Post Test yang lengkap dalam satu platform. Pelajari sekarang di kelas online Guru Bintang.</p>
                        <a href="/kelas" className="kelas__cta">Lihat Kelas Lainnya</a>
                    </div>
                    <Card listKelas={listKelas} />
                </div>
                <div className="trust">
                    <h1 className="trust__title">Dipercaya untuk Menjadi Platform Belajar Bagi Calon Pengajar Terbaik</h1>
                    <div className="trust__rating">
                        <div className="trust__review">
                            <h2>3500<span>+</span></h2>
                            <p>Peserta dari seluruh Indonesia</p>
                        </div>
                        <div className="trust__review">
                            <h2>4.7<span>+</span></h2>
                            <p>Rating Google Review</p>
                        </div>
                        <div className="trust__review">
                            <h2>4.5<span>+</span></h2>
                            <p>Rating Google Review</p>
                        </div>
                    </div>
                </div>
                <Testimoni />
                <FAQ />
            </section>
            <Footer />
        </main>
    )
}

export default Home