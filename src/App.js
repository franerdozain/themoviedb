import './App.css';
import Movies from './components/Movies';
import Tv from './components/Tv';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useState } from 'react';
import TitlePage from './components/TitlePage';

function App() {
  const [genreId, setGenreId] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  
  return (
    <div className="App d-flex flex-column align-items-center">
      <Navbar setGenreId={setGenreId}/>      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies setSelectedTitle={setSelectedTitle}/>} />
        <Route path='/tvShows' element={<Tv setSelectedTitle={setSelectedTitle}/>} />  
        <Route path='/movies/:genre' element={<Movies genreId={genreId} setSelectedTitle={setSelectedTitle} />} />
        <Route path='/tvShows/:genre' element={<Tv genreId={genreId} setSelectedTitle={setSelectedTitle} />} />     
        <Route path='/title/:title' element={<TitlePage selectedTitle={selectedTitle}/>} />          
      </Routes>
    </div>
  );
}

export default App;
