import './App.css';
import { Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import { Apple } from './Apple';
import { NotFound } from './NotFound';
import {BrowserRouter, Routes, Route} from "react-router-dom";
const App = () => {
  return (
    // <div>
    //   <Apple/>
    //   <HomePage/>
    // </div>
    
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/apple">Apple</Link>
        <Link to="/applet">Applet</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/apple" element={<Apple/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
