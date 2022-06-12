import React, { useState, useEffect } from "react";
import MateriSlide from "./MateriSlide";
import documentDark from '../asset/icon/document-dark.svg';
import mentor from '../asset/images/mentor.png';
import mentor2 from '../asset/images/mentor2.png';
import { listContent } from "../data";

const Materi = () => {
    const [isChecked, setChecked] = useState(false)
    const [filteredContent, setFilteredContent] = useState(listContent[0])
    const {judul} = filteredContent

    const handleChange = e => {
        setChecked(false)
        let materi = listContent.filter(item => item.judul === e.target.value)
        setFilteredContent(materi[0])
    }

    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <div className="materi">
            <div className="materi__container">
                <div className="materi__heading">
                    <h1 className="materi__title">Kelas Filosofis Mengajar untuk Guru</h1>
                    <h2 className="materi__subtitle">Penanaman nilai mengajar bagi guru untuk menerapkan metode belajar mengajar yang Baik dan Kreatif.</h2>
                </div>
                <div className="materi__kelas">
                    <div className="materi__list">
                        <h1 className="materi__list-title">Materi Kelas</h1>
                        <div className="materi__list-scroll">
                            {listContent.map(({judul}, i) => {
                                return (
                                    <div className="list-item" key={i}>
                                        <input type="radio" name="kelas" id={i} value={judul} hidden onChange={handleChange} />
                                        <label htmlFor={i} className={`materi__tab ${isChecked && (i === 0) ? 'label-checked' : ''}`}>
                                            <img src={documentDark} alt="" /> 
                                            <div>{judul}</div>
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="materi__content-box">
                        <MateriSlide {...filteredContent} />
                        <h1 className="materi__content-title">{judul}</h1>
                        <h2 className="materi__content-titleMentor">Mentor Kelas Ini</h2>
                        <div className="materi__mentor-box">
                            <div className="materi__mentor-profil">
                                <img src={mentor} alt="" className="materi__mentor-image" />
                                <div>
                                    <h1 className="materi__mentor-nama">Handoko Tjokroamy</h1>
                                    <h2 className="materi__mentor-jabatan">CEO Hallo Coding</h2>
                                </div>
                            </div>
                            <div className="materi__mentor-profil">
                                <img src={mentor2} alt="" className="materi__mentor-image" />
                                <div>
                                    <h1 className="materi__mentor-nama">Sarah Hermawan</h1>
                                    <h2 className="materi__mentor-jabatan">CEO Girl in Tech</h2>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="materi__footer">
                <p className="materi__footer-copyright"><span>© 2022 Proclub Probation #HASHIRA_TEAM</span>. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Materi