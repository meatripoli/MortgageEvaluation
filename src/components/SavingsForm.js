import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

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

    return(
        <form className={classes.root} autoComplete="off">
            <h3>Saving Information</h3>
            <Grid container className={classes.grid}>
                <TextField 
                    id="standard-savings" 
                    helperText="Savings Interest Rate"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">%</InputAdornment>,
                    }}
                />
            </Grid>
        </form>
    )
}