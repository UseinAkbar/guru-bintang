import React from "react";
import Footer from "./Footer";
import { useParams, useSearchParams } from "react-router-dom";

const DetailProduk = () => {
    // const { judul } = useParams()
    
    return (
        <div className="detailProduk">
            <h1>{}</h1>
            <a href="/produk-kelas">back</a>
        </div>
    )
}

export default DetailProduk