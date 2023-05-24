import {Button, TextField} from "@mui/material"
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
// import { useEffect } from "react";
import { Formik } from "formik"
import * as Yup from "yup"
// export const Register = () => {
//     return(<form>
//         <TextField label="name"/>
//     </form>)
// }
export const Register = () => {
    // const [firstname,setFirstName] = useState("Anant");
    // const [lastname,setLastName] = useState("Patel");
    // const [email,setEmail] = useState("anant.patel4762@gmail.com");
    // const [password,setPassword] = useState("123");
    // const [confirmpassword,setConfirmPassword] = useState("123");
    // const [role,setRole] = useState();
    // useEffect(() => {
    //     // console.log("This is before Change:"+firstname);
    // });
    const initialValues = {
        firstname: "",       
        lastname: "",
        email: "",
        role: "",
        password: "",
        confirmpassword: ""
    }
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().min(3, "Firstname should atleast contain 3 characters"),
        lastname: Yup.string().min(3, "Lastname should atleast contain 3 characters"),
        email: Yup.string().email("Please enter a valid email"),
        password: Yup.string().min(5,"Password must contain 5 character"),
        confirmpassword: Yup.string().oneOf([Yup.ref('password'), null],"Password must be same")
    })

    const onFormSubmit = (values) => {
        console.log(values)
    }
    // const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    //     initialValues: initialValues,
    //     onSubmit:onFormSubmit
    // });
    // console.log(myFormik);
    return(
            // onSubmit={handleSubmit}
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onFormSubmit}
            >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center",
                        rowGap:10,
                    }}>
                        <div style={{
                            fontSize:40,
                            fontWeight:"bolder",
                            color:"#2E2E2E",
                        }}>
                            Login or Create an Account
                        </div>
                        <div style={{
                            width:190,
                            height:0,
                            border:1,
                            borderStyle: "solid",
                            borderColor:"rgb(255,89,92)",
                            marginBottom:30
                        }}> </div>
                        <div style={{
                            marginLeft:162  ,
                            marginRight:"auto",
                            fontSize:20,
                            fontWeight:"bold",
                            color:"rgb(94,94,94)"
                        }}>Personal Information
                            <div><span style={{
                                fontSize:14,
                                color:"rgb(94,94,94)",
                                fontWeight:"lighter",
                                marginTop:50
                            }}>Please enter the following Information to create account</span></div>
                        </div>
                        <div style={{
                            display:"flex",
                            columnGap:40,
                        }}>
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                rowGap:5
                            }}>
                                First Name*
                                <TextField 
                                // id="outlined-basic" 
                                name="firstname"
                                // label="First Name" 
                                variant="outlined" 
                                value={values.firstname}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                size="small"
                                style={{
                                    width:500,
                                }}
                                />
                                <span style={{
                                    color:"red",
                                    fontSize:13

                                }}
                                >
                                    {touched.firstname && errors.firstname}
                                </span>
                            </div>
                            
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                rowGap:5
                            }}>
                                Last Name*
                                <TextField 
                                // id="outlined-basic" 
                                name="lastname"

                                // label="Last Name" 
                                variant="outlined" 
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                style={{
                                    width:500,
                                }}
                                />
                                <span style={{
                                    color:"red",
                                    fontSize:13

                                }}
                                >
                                    {touched.lastname && errors.lastname}
                                </span>
                            </div>
                        </div>
                    <div style={{
                            display:"flex",
                            columnGap:40
                        }}>
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                rowGap:5
                            }}>
                                Email*
                                <TextField 
                                // id="outlined-basic" 
                                name="email"
                                // label="Email" 
                                variant="outlined"
                                value={values.email} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                style={{
                                    width:500,
                                }}
                                />
                                <span style={{
                                    color:"red",
                                    fontSize:13

                                }}
                                >
                                    {touched.email && errors.email}
                                </span>
                            </div>
                            
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                rowGap:5
                            }}>
                                Role*
                                <Select
                                    // labelId="demo-simple-select-label"
                                    // id="demo-simple-select"
                                    name="role"
                                    value={values.role}
                                    // label="Role"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    size="small"
                                    style={{
                                        width:500,
                                    }}  
                                    >
                                    <MenuItem value={"Seller"}>Seller</MenuItem> 
                                    <MenuItem value={"Buyer"}>Buyer</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <div style={{
                            marginLeft:162  ,
                            marginRight:"auto",
                            fontSize:20,
                            fontWeight:"bold",
                            color:"rgb(94,94,94)"
                        }}>Login Information</div>
                        <div style={{
                            display:"flex",
                            columnGap:40
                        }}>
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                rowGap:5
                            }}>
                                Password*
                                <TextField 
                                type="password"
                                // id="outlined-basic" 
                                name="password"
                                // label="Password" 
                                variant="outlined" 
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                style={{
                                    width:500,
                                }}
                                />
                                <span style={{
                                    color:"red",
                                    fontSize:13

                                }}
                                >
                                    {touched.password && errors.password}
                                </span>
                            </div>
                            
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                rowGap:5
                            }}>
                                Confirm Password*
                                <TextField
                                type="password" 
                                // id="outlined-basic" 
                                name="confirmpassword"
                                // label="Confirm Password" 
                                variant="outlined" 
                                value={values.confirmpassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                style={{
                                    width:500,
                                }}
                                />
                                <span style={{
                                    color:"red",
                                    fontSize:13,
                                }}
                                >
                                    {touched.confirmpassword && errors.confirmpassword}
                                </span>
                            </div>
                        </div>    
                        <Button variant="contained" type="submit" 
                        style={{
                            marginRight:"auto",
                            marginLeft:164,
                            backgroundColor:"rgb(255,89,92)",
                            borderRadius:3,
                            fontWeight:"bold"
                        }}
                        >Register</Button>      
                    </div>
                </form>    
            )} 
            </Formik>
        </div>  
                  
    )
}