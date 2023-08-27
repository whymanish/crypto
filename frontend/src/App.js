import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Coincard from './Components/Coincard';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Hero/>}></Route>
    <Route path='/Coincard' element={<Coincard/>}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
