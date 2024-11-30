import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Aside from './components/aside';
import Header from './components/header';
import Home from './components/home';
import AlbumList from './components/AlbumList';
import AlbumDetails from './components/AlbumDetails';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <>
        <main>
          <section className="header">
            <Header />
          </section>
          <section className="aside">
            <Aside />
          </section>
          <section className="home">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/albums" element={<AlbumList />} /> Album List
              <Route path="/album/:albumId" element={<AlbumDetails />} /> Album Details
            </Routes>
          </section>
          <section className='footer'> 
            <Footer/>
          </section>
        </main>
      </>
    </Router>
  );
}

export default App;
