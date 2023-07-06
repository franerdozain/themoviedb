import './App.css';
import Movies from './components/Movies';
import Tv from './components/Tv';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [genreId, setGenreId] = useState(null)
  
  return (
    <div className="App">
      <Navbar setGenreId={setGenreId}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvShows' element={<Tv />} />  
        <Route path='/movies/:genre' element={<Movies genreId={genreId}/>} />
        <Route path='/tvShows/:genre' element={<Tv genreId={genreId} />} /> 
      </Routes>
    </div>

  );
}

export default App;
