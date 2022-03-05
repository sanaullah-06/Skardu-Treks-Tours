import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Component/Pages/Home';
import ServicePage from './Component/Pages/ServicePage';
import SignInOut from './Component/Pages/SignInOut';
import GalleryPage from './Component/Pages/GalleryPage';
import ProductDetail from './Component/Pages/ProductDetail';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/SignInOut' element={<SignInOut/>}/>
          <Route path='/GalleryPage' element={<GalleryPage/>}/>
          <Route path='/ServicePage' element={<ServicePage/>}/>
          <Route exact path='/ProductDetail/:id' element={<ProductDetail/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
