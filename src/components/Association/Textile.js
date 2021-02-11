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
      marginTop: '40px',
      marginBottom: '5px',
    },
  },
  typo: {
    textAlign: 'left',
  },
  img: {
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      
    },
  }
}));
export default function Textile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h4" gutterBottom>
      Текстильная и швейная промышленность Кыргызской Республики
      </Typography>
      <Typography  className={classes.typo} variant="h4" gutterBottom>
        Удельный вес текстильно-швейной промышленности к ВВП
      </Typography>
      <img  className={classes.img} src="http://legprom.kg/wp-content/uploads/2018/01/pic11.jpg"/>
      <Typography  className={classes.typo} variant="h4" gutterBottom>
      Экономикообразующие отрасли промышленности (по итогам 8 месяцев 2010 года – 91,4%)
      </Typography>
      <img  className={classes.img} src="http://legprom.kg/wp-content/uploads/2018/01/pic2.jpg"/>
      <Typography variant="h4" gutterBottom>
        Результаты работы Ассоциации предприятий легкой промышленности:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Объединяет порядка 570 предприятий
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Легализация швейной промышленности
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Учебный центр «Швей профи»
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Ежегодная международная выставка-ярмарка «Индустрия моды» в КР
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Участие в международных выставках России, Казахстана, Узбекистана, Турции
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Сохранение патентной системы налогообложения и социальных отчислений, предусмотренных Законом КР №86 от 12.05.06 г. на ближайшие 5 лет
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Реализация протокола подписанного между РФ и КР об упрощении таможенных процедур в РФ
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Расширение производственных площадей
      </Typography>

      
      
    </div>
  );
}