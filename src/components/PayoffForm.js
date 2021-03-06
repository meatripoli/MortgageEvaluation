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

export default function(props) {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return(
        <form className={classes.root} autoComplete="off">
            <h3>Payoff Information</h3>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid container className={classes.grid} justify="center">
                    <TextField 
                        required 
                        id="standard-extra" 
                        helperText="Extra Payment"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                    <TextField 
                        required 
                        id="standard-frequency" 
                        helperText="Frequency"
                    />
                    <KeyboardDatePicker
                        helperText="Start Date"
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
    )
}