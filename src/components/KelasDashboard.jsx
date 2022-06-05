import React, { useState } from "react";
import ListKelas from "./ListKelas";
import iconKelas from '../asset/icon/icon-kelas.svg';
import { listDashboardKelas } from "../data";

const KelasDashboard = () => {
    return (
        <div className="listKelas">
            <div className="listKelas__detail">
                <div><img src={iconKelas} alt="" /> Kelas yang Kamu Ikuti ({listDashboardKelas.length})</div>
                <a href="/dashboard/kelas-saya">Lihat Semua Kelas</a>
            </div>
            <ListKelas arrKelas={listDashboardKelas} />
        </div>
    )
}

export default KelasDashboard