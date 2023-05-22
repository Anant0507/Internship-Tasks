import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
export const AboutUs = () => {
    const Navigate = useNavigate();

    const onHomePageButtonClick = () => {
        Navigate("/");
        alert("Home Page Button Clicked!")
    }

    return(
        <div>
            <h1>About Us</h1>
            <Button variant="contained" onClick={onHomePageButtonClick}>Home Page</Button>
        </div>
     
    );
}