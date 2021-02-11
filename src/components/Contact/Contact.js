import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 1000,
    marginTop: '150px',
    justifyContent: 'flex-star',
    marginBottom: '100px',
  },
  typo: {
    textAlign: 'left',
  },
});

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Контакты 
      </Typography>
      <Typography variant="h6" gutterBottom>
         Кыргызская республика, г. Бишкек 
      </Typography>
      <Typography variant="h6" gutterBottom>
         7 микрорайон, дом 53/1 Цокольный этаж.
      </Typography>
      <Typography variant="h6" gutterBottom>
         E-mail: info@legprom.kg
      </Typography>
      <Typography variant="h6" gutterBottom>
        Номер телефона: +996 700 54 92 29 / +996 777 54 92 29
      </Typography>
      
      
    </div>
  );
}