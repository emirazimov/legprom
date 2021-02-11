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

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h4" gutterBottom>
        Услуги 
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        Ассоциация предприятий легкой промышленности Кыргызской Республики «Легпром» предоставляет следующие услуги:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        1. Организация и проведение Международной выставки-ярмарки «Индустрия Моды. Изделия и оборудование». (Ежегодно в марте)
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        2. Организация и проведение осенней ярмарки-распродажи
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      3. Организация и проведение Конкурса дизайнеров одежды Кыргызстана «Fashion industry»
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      4. Организация различных семинаров с привлечением международных экспертов из Санкт-Петербурга (РФ), Мюнхена (Германия),
       Голландии на темы: (продажа, тенденции моды, продвижение бренда и т.д.)
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      5. Организация ярмарки вакансий с привлечением выпускников всех учебных заведений, готовящих кадры для текстильно-швейной отрасли
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      6. Организация торжественного мероприятия на день работников легкой промышленности КР (Представление к
       Государственным и ведомственным наградам заслуженных работников ТШО)
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      7. Обслуживание Сайта «Легпром»
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      8. Предоставление информации, касающейся ТШО (текстильно-швейной отрасли): законодательные, бизнес семинары, круглые столы и 
      т.д. путем рассылки по эл.почте на постоянной основе всем членам ассоциации. 
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      9. Правовая поддержка и оказание юридической помощи
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      10. Распространение знаний в области аудита и налогообложения
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      11. Расширение рынка сбыта на республиканском и международном уровне
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      12. Распространение опыта и улучшенных технологий производства
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      13. Обеспечение участия отечественных производителей в тендерах, проводимых как в Кыргызской Республике, так и в зарубежных странах.
      </Typography>
     
      
      
    </div>
  );
}