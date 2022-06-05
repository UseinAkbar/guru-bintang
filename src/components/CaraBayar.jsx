import React from "react";
import { langkahBayar } from "../data";

const CaraBayar = ({metodeBayar}) => {

    return (
        <div className="bayar">
            <h1 className="bayar__title">Cara Pembayaran</h1>
            <div className="bayar__instruksi">
                <div>
                    <h1 className="bayar__metode">ATM {metodeBayar}</h1>
                    <ol className="bayar__list">
                        {langkahBayar.map(item => {
                            return (
                                <li className="bayar__item">{item}</li>
                            )
                        })}
                    </ol>
                </div>
                <div>
                    <h1 className="bayar__metode">{metodeBayar} M-Banking</h1>
                    <ol className="bayar__list">
                        {langkahBayar.map(item => {
                            return (
                                <li className="bayar__item">{item}</li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default CaraBayar