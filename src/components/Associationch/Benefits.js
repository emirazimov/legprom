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

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h4" gutterBottom>
        Преимущества членства 
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        Члены ассоциации имеют право получать необходимую информацию о деятельности ассоциации и принимать участие в программных мероприятиях, 
        осуществляемых ассоциацией. Члены ассоциации могут пользоваться услугами ассоциации «Легпром»:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        1. Принимать участие на Международной выставке-ярмарке «Индустрия Моды. Изделия и оборудование».
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      2. Принимать участие на осенней ярмарке-распродаже
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      3. Принимать участие на различных семинарах с привлечением местных и международных экспертов из РФ, Германии, Голландии
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      4. Принимать участие на ярмарке вакансий для проведения очного собеседования с выпускников всех учебных заведений, готовящих кадры для текстильно-швейной отрасли
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      5. Принимать участие на торжественном мероприятии на день работников легкой промышленности КР с возможностью 
      представить к Государственным и ведомственным наградам заслуженных работников своих компаний.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      6. Размещать информацию о своей компании и выпускаемой продукции на сайте ассоциации «Легпром» для оптовых заказчиков из стран ближнего и дальнего зарубежья
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      7. Получать информации, касающейся текстильно-швейной отрасли: законодательные, 
      бизнес семинары, круглые столы и т.д. по электронной почте на постоянной основе.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Также членство в ассоциации дает следующие возможности:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      1) Повышение бизнес-репутации и конкурентных преимуществ
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      2) Участие в выработке и принятии решений, затрагивающих легкую промышленность страны
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      3) Участие в лоббировании и защите интересов легкой промышленности страны
      </Typography>
    </div>
  );
}