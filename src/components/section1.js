import { Box } from "@mui/material";
import React from "react";
import group1 from "./images/GroupOne.png";
import group2 from "./images/GroupTwo.png";
import frame1 from "./images/frame1.png";


export default function Section1 () {
    return (
        <Box
        sx={{
            marginTop:'50px',
            display:'flex',
                // width:'379.46px',
                // height:'708.73px',
                // top:'153.68px',
                // left:'230.55px',
                // gap:'88px'
            
        }}
        >
    <Box>
        <img
        src={group1}
        alt="pix"
        
        />

    </Box>
    
    <Box
 
    >
        <img
        src={frame1}
        alt="pix"
         />

    </Box>
    <Box>
        <img
        src={group2}
        alt="pix" 
        />

    </Box>
</Box>
    )
}