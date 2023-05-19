import { Navigate, useNavigate } from "react-router-dom"
export const Apple = () => {
    const Navigate = useNavigate();
    const onHomePageButtonClick = () => {
        Navigate("/");
    }
    return(
        <div>
            <h1>Apple 🍎</h1>
            <button onClick = {onHomePageButtonClick}>Home Page Button</button>
        </div>
);}