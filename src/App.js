import './App.css';
import Movies from './components/Movies';
import Tv from './components/Tv';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvShows' element={<Tv />} />  
        <Route path='/movies/:genre' element={<Movies />} />
        <Route path='/tvShows/:genre' element={<Tv />} /> 
      </Routes>
    </div>

  );
}

export default App;
