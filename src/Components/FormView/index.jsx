import React, { useEffect, useState } from 'react';
import {
    Box, FormLabel, TextField,
    Grid, FormHelperText, TextareaAutosize,
    Button, Typography, FormControl,
    RadioGroup, FormControlLabel, Radio, Checkbox
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from "./us_flag.png";


const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
]

const discuss_items = [{ name: "TSP (Thrift Savings Plan)" },
{ name: "SSB (Surviving Spousal Benefit)" },
{ name: "FEGLI (Life Insurance)" },
{ name: "Social Security Estimate" },
{ name: "FERS Supplement" },
{ name: "Generate Tax-Free Income" },
{ name: "FERS/CSRS Pension" },
{ name: "input" }
];


const useStyles = makeStyles({
    button: {
        width: "9.6%",
        backgroundColor: '#3c52b2',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#1ca2ff !important',
            "&.active": {
                backgroundColor: 'black',
            },
        },
    },
    activeButton: {
        backgroundColor: "#1ca2ff !important"
    }
})

export default function FormView({ width, isMobile ,isTablet}) {
    const [user, setUser] = useState([]);
    const [select, setSelect] = useState();
    const [ageError, setAgeError] = useState(false);
    const [stateError, setStateError] = useState(false);
    const [value, setValue] = React.useState("");

    useEffect(() => {
        setUser(discuss_items);
    }, []);

    const classes = useStyles();

    const handleRadioChange = (e) => {
        setValue(e.target.value);
        setAgeError('');

    }

    const handleChange = (e) => {
        const { name, checked } = e.target;
        let tempUser = user.map((user) => user.name === name ? { ...user, isChecked: checked } : user);
        setUser(tempUser);
    }

    const handleState = (e) => {
        console.log("e::", e.target.value)
        setSelect(e.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (value === '21 to 44') {
            setAgeError('')
        } else if (value === '45 to 58') {
            setAgeError('')
        } else if (value === '59+') {
            setAgeError('')

        } else {
            setAgeError('Please select an option.');
        }

        if (!select) {
            setStateError("Please Select Atleast One State")
        }

    }
    return (
        <Box>
            <Typography fontWeight="bold" sx={{ color: '#595959', fontSize: '18px' }}>
                Enter Details
            </Typography>
            <Grid container spacing={4} sx={{ py: 4 }}>
                <Grid item xs={12} md={6}>
                    <TextField
                        label='Name*' fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label='Email*' fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Phone Number*"
                        InputProps={{
                            startAdornment: (
                                <img src={logo} alt="" width="25px"></img>
                            ),
                        }}
                    />
                </Grid>


                <Grid item>
                    <FormControl>
                        <FormLabel style={{ fontWeight: 'bold', color: 'black' }}>Age Range*</FormLabel>
                        <RadioGroup
                            row
                            onChange={handleRadioChange}
                            helperText={ageError}
                            error={ageError}
                            style={{ flexWrap: 'nowrap' }}

                        >

                            <FormControlLabel value="21 to 44" control={<Radio />} label="21 to 44" />
                            <FormControlLabel value="45 to 58" control={<Radio />} label="45 to 58" />
                            <FormControlLabel value="59+" control={<Radio />} label="59+" />
                        </RadioGroup>
                        <FormHelperText error={true}>{ageError}</FormHelperText>
                    </FormControl>
                </Grid>



            </Grid>
            <Grid container spacing={12}>
                <Grid item xs={24} md={12}>
                    <FormLabel style={{ fontWeight: 'bold', color: 'black' }}>State *
                        {select ? "" : <FormHelperText error={true}>{stateError}</FormHelperText>}

                    </FormLabel>
                    <Grid container
                        direction="row"
                        spacing={1}
                    >
                        {
                            states.map(state => {
                                return (
                                    <Grid item>

                                        <Button variant="outlined"
                                            style={{ display: 'flex', direction: 'row' }}
                                            className={select === state ? classes.activeButton : classes.button}
                                            value={state}
                                            outlinedButton onClick={handleState}>
                                            {state}
                                        </Button>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ py: 4 }}>
                <Grid item xs={24} md={12}>
                    <FormLabel style={{ fontWeight: 'bold', color: 'black' }}> Please check off any of the following item(s) you'd like to discuss:</FormLabel>
                    <Grid container>
                        {
                            user.map((item) => (
                                <Grid item  xs={isMobile|| isTablet?'':6}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={item?.isChecked || false}
                                                onChange={handleChange}
                                                name={item.name}
                                                color="primary"
                                            />
                                        }
                                        label={item.name === "input" ? "" : item.name}

                                    />
                                    {item.name === "input" ?
                                        <TextField
                                            disabled={item?.isChecked ? false : true}
                                    
                                        >

                                        </TextField>
                                        :
                                        ""}
                                </Grid>
                            ))
                        }

                    </Grid>
                </Grid>

                <Grid item xs={12} >
                    <FormLabel style={{ fontWeight: 'bold', color: 'black' }}>Please share anything that will help prepare for our meeting:</FormLabel>
                    <TextareaAutosize
                        aria-label="minimum height"
                        placeholder=""
                        style={{ width: '100%', height: '101px' }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button variant="contained" onClick={handleSubmit}>Schedule Event</Button>
                </Grid>
            </Grid>

        </Box>

    )
}



