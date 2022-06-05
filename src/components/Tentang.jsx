import React, { useState } from "react";
import { listTentangImage, listTentangFasilitas, listTim } from "../data";
import Footer from "./Footer";
import visimisi from '../asset/images/visimisi.png';
import linkedin from '../asset/icon/linkedin.svg'
import instagram from '../asset/icon/instagram.svg';

const Tentang = () => {
    return (
        <div className="tentang">
            <div className="tentang__header">
                <div className="tentang__banner">
                    <span className="tentang__softTitle">TENTANG PRODUK</span>
                    <h1 className="tentang__title">A NEW WAY FOR TEACH, WE PROVIDE BETTER FUTURE FOR TEACHER</h1>
                    <h2 className="tentang__subtitle">Kami mencoba mengubah ekosistem pendidikan saat ini untuk menciptakan pengajaran yang adaptif, menarik & interaktif.</h2>
                </div>
                <div className="tentang__mozaik">
                    {listTentangImage.map((item, i) => {
                        return (
                            <img src={item} alt="" className="tentang__image" key={i}/>
                        )
                    })}
                </div>
            </div>
            <div className="tentang__visimisi">
                <div className="tentang__misi">
                    <h1 className="misi-title">Misi Kami</h1>
                    <p className="misi-desc">Misi kami adalah untuk memberikan kesempatan kepada guru untuk memiliki portofolio digital dan meningkatkan kompetensi guru untuk mampu berkompetisi dalam era disrupsi atau era teknologi 4,0. Serta mampu mengajar dengan metode yang lebih adaptif, atraktif, interaktif.</p>
                    <div className="misi-iconBox">
                        {listTentangFasilitas.map(({icon, desc}, i) => {
                            return (
                                <div className="misi-fasilitas" key={i}>
                                    <img src={icon} alt={desc} />
                                    <span>{desc}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="tentang__misi-image">
                    <img src={visimisi} alt="" />
                </div>
            </div>
            <div className="tentang__tim">
                <h1 className="tim-title">Tim Kami</h1>
                <div className="tim-profil-box">
                    {listTim.map(({nama, role, image, sosmed}, i) => {
                        return (
                            <div className="tim-profil" key={i}>
                                <img className="tim-image" src={image} alt="" />
                                <h1 className="tim-nama">{nama}</h1>
                                <h2 className="tim-role">{role}</h2>
                                <div className="tim-sosmed" key={i}>
                                    {sosmed.map((item, i) => {
                                        return (
                                            <a href={item}><img src={item.includes('linkedin') ? linkedin : instagram} alt="" /></a>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Tentang