import React from "react";

const MateriSlide = ({judul, isi, tipe}) => {
    return (
        <div className="slide">
            {tipe === 'teks' ? 
            <div className="slide__teks">
                <h1 className="slide__title">{judul}</h1>
                <p className="slide__isi">{isi}</p>
            </div> 
            : 
            <img src={isi} alt={judul} className='slide__gambar' />}
        </div>
    )
}

export default MateriSlide