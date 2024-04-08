import { Box } from "@mui/material";
import React from "react";
import Foot from "./images/foot.png"


 export  default function Footer () {
     return(
        <Box
          sx={{
            marginTop:'100px',
            marginLeft:'50px'
          }}
        >
            <img
             src={Foot}
             alt="pix" 
            />
        </Box>
     ) 
 } 