import React from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { blue } from '@mui/material/colors';
import { StyleSelectBox } from '../../Themes';
import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'

export default function AppointmentDetail() {
  const classes = StyleSelectBox();
  return (
    <div>
      <Box sx={{ p: 5 }}>
        {
          false && <a href='#'>
          <ArrowBackIcon className={classes.arrowIconStyle} sx={{ border: 1, borderColor: 'grey.300' }} />
          </a>
        }

        <Typography fontWeight="bold" sx={{ color: '#595959', fontStyle: 'normal' }}>
          Benefit Specialists
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{ fontStyle: 'normal' }}>
          Federal Employee Complimentary Phone Meeting
        </Typography>

        <Box className={classes.WatchLaterIconBox}>
          <WatchLaterIcon />
          <Typography fontWeight="bold">
            &nbsp;30 min
          </Typography>
        </Box>
      </Box>
    </div>
  )
}
