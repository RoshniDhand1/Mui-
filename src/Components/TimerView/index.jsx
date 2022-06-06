import * as React from 'react';
import {Box,Button,Grid} from '@mui/material';

const timer = [
    '09:00', '09:30',
    '10:00', '10:30',
    '11:00', '11:30',
    '12:00', '12:30',
    '13:00', '13:30',
    '14:00', '14:30',
    '15:00', '15:30',
    '16:00', '16:30',
]

export default function TimerView({width}) {
    return (
        <Box width={width}>
            <Box>Tuesday, May 31</Box><br/>
            <Box style={{
                overflow: "hidden",
                overflowY: "scroll",
                height: "460px"
            }}>
                <Grid container >
                    {
                        timer.map(t=>{
                            return (
                                <Grid xs={12} textAlign={"center"}>
                                    <Button variant="outlined" outlinedButton sx={{ px: 10, py: 1.5, my: 1 }}>
                                        {t}
                                    </Button>
                                </Grid >
                            )
                        })
                    }
                    
                </Grid>
            </Box>
        </Box>
    )
}

