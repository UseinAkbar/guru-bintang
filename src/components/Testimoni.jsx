import React from "react";
import star from '../asset/icon/star.svg';
import round from '../asset/icon/round.svg';
import { listTestimoni } from "../data";

const Testimoni = () => {
    const stars = []
    for(let i = 0; i < 5; i++) {
        stars.push(star)
    }

    return (
        <div className="testimoni">
            <h1 className="testimoni__title">
                <img src={round} alt="" />
                <span className="kutip">“</span> Kata Mereka tentang <span>Guru Bintang</span>
            </h1>
            <div className="testimoni__box">
                {listTestimoni.map(({text, img, nama, jabatan}, i) => {
                    return (
                        <div className="testimoni__personal" key={i}>
                            <p className="testimoni__text">{text}</p>
                            <div className="testimoni__profil-box">
                                <div className="testimoni__profil">
                                    <img src={img} alt={jabatan} className='testimoni__picture' />
                                    <div className="testimoni__identitas">
                                        <h2 className="testimoni__nama">{nama}</h2>
                                        <h3 className="testimoni__jabatan">{jabatan}</h3>
                                    </div>
                                </div>
                                <div className="testimoni__stars">
                                    {stars.map(item => <img src={item} />)}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
    </div>
    )
}

export default Testimoni