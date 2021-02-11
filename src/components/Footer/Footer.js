import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { FaGooglePlusG } from "react-icons/fa";
import RssFeedIcon from '@material-ui/icons/RssFeed';

const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: '2rem',
        bottom: '0',
        lef: '0',
        width: '100%',
        backgroundColor: '#1f1f1f',
        height: '3rem',
        color: 'gray',
        display: 'flex',
    },
    container: {
        display: 'flex',
    },
    grid: {
        display: 'flex',
        marginLeft: '20px',
        color: 'gray', 
        justifyContent: 'center',
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft:'10px',
    }
  }));

export default function Footer() {
    const classes = useStyles();
    <i class="fab fa-google-plus-g"></i>
  return (
      <div className={classes.footer}>
           
            <Grid item xs={12} sm={6} md={12} className={classes.grid}>
                <Typography  >
                     Дизайн: <strong>Elegant Themes </strong>
                </Typography> |
                <Typography  >
                    Движок: <strong>React js</strong>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={12} className={classes.icon}>
                <FacebookIcon />
                <TwitterIcon/>
                <FaGooglePlusG fontSize={26}/>
                <RssFeedIcon/>
            </Grid>
        
      </div>
        
  );
}