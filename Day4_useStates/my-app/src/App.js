// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { User } from './components/User';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from "./style.js"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>

          <Link to="/" style={{marginLeft:5}}>Home</Link>
          <Link to="/user" style={{marginLeft:10}}>User</Link>

        </div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/user" element={<User/>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
