import { Routes, Route } from "react-router-dom";
import Create from './components/Create';
import Update from './components/Update';
import React, { useState } from 'react'
import "./styles/App.css";
import DarkMode from "./components/DarkMode";



function App() {
  const [name, setName] = useState(null);

  const userName = (e) => {
    e.preventDefault();
    /*
    Button tusuna bastıgımızda varsayılan davranısıyla sayfamız yenileniyor. Bunu onlemek için buttonun varsayılan davranısı durduruyoruz.
     */
    const userData = {
      name,
    };
    localStorage.setItem('token-info', JSON.stringify(userData.name));
    setName('');

  };
  return (
    <>

      <nav>
        <DarkMode />
      </nav>
      {

        <div className="addName">
          <form>
            <div>
              <input
                placeholder="Lütfen isim giriniz"
                className="todo-input"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <button className="todo-button" type="submit" onClick={userName}>
                User Name
              </button>
            </div>

          </form>
        </div>
      }
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </>
  )
}

export default App;