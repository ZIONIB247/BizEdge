import { Box } from "@mui/material";
import React from "react";
import Phone from "./images/phone.png";



  export default function Section5 () {
    return(
        <Box
         sx={{
            display:'flex',
            marginLeft:'200px',
            marginTop:'100px',
            gap:'15px',
            backgroundColor:'#EBEFFA',
            padding:'20px',
            width:'1104px',
            height:'550px',
            borderRadius:'25px'
         }}
        >    
             <Box
             sx={{
                marginTop:'180px',
                padding:'20px',
                marginInline:'50px'
             }}
             >
                <p>MyEdge employment self-service</p>
                <h1>Get the best out of work life</h1>
                <p>MyEdge app has features that manages employee <br></br>
                   information that help achieve a stress-free and< br></br>
                     personalised self-service expirence</p>
             </Box>
            
             <img
               src={Phone} 
               alt="pix"
              />
            
        </Box>
    
    )
    
  } 