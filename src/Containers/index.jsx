import React,{useState} from 'react'
import { Paper, Box} from '@mui/material'
import Calender from '../Components/Calender';
import { StyleSelectBox } from '../Themes';
import AppointmentDetail from '../Components/AppointmentDetail';
import TimerView from '../Components/TimerView';
import FormView from '../Components/FormView';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Containers() {
    //TODO: state for is date selected
     const [onDateSelect,setOnDateSelect] = useState(null);
     const matches = useMediaQuery('(min-width:300px)');
    const classes = StyleSelectBox();
    return (
            // desktop view when no TimerView 
<>

        
            <Paper sx={{ width:onDateSelect == null ?"70%":"90", display:"flex", justifyContent:"center", alignItem:"center", mt:5, mx:'auto'}}>
            
             {/* desktop view when TimerView  */}
             {/* <Paper sx={{ width:"90%", alignItem:"center", mt:5, mx:'auto'}}> */}
             {/* <Paper sx={{ width:"90%", display:"flex", justifyContent:"center", alignItem:"center", mt:5, mx:'auto'}}> */}
                <Box>
                    <AppointmentDetail />
                </Box>
                {/* Mobile View */}
                
                {/* <Box width={"100%"} sx={{ borderTop: '0.1px solid #cdcdcd' }}> */}
                <Box width={"100%"} sx={matches?{ borderTop: '0.1px solid #cdcdcd' }:{ borderLeft: '0.1px solid #cdcdcd' }}>
                    <Box sx={{ p: 5 }}>
                        <Box sx={{display:"flex", justifyContent:"space-between", alignItem:"center"}}>
                        <FormView/>
                            {/* <Calender onDateSelect ={onDateSelect} setOnDateSelect={setOnDateSelect}/> */}
                            {/* Todo: If date selected then show the timer */}
                           {/* {onDateSelect &&                                                                      
                            <TimerView width="40%"/>
                           } */}
                        </Box>
                    </Box>
                </Box>
              
            </Paper>
          
        
          
</>
            
    )
}
