import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '150px',
    justifyContent: 'flex-star',
    marginBottom: '100px',
  },
  typo: {
      color: 'blue',
      cursor: 'pointer',
  },
  typo1: {
      color: 'Crimson',
  },
  button:{
      marginBottom: '50px',
  }
});

export default function List() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <ButtonGroup  className={classes.button}  size="small" aria-label="small outlined button group">
            <Button xs={6}>Все</Button>
            <Button xs={6}>Детская одежда</Button>
            <Button xs={6}>Женская одежда</Button>
            <Button xs={6}>Мужская одежда</Button>
        </ButtonGroup>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.typo} variant="h5" gutterBottom>
            Ручное ткачество Гульмиры Акматовой
          </Typography>
          <Typography className={classes.typo1}  gutterBottom>
             Женская одежда
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography className={classes.typo} variant="h5" gutterBottom>
                Inesse
            </Typography>
            <Typography className={classes.typo1}  gutterBottom>
                 Женская одежда
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography className={classes.typo} variant="h5" gutterBottom>
                ШП “LIKO”
            </Typography>
            <Typography className={classes.typo1}  gutterBottom>
                Детская одежда
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography className={classes.typo} variant="h5" gutterBottom>
                ЧП ПОХИЛЬЧУК
            </Typography>
            <Typography className={classes.typo1}  gutterBottom>
                Женская одежда, Подрастковая одежда
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography className={classes.typo} variant="h5" gutterBottom>
                ШП “Laruss Moda”
            </Typography>
            <Typography className={classes.typo1}  gutterBottom>
                Женская одежда, Подрастковая одежда
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography className={classes.typo} variant="h5" gutterBottom>
                Швейная компания «Бермет»
            </Typography>
            <Typography className={classes.typo1}  gutterBottom>
                Женская одежда
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography className={classes.typo} variant="h5" gutterBottom>
                ШП Гука Жали
            </Typography>
            <Typography className={classes.typo1}  gutterBottom>
             Женская одежда
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography className={classes.typo} variant="h5" gutterBottom>
                Бейшенова ИП
            </Typography>
            <Typography className={classes.typo1}  gutterBottom>
                 Женская одежда
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography className={classes.typo} variant="h5" gutterBottom>
                CREDO Швейное предприятие
            </Typography>
            <Typography className={classes.typo1}  gutterBottom>
             Женская одежда
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography className={classes.typo} variant="h5" gutterBottom>
                Е-Лайн Мода Швейная компания
            </Typography>
            <Typography className={classes.typo1}  gutterBottom>
                 Женская одежда
            </Typography>
        </Grid>
        </Grid>
      
      
      
    </div>
  );
}