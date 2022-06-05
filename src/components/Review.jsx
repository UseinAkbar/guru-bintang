import React from "react";
import star from '../asset/icon/star.svg';
import { listReview } from "../data";

const Review = () => {
    const stars = []
    for(let i = 0; i < 5; i++) {
        stars.push(star)
    }

    return (
        <div className="fiturKelas__review-box">
            {listReview.map(({text, img, nama, jabatan}, i) => {
                return (
                    <div className="fiturKelas__review-personal" key={i}>
                        <p className="fiturKelas__review-text">{text}</p>
                        <div className="fiturKelas__review__profil-box">
                            <div className="fiturKelas__review-profil">
                                <img src={img} alt={jabatan} className='fiturKelas__review-picture' />
                                <div className="fiturKelas__review-identitas">
                                    <h2 className="fiturKelas__review-nama">{nama}</h2>
                                    <h3 className="fiturKelas__review-jabatan">{jabatan}</h3>
                                </div>
                            </div>
                            <div className="fiturKelas__review-stars">
                                {stars.map(item => <img src={item} />)}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Review