import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header'
import CampsiteDirectoryPage from './pages/CampsiteDirectoryPage';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomaPage';
import AboutPage from './pages/AboutPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import { fetchCampsites } from './features/campsites/CampsitesSlice';
import { fetchPartners } from './features/partners/PartnersSlice';
import { fetchPromotions } from './features/promotion/PromotionSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  
  useEffect( ()=> {
    dispatch(fetchPromotions());
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
  }, [dispatch])

  return (
    <div className="App">
        <Header/>    
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='directory' element={<CampsiteDirectoryPage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route
              path='directory/:campsiteId'
              element= {<CampsiteDetailPage/>}
              />
        </Routes>
        <Footer/> 
    </div>
  );
}

export default App;

 