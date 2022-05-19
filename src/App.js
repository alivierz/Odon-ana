import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Galeria from './pages/gallery/galeria';


function App() {
  return (
    <HashRouter className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/galeria' element={<Galeria/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
