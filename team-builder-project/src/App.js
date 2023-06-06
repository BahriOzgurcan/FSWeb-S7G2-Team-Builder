import './App.css';
import Form from './components/Form';
import { useEffect, useState } from 'react';

function App() {
  const [uyeListesi, setUyeListesi] = useState([{
    isim: "ali",
    email: "ali@dergi.com",
    sehir: "istanbul",
    rol: "yazar",
    yas: 30
  }, {
    isim: "ayse",
    email: "ayse@dergi.com",
    sehir: "ankara",
    rol: "cizer",
    yas: 24
  }, {
    isim: "veli",
    email: "veli@dergi.com",
    sehir: "izmir",
    rol: "editor",
    yas: 44
  }
  ]);

  const [duzenlenecekUye, setDuzenlenecekUye] = useState([

  ]
  );

  const uyeEkleme = (kayitFormu) => {
    setUyeListesi([...uyeListesi, kayitFormu])
  };

  const uyeDuzenleme = (e) => {
    setDuzenlenecekUye(e);
  }

  const uyeDuzenle = (kayitFormu) => {
    setUyeListesi([...uyeListesi.filter((x) => x != duzenlenecekUye), kayitFormu])
  }

  return (
    <div className="uye-listesi">
      <h1>Eleman Listesi</h1>
      {uyeListesi.map(uye => {
        return (
          <div style={{ backgroundColor: "black", margin: "10px", color: "white" }}>
            <p>Isim= {uye.isim}</p>
            <p>E-mail= {uye.email}</p>
            <p>Yas= {uye.yas}</p>
            <p>Rol= {uye.rol}</p>
            <p>sehir= {uye.sehir}</p>
            <button onClick={()=>uyeDuzenleme(uye)}>Duzenle</button>
          </div>
        )
      })
      }

      <Form uyeEkleme={uyeEkleme} duzenlenecekUye={duzenlenecekUye} uyeDuzenle={uyeDuzenle}/>
    </div>
  )
}

export default App;

