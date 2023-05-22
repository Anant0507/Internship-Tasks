import Logo from "./logo.svg"
import reactImage from "./Images/ReactImage.png"
import './App.css';
import { globalsStyles } from './constants';
import appStyle from './AppStyle.module.css'
import { Link } from 'react-router-dom'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "./Components/Home"
import { AboutUs } from './Components/AboutUs';
import { ThemeProvider } from "@emotion/react";
import { theme } from "./style.js";
// import env from "./.env"
function App() {
  console.log(process.env.REACT_APP_HOSTED_URL);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <table>
            <tr>
              <td>
                <div style={{color:"red", fontSize:20,paddingLeft:10}}>This is inline CSS</div>
              </td>
              <td>
                <div className="externalStyle">This is External CSS using App.css</div>
              </td>
              <td>
                <div style={{
                  ...globalsStyles.navbar
                }}>
                  This CSS is Applied from constants file  
                </div>
              </td>
              <td>
                <div className={appStyle.navbarStyles}>This CSS is applied from AppStyle.module.css</div>
              </td>
              
            </tr>
            <tr>
              <td>
                <img src={Logo} alt="logo.svg" width={100}></img> <br></br>
              </td>
              <td>
                <img src={reactImage} alt="imagesFolder.png" width={100}></img>
              </td>
              <td>
                  <img src="http://localhost:3000/logo192.png" alt="logo192.png" width={100}></img> <br></br>
              </td>
              <td>
                <img src={`${process.env.REACT_APP_HOSTED_URL}/logo192.png`} alt="logo192.png" width={100}></img>
              </td>
            </tr>
            <tr>
              
            </tr>
            <tr>
              
            </tr>
          </table>
          
          <Link to="/" style={{marginLeft:5}}>Home</Link>
          <Link to="/aboutus" style={{marginLeft:10}}>AboutUs</Link> <br></br>     
          
        </div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
)}
export default App;
