import React from 'react';
import '../styles/App.css';
import MortgageForm from '../components/MortgageForm';
import PayoffForm from '../components/PayoffForm';
import SavingsForm from '../components/SavingsForm';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin:{
    padding: '20px',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
      <Grid container className={classes.margin}>
          <Grid item xs={12} >
            <Paper className={classes.paper}>MORTGAGE EVALUATION APP</Paper>
          </Grid>
          <Grid item xs={4} >
            <Paper className={classes.paper}>
              <MortgageForm/>
              <PayoffForm/>
              <SavingsForm/>
            </Paper>
          </Grid>
          <Grid item xs={8} >
            <Paper className={classes.paper}>OUTPUT</Paper>
          </Grid>
        </Grid>  
      </header>
    </div>
  );
}

export default App;
