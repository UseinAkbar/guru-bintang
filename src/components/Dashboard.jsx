import React, { useState } from "react";
import KelasDashboard from "./KelasDashboard";
import SertifikatDashboard from "./SertifikatDashboard";
import note from '../asset/icon/kelas-selesai.svg';
import award from '../asset/icon/award.svg';
import { listDashboardKelas } from "../data";

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user_info'))
    const kelasSelesai = listDashboardKelas.filter(item => item.state === 'selesai')

    return (
        <div className="dashboard">
            <div className="dashboard__left">
                <div className="dashboard__banner">
                    <div className="dashboard__greeting">
                        <h1 className="dashboard__title">Halo, {user.username}</h1>
                        <p className="dashboard__desc">Lanjutkan progress belajar kamu hari ini, untuk meningkatkan skill kamu</p>
                    </div>
                    <div className="dashboard__overview">
                        <div className="dashboard__overview-detail">
                            <div><img src={note} alt="" /> {kelasSelesai.length}</div>
                            <p>Kelas diselesaikan</p>
                        </div>
                        <div className="dashboard__overview-detail">
                            <div><img src={award} alt="" /> 1</div>
                            <p>Sertifikat didapatkan</p>
                        </div>
                    </div>
                </div>
                <KelasDashboard />
            </div>
            <SertifikatDashboard />
        </div>
    )
}

export default Dashboard