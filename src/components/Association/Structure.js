import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '200px',
    maxWidth: 1000,
    marginTop: '150px',
    justifyContent: 'flex-star',
    marginBottom: '155px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginLeft: '50px',
      marginLeft: '20px',
      marginTop: '10px',
      marginBottom: '15px',
    },
  },
  typo: {
    textAlign: 'left',
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  }
}));

const Structure = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h5">Структура</Typography><br/>
            <img className={classes.img} src="http://legprom.kg/wp-content/uploads/2018/01/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D0%AD%D0%AD%D0%90.png" />
        </div>
    );
}

export default Structure