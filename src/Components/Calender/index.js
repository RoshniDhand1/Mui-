import React, { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import SelectTimeZone from '../SelectTimeZone';
import { Box, Typography } from '@mui/material';

export default function Calender({onDateSelect,setOnDateSelect}) {
  const [date, setDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setOnDateSelect(date)
  };


  const disableWeekends = (date) => {
    return date.getDay() === 0 || date.getDay() === 6;
  }



  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" sx={{ fontStyle: 'normal' }}>
          Select a Date & Time
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker
          className='main_calender'
          date={onDateSelect}
          onChange={handleDateChange}
          disablePast
          shouldDisableDate={disableWeekends}
          views={['day']}

        />
      </LocalizationProvider>
      <SelectTimeZone />
    </Box>
  );
}
