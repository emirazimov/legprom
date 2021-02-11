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

export default function StateDodies() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h4" gutterBottom>
         Государственные органы
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        1. Министерство экономики КР
      </Typography>
      <Typography className={classes.typo} gutterBottom>
         2. Государственный комитет промышленности, энергетики и
        недропользования КР
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        3. Федерация профсоюзов Кыргызстана
      </Typography>
      <Typography className={classes.typo} gutterBottom>
         4. Профсоюз работников текстильной и легкой промышленности
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        5. Министерство труда и социального развития КР
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        6. Государственная налоговая служба при Правительстве КР
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        7. Социальный фонд КР
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        8. Государственная таможенная служба при Правительстве КР
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        9. Министерство образования и науки КР
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        10. Агентство начального и среднего профессионального обучения при Министерстве образования науки КР
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        11. Палата налоговых консультантов КР
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        12. Торгово-промышленная палата КР
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        13. Ассоциация поставщиков КР
      </Typography>
      <Typography className={classes.typo} gutterBottom>
            По инициативе Ассоциации «Легпром» пролоббировано постановление Правительства Кыргызской Республики от 22 декабря 2005 года № 615, 
            от 16 декабря 2006 года №844, 
            Закон Кыргызской Республики №86 от 16 мая 2006 года и постановление Правительства Кыргызской Республики от 3 марта 2009 года №145.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        Ассоциация «Легпром» совместно с Социальным фондом Кыргызской Республики и Министерством экономического регулирования инициированы и 
        подготовлены законопроект и проект постановления Правительства Кыргызской Республики «О тарифах страховых взносов по государственному 
        социальному страхованию», где предусмотрено поэтапное повышение отчислений для работников швейной отрасли до 2020 года.
      </Typography>
    </div>
  );
}