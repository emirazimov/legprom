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

export default function Organization() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h4" gutterBottom>
      Международные организации
      </Typography>
      <Typography className={classes.typo} gutterBottom>
         <strong>Международные организации</strong> 
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      1. Корейская федерация текстильной промышленности KOFOTY
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      2. ОАО «РОСЛЕГПРОМ»
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      3. Ассоциацией предприятий легкой промышленности Республики Казакстан
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      4. Китайская текстильная федерация
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      5. Белорусская ассоциация легкой промышленности «Беллегпром»
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      6. Союз работодателей легкой промышленности Армении
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      7. Корейский испытательный и исследовательский институт одежды KATRI
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      8. АО «Узбекенгилсаноат» Республики Узбекистан.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      9. ГП «Центр единого окна» при МЭ КР.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        Ассоциация «Легпром» тесно сотрудничает с международными организациями такими как: Германское общество по международному сотрудничеству 
        (ГТЦ), Международный торговый центр (МТЦ). В рамках сотрудничества постоянно проводятся тренинги и семинары для предпринимателей по
         улучшению качества работы и изделий.Ежегодно «Легпромом» организовываются международные выставки-ярмарки «Индустрия моды: изделия и 
         оборудование 2006-2011гг.», которые стали традиционными и способствуют установлению контактов с зарубежными и местными покупателями и
          поддерживают имидж страны на международном уровне. Основными покупателями изделий легкой промышленности Кыргызстана являются Россия и
           Казахстан в связи с чем «Легпром» имеет представительства в 17 городах России и Казахстана. В 2010 году на обращение предпринимателей
            южного региона Кыргызстана образован южный филиал Ассоциации «Легпром» в г. Ош.
      </Typography>

      
      
    </div>
  );
}