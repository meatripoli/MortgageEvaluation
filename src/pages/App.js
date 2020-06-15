import React from 'react';
import '../styles/App.css';
import MortgageForm from '../components/MortgageForm';
import PayoffForm from '../components/PayoffForm';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: '20px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>MORTGAGE EVALUATION APP</Paper>
          </Grid>
          <Grid item xs={6} >
            <Paper className={classes.paper}><MortgageForm/></Paper>
          </Grid>
          <Grid item xs={6} >
            <Paper className={classes.paper}><PayoffForm/></Paper>
          </Grid>
        </Grid>  
      </header>
    </div>
  );
}

export default App;
