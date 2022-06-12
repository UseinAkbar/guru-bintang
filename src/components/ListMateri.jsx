import React from "react";
import document from '../asset/icon/document.svg';
import lock from '../asset/icon/lock.svg';

const ListMateri = ({title, isPurchased, materi}) => {
    
    return(
        <div className="fiturKelas__materi-list">
            {materi.map((item, i) => {
                const {judul_materi, isi_materi: {content, title_content}} = item
                return (
                    judul_materi === 'Pengenalan Kelas' ?
                    <a className="fiturKelas__materi-link" key={i}>
                        <img src={document} className='fiturKelas__materi-icon' alt="" />Pengenalan Kelas
                    </a> :
                    <a className="fiturKelas__materi-link" key={i} aria-disabled>
                        <img src={isPurchased ? document : lock} className='fiturKelas__materi-icon' alt="" />{judul_materi}
                    </a>
                )
            })}
        </div>
    )
}

export default ListMateri