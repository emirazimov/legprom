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
    },
  },
  typo: {
    textAlign: 'left',
  },
}));

export default function Association() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h4" gutterBottom>
        Как стать членом Ассоциации
      </Typography>
      <Typography className={classes.typo} gutterBottom>
         Членами Ассоциации могут быть юридические и физические лица, в том числе и иностранные, объединившиеся для реализации задач и целей
          ассоциации, внесшие членские вступительные взносы и принятые в состав Ассоциации в порядке, установленным уставом. Для вступления в 
          ассоциацию необходимо предоставить заявление, анкету и другие документы, определяемые правлением ассоциации и оплатить первый 
          вступительный членский взнос. Размер взноса устанавливается Конференцией ассоциации. Каждый член ассоциации платит членский взнос 
          в одинаковом порядке. 
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        Для вступления в Ассоциацию необходимо:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        1
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      <strong> Заполнить </strong> заявление о вступлении (форма 1), подписанное руководителем предприятия и скреплённое печатью.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
       2
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        <strong> Произвести</strong> оплату вступительных и членских взносов. Вступительный взнос 2000 сом, ежемесячный  взнос для полных членов ассоциации
          — 2000 сом, для ассоциированных членов — 500 сом. Оплата может быть произведена наличными в момент заполнения вступительных 
          документов или перечислена на расчетный счет Ассоциации, указанный ниже. Каждые последующие 12 месяцев пребывания в Ассоциации 
          предприятие оплачивает ежегодный членский взнос.
      </Typography>
      
      <Typography className={classes.typo} gutterBottom>
        Номер телефона: +996 700 54 92 29 / +996 777 54 92 29
      </Typography>
      
      
    </div>
  );
}