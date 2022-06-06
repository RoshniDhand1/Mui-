import React from 'react'
import {Select, MenuItem, Box, SvgIcon,Chip} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import { StyleSelectBox } from '../../Themes';

const timzones =[
    'Estern Timezone (ET)',
    'Pacific Timezone (ET)',
    'Central Timezone (ET)',
    'Mountain Timezone (ET)'
]

const selectContainer = { 
    display: "flex", 
    gap: 1, 
    justifyContent: 'start', 
    alignItems:'center' ,
   
}

const SelectTimeZone = (props) => {
    const classes = StyleSelectBox(props);
    
    return (
        <Select
            fullWidth
            variant="standard"
            disableUnderline
            className={classes.dropdownStyle}
            defaultValue="Estern Timezone (ET)"
            renderValue={(value) => {
                return (
                    <Box sx={selectContainer}>
                        <SvgIcon fontSize='15px' >
                            <PublicIcon/>
                        </SvgIcon>
                        {value}
                    </Box>
                );
            }}
            MenuProps={{
                PaperProps: {
                  sx: {
                    
                    '& .MuiMenuItem-root': {
                      fontSize: 10,
                    },
                  },
                },
              }}
            
        >
            {
                timzones.map((tz,index)=>(
                    <MenuItem key={index} value={tz}>{tz}</MenuItem>
                ))
            }
        </Select>
    )
}

export default SelectTimeZone;