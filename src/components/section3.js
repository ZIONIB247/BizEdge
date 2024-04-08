import { Box } from "@mui/material";
import React from "react";
import sec3 from "./images/sec 3.png"



  export default function Section3 () {

    return(
        <Box
           sx={{
            marginTop:'100px',
            marginLeft:'200px'
           }}
        >
            <img
            src={sec3}
            alt="alt" 
            />
        </Box>
    )
    
 }