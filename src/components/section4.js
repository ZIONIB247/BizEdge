import { Box } from "@mui/material";
import React from "react";
import sec4 from "./images/sec4.png";

 export default function Section4 () {
    return(
        <Box
          sx={{
            marginTop:'100px',
            marginLeft:'190px'
          }}
        >
            <img
            src={sec4}
            alt="pix" 
            />
        </Box>
    )
    
}