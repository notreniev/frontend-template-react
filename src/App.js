import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Heroes from './components/hero/Heroes';
require('dotenv').config();

function App() {
  const [heroes, setHeroes] = useState([{}]);

  useEffect(() => {
    const fetchHeroes = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/hero`);
      setHeroes(data);
    }

    fetchHeroes();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        Heróis
      </header>
      <Heroes heroes={heroes} />
    </div>
  );
}

export default App;
