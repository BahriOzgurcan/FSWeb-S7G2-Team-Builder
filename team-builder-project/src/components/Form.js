import { useEffect, useState } from "react";

const Form = ({ uyeEkleme }) => {

    const [kayitFormu, setKayitFormu] = useState({
        isim: "",
        email: "",
        sehir: "",
        rol: "",
        yas: 0
    }
    )

    const submitHandler = (e) => {
        e.preventDefault();
        uyeEkleme(kayitFormu);
        console.log(kayitFormu);
    };

    const chanheHandler = (e) => {
        const { value, name } = e.target;
        setKayitFormu({ ...kayitFormu, [name]: value })
    }

    return (
        <div>
            <h1>Calisan Kayit Formu</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="isim">Isim Alani:</label>
                <input
                    name="isim"
                    type="text"
                    id="isim"
                    value={kayitFormu.isim}
                    onChange={chanheHandler}
                /><br />
                <label htmlFor="email">E-mail Alani:</label>
                <input
                    name="email"
                    type="email"
                    id="email"
                    value={kayitFormu.email}
                    onChange={chanheHandler}
                /><br />
                <label htmlFor="sehir">Sehir Alani:</label>
                <input
                    name="sehir"
                    type="text"
                    id="sehir"
                    value={kayitFormu.sehir}
                    onChange={chanheHandler}
                /><br />
                <label htmlFor="rol">Rol Alani:</label>
                <input
                    name="rol"
                    type="text"
                    id="rol"
                    value={kayitFormu.rol}
                    onChange={chanheHandler}
                /><br />
                <label htmlFor="yas">Isim Alani:</label>
                <input
                    name="yas"
                    type="number"
                    id="yas"
                    value={kayitFormu.yas}
                    onChange={chanheHandler}
                />
                <button type="submit">Ekle</button>
            </form>
        </div>
    );
};

export default Form