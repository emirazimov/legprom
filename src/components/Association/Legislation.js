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
}));

export default function Legislation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h4" gutterBottom>
        Законодательство 
      </Typography>
      <Typography className={classes.typo}  gutterBottom>
        Ассоциация «Легпром» совместно с Социальным фондом Кыргызской Республики и Министерством экономического регулирования инициированы и
        подготовлены законопроект и проект постановления Правительства Кыргызской Республики «О тарифах страховых взносов по государственному 
        социальному страхованию», где предусмотрено поэтапное повышение отчислений для работников швейной отрасли до 2020 года. 
      </Typography>
      <Typography className={classes.typo} gutterBottom>
         В настоящее время законопроект находится на рассмотрении профильных комитетов Жогорку Кенеша Кыргызской Республики.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
         После принятия данного Закона и постановления Правительства Кыргызской Республики для работников отрасли создадутся стабильные условия отчисления страховых взносов до 2020 года.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Закон Кыргызской Республики О тарифах страховых взносов по государственному социальному страхованию
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        (с изменениями и дополнениями по состоянию на 08.07.2011 г.)См. постановление Правления Социального Фонда КР от 4 июня 2008 года № 73А «Об утверждении Инструкции «О порядке регистрации 
        плательщиков, уплаты и учета страховых взносов по обязательному государственному социальному страхованию»
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Принят Законодательным собранием Жогорку Кенеша Кыргызской Республики 16 декабря 2003 года
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        Статья 1. Плательщики страховых взносов по государственному социальному страхованию
      </Typography>
      <Typography className={classes.typo} gutterBottom>
         Плательщиками страховых взносов по государственному социальному страхованию являются:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        а) юридические лица независимо от организационно-правовых форм и форм собственности, их обособленные подразделения (филиалы и представительства);
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        б) крестьянские (фермерские) хозяйства;
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        в) физические лица.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
             В статью 2 внесены изменения в соответствии с Законом РК от 13.02.05 г. № 29 (вступил в силу с 1 января 2005 года) (см. стар. ред.); 
             Законом РК от 30.06.05 г. № 87 (вступил в силу с 1 июля 2005 года) (см. стар. ред.); Законом РК от 24.02.06 г. № 63 
             (вступил в силу с 1 января 2006 года) (см. стар. ред.); Законом РК от 08.08.06 г. № 162 (см. стар. ред.); 
             Законом РК от 10.08.07 г. № 144 (вступил в силу с 1 октября 2007 года) (см. стар. ред.); Законом КР от 20.07.09 № 238 
             (см. сроки введения в действие) (см. стар. ред.)
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Статья 2. Ставки тарифов страховых взносов для юридических лиц независимо от организационно-правовых форм и форм собственности,
       их обособленных подразделений (филиалов и представительств), а также работающих в них физических лиц
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        Тарифы страховых взносов устанавливаются:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      1. Для работодателей
      </Typography>
      <Typography className={classes.typo} gutterBottom>
            а) ежемесячно от всех видов выплат, начисленных в пользу нанятых работников, принятых на постоянуую или временную работу, 
            независимо от вида собственности работодателя и вида регистрации в органах налоговой службы Кыргызской Республики, в том числе 
            иностранных граждан и лиц без гражданства, постоянно проживающих в Кыргызской Республике, — в размере 17,25 процента.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Распределение сумм страховых взносов по фондам производится в следующих размерах:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      в Пенсионный фонд — 15 процентов;
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      в Фонд обязательного медицинского страхования — 2 процента;
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      в Фонд оздоровления трудящихся — 0,25 процента;
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      б) ежемесячно от всех видов выплат, начисленных в пользу работников — инвалидов I и II групп, — в размере 15,25 процента.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Распределение сумм страховых взносов по фондам производится в следующих размерах:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      в Пенсионный фонд — 15 процентов;
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      в Фонд оздоровления трудящихся — 0,25 процента;
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        в) ежемесячно от всех видов выплат, начисленных в пользу работников — иностранных граждан и лиц без гражданства, временно пребывающих
        в Кыргызской Республике или проживающих в другом государстве, но состоящих в трудовых отношениях с юридическим лицом, зарегистрированным 
        в Кыргызской Республике:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      в Пенсионный фонд — в солидарную часть — 3 процента.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        г) от всех видов выплат, начисленных в пользу работников посольств, консульств и других загранучреждений Министерства иностранных дел
        Кыргызской Республики, — в размере 15,25 процента. Уплата страховых взносов за работников загранучреждений Министерства иностранных дел
        Кыргызской Республики осуществляется в порядке, устанавливаемом Правительством Кыргызской Республики.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        Распределение сумм страховых взносов по фондам производится в следующих размерах:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        в Пенсионный фонд — 15 процентов;
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        в Фонд оздоровления трудящихся — 0,25 процента.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        2. Для работников:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      а) нанятых на постоянную или временную работу, независимо от вида собственности работодателя и вида регистрации в органах налоговой 
      службы Кыргызской Республики, работников, в том числе иностранных граждан и лиц без гражданства, постоянно проживающих в 
      Кыргызской Республике, — ежемесячно от всех видов выплат, начисленных в их пользу, независимо от источников финансирования, 
      — в размере 10 процентов.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Распределение сумм страховых взносов по фондам производится в следующих размерах:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      в Пенсионный фонд — 8 процентов;
      <Typography className={classes.typo} gutterBottom>
      в Государственный накопительный пенсионный фонд — 2 процента;
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      б) работников — инвалидов I и II групп (кроме инвалидов Великой Отечественной войны и приравненных к ним лиц) — ежемесячно от всех видов
       выплат, начисленных в их пользу, независимо от источников финансирования, — в размере 4 процентов;
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        Распределение сумм страховых взносов по фондам производится в следующих размерах:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        в Пенсионный фонд — 2 процента;
      </Typography>
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      в Государственный накопительный пенсионный фонд — 2 процент
      </Typography>
      
      
    </div>
  );
}