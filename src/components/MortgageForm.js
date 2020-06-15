import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
      
    <form className={classes.root} autoComplete="off">
        <h3>Original Loan Information</h3>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid container className={classes.grid} justify="center">
                <TextField 
                    required 
                    id="standard-required" 
                    helperText="Original Loan Amount"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
                <TextField 
                    required 
                    id="standard-required" 
                    helperText="Original Loan Length"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">years</InputAdornment>,
                    }}
                />
                <TextField 
                    required 
                    id="standard-required" 
                    helperText="Original Interest Rate"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">%</InputAdornment>,
                    }}
                />
                <KeyboardDatePicker
                    helperText="Date First Payment"
                    format={"MM-DD-YYYY"}
                    // handle clearing outside => pass plain array if you are not controlling value outside
                    mask={value =>
                        value
                        ? [/\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]
                        : []
                    }
                    value={selectedDate}
                    onChange={handleDateChange}
                    animateYearScrolling={false}
                    autoOk={true}
                    clearable
                />
            </Grid>
        </MuiPickersUtilsProvider>
    </form>
  );
}