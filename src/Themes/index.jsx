import React from 'react'
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const StyleSelectBox = makeStyles((theme )=> ({
  dropdownStyle: 
  {
    borderRadius: "40px !important",
    border: "0px solid rgba(0,0,0,0)",
    paddingLeft :14,
    height: 30,
    fontSize :"13px !important",
    width:"230px !important",
    "&:hover ": {
      backgroundColor: "rgba(0,0,0,.1)"
    },
  },
  
  arrowIconStyle: 
  {
    borderRadius: "50%",
    padding :"8px",
    borderColor: "grey.300",
    fontSize :"24px",
    color:"#2161ff",
    marginBottom:"50px",
    "&:hover ": {
      backgroundColor: "#e3f2fd"
    },
    
  },

  WatchLaterIconBox:
  {
    display: "flex",
    marginTop:'20px',
    justifyContent:"start",
    alignContent:"center",
    color:"#595959",
    fontStyle: "normal"
  },
}));

export {StyleSelectBox};