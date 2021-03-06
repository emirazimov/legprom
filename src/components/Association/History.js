import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '30px',
    marginLeft: '200px',
    marginTop: '150px',
    justifyContent: 'flex-star',
    marginBottom: '155px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginLeft: '30px',
      width: '80%',
      marginTop: '50px',
      
    marginBottom: '5px',
    },
  },
  typo: {
    textAlign: 'left',
  },
}));

export default function History() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h4" gutterBottom>
        История
      </Typography>
      <Typography className={classes.typo}  gutterBottom>
        Ассоциация предприятий легкой промышленности Кыргызской Республики «Легпром» создана в 2005 году. Это самое крупное и наиболее эффективно действующее   
        объединение предприятий и индивидуальных предпринимателей в нашей республике.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        За этот короткий промежуток времени Ассоциацией «Легпром» проделана огромная работа по развитию легкой промышленности, в частности, 
        введение патентной системы налогообложения, что привело к легализации, росту и увеличению экспортного потенциала легкой промышленности 
        Кыргызской Республики. По инициативе Ассоциации «Легпром» пролоббировано постановление Правительства Кыргызской Республики от 22 декабря
        2005 года № 615, от 16 декабря 2006 года №844, Закон Кыргызской Республики №86 от 16 мая 2006 года и постановление 
        Правительства Кыргызской Республики от 3 марта 2009 года №145.
      </Typography>
      <Typography className={classes.typo}  gutterBottom>
            На сегодняшний день в рядах ассоциации состоят 764 компаний по всей республике (619 по г.Бишкек и Чуйской области, 108 по 
            Ошской области, 35 членов в Джалал- Абадской области и 2 в Иссык-Кульской обл.). Предметом деятельности Ассоциации является 
            координация деятельности производителей товаров легкой промышленности, направленная на продвижение их продукции на внутреннем и 
            на международном рынках, подготовка и реализация мероприятий, направленных на повышение качества выпускаемой продукции, 
            представление интересов в государственных и иных органах власти, международных организациях, разработка общей стратегии развития 
            отрасли, разработка нормативной документации. Так, с самого создания ассоциация содействует развитию диалога и совершенствованию 
            сотрудничества между членами ассоциации, объединению и координации их усилий в деле развития производственного потенциала 
            Кыргызской Республики.
      </Typography>
      <Typography className={classes.typo}  gutterBottom>
            С 2006 года ежегодно ассоциацией «Легпром» организовываются международные выставки-ярмарки «Индустрия моды: изделия и оборудование»,
             которые стали традиционными и способствуют установлению контактов с зарубежными и местными покупателями и поддерживают имидж  
             страны на международном уровне. Основными покупателями изделий легкой промышленности Кыргызстана являются Россия и Казахстан.

      </Typography>
      <Typography className={classes.typo}  gutterBottom>
            В 2010 году на обращение предпринимателей южного региона Кыргызстана образован южный филиал Ассоциации «Легпром» в г. 
            Ош. Ассоциация «ЮжЛегпром» тесно сотрудничает с международными организациями такими как: Германское общество по международному 
            сотрудничеству (ГТЦ), Международный торговый центр (МТЦ). В рамках сотрудничества постоянно проводятся тренинги и семинары для
             предпринимателей по улучшению качества работы и изделий.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
            С 2010го года ежегодно Ассоциация «Легпром» проводит ярмарку вакансий, где принимают участие представители и руководители более 
            30 швейных и трикотажных компаний, которые получают отличную возможность встретиться с выпускниками учебных заведений и подобрать 
            для себя необходимые рабочие кадры. На ярмарку  вакансий приглашаются выпускники 5 ВУЗов, 5 колледжей и 4 профессиональных лицеев, 
            готовящих специалистов для швейной отрасли.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
            Ассоциация «Легпром» активно и плодотворно сотрудничает на благо развития отрасли с Международными организациями, 
            которые оказывают неоценимую поддержку на всех этапах развития. Совместно с международными экспертами разработаны Стратегии 
            развития экспорта, которая  является одной из приоритетных задач Национальной стратегии устойчивого развития 
            Кыргызской Республики на период 2013-2017 годы. Цель стратегии – повысить конкурентоспособность приоритетных секторов страны, 
            в том числе текстильно-швейной промышленности.
      </Typography>
      <Typography  className={classes.typo} gutterBottom>
            19 июня 2013 года ассоциация «Легпром» подписала Меморандум о сотрудничестве с Корейской федерацией текстильной промышленности 
            KOFOTY, в лице директора г-на Hee-chan RO, после которого активизировалось сотрудничество Корейских текстильных компаний с 
            отечественными производителями.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
            5 марта 2014 года подписан Меморандум о взаимодействии с ОАО «РОСЛЕГПРОМ» в лице президента Круглика А.А., Россия,
             о сотрудничестве в организации и проведении выставочных мероприятий.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        28 октября подписано соглашение о создании «Союза дизайна и моды Центральной Азии» с Ассоциацией предприятий легкой промышленности 
        Республики Казакстан» в лице президента Худовой Л.Н.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        11 ноября подписан меморандум о сотрудничестве с Китайской текстильной федерацией.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      1 декабря 2014 года подписан меморандум о сотрудничестве с Белорусской ассоциацией легкой промышленности «Беллегпром»,
       в лице председателя концерна  Ефимчик Н.В.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      Разработан и отправлен на согласование проект меморандума о сотрудничестве между Индийской текстильной федерацией и Ассоциацией
       «Легпром». Достигнута договоренность с Институтом дизайна Дели об обмене кадрами и студентами в сфере швейной промышленности.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      В 2015 году подписан Меморандум о сотрудничестве с ГП   «Центр единого окна» при МЭ КР.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      В 2015 году подписан Меморандум о сотрудничестве с Союзом работодателей легкой промышленности Армении
      </Typography>
      <Typography className={classes.typo} gutterBottom>
         В 2017 году подписан Меморандум о сотрудничестве с Корейским испытательным и исследовательским институтом одежды KATRI
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        В 2017 году подписан Меморандум о сотрудничестве с АО «Узбекенгилсаноат» Республики Узбекистан.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        <strong>На сегодняшний день Текстильно-швейная отрасль Кыргызстана стала одной из пяти экономико-образующих 
            отраслей страны и занимает третье место по экспорту продукции КР.</strong>
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        <strong> В 2017 году ассоциации «Легпром»  были вручены Президентом КР  орден «Данк» и Почетная грамота Правительства  
             за значительный вклад в развитие Текстильно-швейной отрасли КР.
      </strong>
      </Typography>
    </div>
  );
}