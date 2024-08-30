import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import CampsiteDirectoryPage from './pages/CampsiteDirectoryPage';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomaPage';


function App() {
  return (
    <div className="App">
        <Header/>    
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='directory' element={<CampsiteDirectoryPage/>}/>
        </Routes>
        <Footer/> 
    </div>
  );
}

export default App;

 