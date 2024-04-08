import { Box } from "@mui/material";
import React from "react";
import frame from "./images/frame sec2 nav.png";
import frame1 from "./images/Group  sec2.png";
import frame2 from "./images/Frame sec21.png";

export default function section2 () {
    return(
    <Box
     sx={{
      
        
     }}
    >
        <Box
        sx={{
            marginTop:'80px',
            marginLeft:'400px'
        }}
        >
        <img
         src={frame}
         alt="pix" 
        />
        </Box>
        <Box>
        <Box
         sx={{
          
            display:'flex',
            // gap:'0px',
    
            
         }}
        >
            <img
            src={frame1}
            alt="pix" 
            />
            <Box
              sx={{
                marginRight:'900px'

              }}
            >
            <img
            src={frame2}
            alt="pix" 
            />
            </Box>
          

        </Box>
      
       </Box> 

    </Box>
    
    )

}