//current monthly payments display

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 250,
    },
    media: {
      height: 140,
    },
});

export default function(props){
    const classes = useStyles();
    return(
    <Card className={classes.root}>
        <CardActionArea>
            <Typography gutterBottom variant="h5" component="h2">
                Monthly payments <span> $1,674.26</span>
            </Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Principal <span> $1,674.26</span> 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Interest <span> $1,674.26</span> 
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>)
}