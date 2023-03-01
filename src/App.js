// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import General from './components/General';
import Politics from './components/Politics';
import Bussiness from "./components/Bussiness";
import Technology from './components/Technology';
import Health from './components/Health';
import Travel from '././components/Travel';
import Sports from './components/Sports';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
          <Route path="/"  element={<General/>}></Route>
          <Route path="/politics"  element={<Politics/>}></Route>
          <Route path="/bussiness"  element={<Bussiness/>}></Route>
          <Route path="/technology"  element={<Technology/>}></Route>
          <Route path="/health"  element={<Health/>}></Route>
          <Route path="/travel"  element={<Travel/>}></Route>
          <Route path="/sports"  element={<Sports/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
