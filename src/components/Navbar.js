import React from "react";
import logo from "./images/logo1.png";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

function Navigation() {
    return(
        <Box 
        sx={{
            display: 'flex',
            justifyContent: 'space-around',
            gap:'280px',
            padding:'15px'
        }}>
            <img className="img"
            src={logo} alt="logo" 
            />
            <Box>
                <Button sx={{
                    fontWeight:'600',
                    textTransform:'none',
                    color:'#171717',
                    fontSize:'16px'
                }}>
                    Home
                </Button>
                <Button sx={{
                    fontWeight:'400',
                    textTransform:'none',
                    color:'#545454',
                    fontSize:'15px'
                }}>
                    Request a Demo
                </Button>
                <Button sx={{
                    textTransform:'none',
                    backgroundColor:'#EAF8FA',
                    color:'#545454',
                    fontSize:'13px',
                    fontWeight:'400',
                    lineHeight:'20.3PX'


                }}>
                    Sign in
                </Button>
               
            </Box>
        </Box>
    )
    
}
export default Navigation