import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import Work from './Component/Work';
import Work1 from './Component/Work1';

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route exact path ='/' element={<Home/>}></Route>
      <Route exact path ='/Work' element={<Work/>}></Route>
       <Route exact path ='/Work1' element={<Work1/>}></Route>
    </Routes>
  </Router>
  
  
  </>
  );
}

export default App;
