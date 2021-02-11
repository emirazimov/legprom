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
      width: '80%',
    },
  },
  typo: {
    textAlign: 'left',
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h4" gutterBottom>
        Экспорт
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        В 2016 году швейники Кыргызстана экспортировали текстильной продукции на 20% больше, чем в 2015 году. В 2016 году Кыргызстан экспортировал
        в Россию, Казахстан и Беларусь текстильной продукции на $94,5 млн (без учета экспорта тканей и обуви).
        В стоимостном выражении это составляет менее 23% общего объема экспорта КР во взаимной торговле со странами ЕАЭС 
      </Typography>
      <img className={classes.img} src="http://legprom.kg/wp-content/uploads/2018/01/pic5.jpg"/>
      <Typography className={classes.typo} variant="h4" gutterBottom>
      Условия для дальнейшего развития швейной промышленности КР
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
      <Typography className={classes.typo} gutterBottom>
      Подготовка кадров
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Доступные кредитные ресурсы
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Активная работа вновь открытого филиала в г. Ош
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Развитие отечественной базы производства ткани и пряжи 
      </Typography>
      
      
    </div>
  );
}