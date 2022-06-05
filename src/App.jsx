import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Kelas from "./components/Kelas";
import Tentang from "./components/Tentang";
import DetailKelas from "./components/DetailKelas";
import Checkout from "./components/Checkout";
import InstruksiBayar from "./components/InstruksiBayar";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import SemuaKelasUser from "./components/SemuaKelasUser";
import SemuaSertifUser from "./components/SemuaSertifUser";
import DaftarTransaksi from "./components/DaftarTransaksi";

const App = () => {
  const [accessToken, setAccessToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')

  useEffect(() => {
    setAccessToken(localStorage.getItem('token_access'))
    setRefreshToken(localStorage.getItem('token_refresh'))
  }, [])

  return (
    <Router>
      <div className="App">
        {/* use useHistory() to conditionally render Navigation */}
        <Navigation />
        <Routes>
          <Route index element={<Home access_token={accessToken} />} exact />
          <Route path='register' element={accessToken ? <Navigate to='/' /> : <Register />} />
          <Route path='login' element={accessToken ? <Navigate to='/' /> : <Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='dashboard' >
            <Route path='kelas-saya' element={<SemuaKelasUser />} />
            <Route path='sertifikat' element={<SemuaSertifUser />} />
            <Route path='transaksi' element={<DaftarTransaksi />} />
          </Route>
          <Route path='kelas' element={<Kelas />} />
          <Route path='tentang' element={<Tentang />} />
          <Route path='detail-kelas/:judul' element={<DetailKelas />} />
          <Route path='checkout/:judul' element={<Checkout />} />
          <Route path='instruksi-pembayaran' element={<InstruksiBayar />} />
          {/* <Route path='/produk-kelas/:judul' element={<DetailProduk />} /> */}
          {/* <Route path='/program' element={<Program />} /> */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
