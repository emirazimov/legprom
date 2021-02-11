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

export default function Missia() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h4" gutterBottom>
        Миссия, видение, стратегия
      </Typography>
      <Typography className={classes.typo}  gutterBottom>
        <strong> Миссия:</strong>  Наша ассоциация «Легпром» создана для объединения предприятий текстильно-швейного сектора
            с целью защиты и продвижения их интересов и продукции  на внутреннем и международных рынках. Мы обеспечим вам поддержку
            в повышении конкурентоспособности  ваших предприятий и развитии отрасли в целом.
      </Typography >
      <Typography className={classes.typo}><strong >Видение:</strong></Typography>
      <Typography className={classes.typo} gutterBottom>
      Ассоциация Легпром —  крупная, профессиональная, эффективно действующая отраслевая ассоциация, 
      членами которой являются активные руководители текстильных и швейных компаний.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        <strong>Ценности:</strong> Сплоченность. Ответственность. Прозрачность.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        <strong>Целевая аудитория: </strong>Члены ассоциации Легпром (существующие и потенциальные члены ассоциации), (полные и ассоциированные), членские взносы.
      </Typography>
      <Typography className={classes.typo}><strong>Задачи:</strong></Typography>
      <Typography className={classes.typo}>1: Координация деятельности производителей легкой промышленности, направленная на продвижение их продукции на внутреннем и международных рынках</Typography>
      <Typography className={classes.typo}>2: Подготовка и реализация мероприятий, направленных на повышение качества выпускаемой продукции</Typography>
      <Typography className={classes.typo}>3: Представление интересов в государственных и иных органах, международных организациях</Typography>
      <Typography className={classes.typo}>4: Разработка общей стратегии развития отрасли и нормативной документации</Typography>
      
      
    </div>
  );
}