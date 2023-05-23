import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material";
import { TextField }from "@mui/material";
import { useState } from "react";
import { Avatar } from "@mui/material"
import { blue } from "@mui/material/colors";
import { Popover } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
export const User = () => {
    const [name, setName] = useState("Anant");
    const [email, setEmail] = useState("anant.patel4762@gmail.com");
    const [open,setOpen] = useState(false);
    const [anchorEl,setAnchorEl] = useState(null);

    const Navigate = useNavigate();
    const onHomePageButtonClick = () => {
        console.log(name);
        console.log(email);
        Navigate("/");
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            columnGap:10,
            rowGap:20,
            margin:10
        }} >
            <Popover 
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                >
                    <div style={{
                        padding:5
                    }}>
                        <h3>Anant Patel</h3>
                        <Button variant="contained" onClick={onHomePageButtonClick}>
                            Logout
                            <LogoutIcon/>
                        </Button>
                    </div>
                
            </Popover>
            <div
                style={{
                        display:"flex",
                        justifyContent:"flex-end",
                        alignItems:"center",
                        columnGap:5,
                        cursor:"pointer",  
                    }} 
                >
                <div style={{
                    display:"flex",
                    justifyContent:"flex-end",
                    alignItems:"center",
                    columnGap:5,
                }} 
                onClick={handleClick}
                >
                    <Avatar sx={{ bgcolor: blue[500] }} >AP</Avatar>
                    {/* <span>Anant Patel</span> */}
                </div>
                
            </div>
        <div style={{
                padding:10,
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                rowGap:10,
                width:1366,
                // backgroundColor:"red"
            }}>
                <TextField 
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        width:250
                    }}
                    
                />
                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width:250
                    }}
                />
                <Button variant="contained" onClick={onHomePageButtonClick}>Submit</Button>
            </div>
        </div>
        
    )
}