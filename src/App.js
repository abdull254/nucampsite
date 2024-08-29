import './App.css';
import Header from './components/Header'
import CampsiteDirectoryPage from './pages/CampsiteDirectoryPage';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <Header/>    
        <CampsiteDirectoryPage/>
        <Footer/> 
    </div>
  );
}

export default App;

 