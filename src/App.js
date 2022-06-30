import logo from './logo.svg';
import './App.css';
import Navaigation from './shared/Navaigation';
import { Routes, Route } from 'react-router-dom';
import Calender from './components/Calender';
import About from './components/About';
import 'react-day-picker/dist/style.css';
import Home from './components/Home';
import Footer from './shared/Footer';

function App() {
  return (
    <div>
      <Navaigation></Navaigation>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
