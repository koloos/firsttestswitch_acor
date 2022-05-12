import React from 'react';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Actualites from './Pages/Actualites/Actualites';
import Evenements from './Pages/Actualites/Evenements/Evenements';
import NotreActualite from './Pages/Actualites/NotreActualite/NotreActualite';
import Presse from './Pages/Actualites/Presse/Presse';
import NotreMission from './Pages/NotreMission/NotreMission';
import Recrutement from './Pages/Recrutements/Recrutement';
import Contact from './Pages/Contact/Contact';
import Mail from './Pages/Mail/Mail';
import Footer from './Components/Footer/Footer';
import NotreHistoire from './Pages/NotreHistoire';
import Temoignages from './Pages/Temoignages';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/actualites' element={<Actualites />} />
        <Route path='/acutalites/evenements' element={<Evenements />} />
        <Route path='/actualites/notreactualite' element={<NotreActualite />} />
        <Route path='/acutalites/presse' element={<Presse />} />
        <Route path='/acutalites/temoignages' element={<Temoignages />} />
        <Route path='/notremission' element={<NotreMission />} />
        <Route path='/recrutement' element={<Recrutement />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mail' element={<Mail />} />
        <Route path='/notrehistoire' element={<NotreHistoire />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
