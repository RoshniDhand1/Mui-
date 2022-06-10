import React, { useState, useEffect } from 'react'
import { Paper, Box } from '@mui/material'
import Calender from '../Components/Calender';
import { StyleSelectBox } from '../Themes';
import AppointmentDetail from '../Components/AppointmentDetail';
import TimerView from '../Components/TimerView';
import FormView from '../Components/FormView';
import SelectTimeZone from '../Components/SelectTimeZone';

export default function Containers() {
    const hasWindow = typeof window !== 'undefined';
    const [isDesktop, setIsDesktop] = useState(getWindowDimensions().width > 1100);
    const [isTablet, setIsTablet] = useState(getWindowDimensions().width >= 600 && getWindowDimensions().width <= 1100);
    const [isMobile, setIsMobile] = useState(getWindowDimensions().width < 600);

    console.log("screen:: D-", isDesktop, " M-", isMobile, " T-", isTablet);

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setIsDesktop(getWindowDimensions().width > 1100);
                setIsTablet(getWindowDimensions().width >= 600 && getWindowDimensions().width <= 1100);
                setIsMobile(getWindowDimensions().width < 600);
            }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    //TODO: state for is date selected
    const [onDateSelect, setOnDateSelect] = useState(null);
    const classes = StyleSelectBox();
    return (
        // desktop view when no TimerView 
        <>
            <Paper sx={
                isDesktop ?
                    {
                        width: onDateSelect == null ? "50%" : "65%",
                        display: "flex", justifyContent: "space-between", alignItem: "center",
                        my: 5, mx: 'auto',
                        border: '1px solid #d3d3d3',
                    }
                    : { width: "90%", alignItem: "center", mt: 5, mx: 'auto' }
            }>

                <Box>
                    <AppointmentDetail />
                </Box>
                {/* Mobile View */}

                {/* <Box width={"100%"} sx={{ borderTop: '0.1px solid #cdcdcd' }}> */}
                <Box width={ isDesktop ?  "65%" :"100%"} sx={ isDesktop ? { borderLeft: '0.1px solid #cdcdcd' } : { borderTop: '0.1px solid #cdcdcd' } }>
                    <Box sx={{ p: 5 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItem: "center" }}>
                            {/* <FormView /> */}
                            
                             {/* {(isDesktop || isTablet || (isMobile && onDateSelect == null)) && <Box>
                                        <Calender 
                                           onDateSelect ={onDateSelect} 
                                           setOnDateSelect={setOnDateSelect}
                                            isMobile ={isMobile}
                                            
                                        />
                                        
                                    </Box>}
                                    {onDateSelect && 
                                    <Box>
                                    <SelectTimeZone 
                                        isMobile ={isMobile}
                                    />
                                    <TimerView 
                                       width={ (!isMobile && onDateSelect !== null) ? "40%" : "90%"} 
                                        isMobile={isMobile} />
                                    </Box>} */}
                                    <FormView
                                    isMobile ={isMobile}
                                    isTablet={isTablet}
                                    />
                        </Box>
                    </Box>
                </Box>

            </Paper>



        </>

    )
}
