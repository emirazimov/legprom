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

export default function Contests() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h3" gutterBottom>
        Конкурсы
      </Typography>
      <Typography className={classes.typo} gutterBottom>
         <strong>Конкурс дизайнеров одежды Кыргызстана «Fashion industry»</strong>
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        Конкурс дизайнеров одежды Кыргызстана «Fashion industry » с 2008 года ежегодно проводится ассоциацией «Легпром» в рамках
         Международной выставки- ярмарки «Индустрия Моды: Изделия и оборудование». С каждым годом конкурс приобретает большой интерес среди 
         дизайнеров творческих мастерских, отечественных швейных компаний, студентов и выпускников ВУЗов, выпускающих специалистов в области 
         индустрии моды. Так, в 2011 году в конкурсе приняли участие 39 человек и представили 26 коллекций, в 2012 году к участию в конкурсе 
         были отобраны 48 лучших коллекций 60 участников, а в 2018 году из 83 коллекций было отобрано 58 коллекций.
        Данный проект с каждым годом не на словах, а на деле доказывает свою профессиональную состоятельность. Развитие Индустрии Моды наряду
         с развитием швейной отрасли в Кыргызстане приобретает устойчивый характер, и благодаря поддержке ассоциации «Легпром», ежегодно среди 
         участников конкурса «Fashion industry » выявляются все больше молодых талантов, демонстрирующих на подиуме свои яркие и неожиданные 
         дизайнерские идеи.
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        • поддержка талантливых художников-модельеров, дизайнеров одежды, ярких творческих коллективов, дизайнерских групп;
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        • продвижение торговых марок и творчества индивидуальных дизайнеров,
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        • ознакомление широкой общественности, специалистов, прессы c современными достижениями отечественных дизайнеров
        одежды для установления и укрепления взаимовыгодных контактов,
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        • предоставление возможности молодым студентам, дизайнерам одежды заявить о себе, наладить деловые контакты с потенциальными работодателями.
        Организаторами конкурса было принято решение проводить конкурс в двух категориях: 1 категория – профессиональный дизайнер, 
        2 категория — молодой дизайнер, по следующим номинациям: «Юнная мода», «Этномода», «Мегаполис», «Авангард» и «Эксклюзив».
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        Жюри конкурса оценивает коллекции участников по следующим критериям:
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      • художественная выразительность (целостность образа и аксессуаров, сила эмоционального воздействия, индивидуальность созданного образа и нестандартность);
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      • соответствие теме (оригинальность названия, новизна идеи, исходя из поставленных концептуальных условий выбранной номинации, соответствие заявленному образу);
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      • качество и мастерство исполнения (подбор тканей и материалов; новизна конструктивного решения и технологической сборки)
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      • стилевое решение (стилевая общность, новизна цветовых сочетаний и пластических решений костюма, аксессуаров и дополнений, макияж, прическа, музыкальное сопровождение)
      </Typography>
      <Typography className={classes.typo} gutterBottom>
       Ежегодно в жюри конкурса приглашаются международные эксперты в области индустрии моды и известные дизайнеры. Так в 2011 году коллекции
        конкурсантов оценивали: Тинеке Буерма — международный эксперт в индустрии моды (Голландия); Татьяна Ален- арт дизайнер (Москва); 
        Райса Раимбекова — Арт директор «Театра Моды Райсы» (Казахстан), Ирина Танноус-Филичкина – член Национальной Академии Индустрии Моды,
           официальный представитель «M.MULLER&SOHN» в РФ, директор Школы Моды МИФ., Андрей Бурматиков–- fashion-директор компании «Faberlik», 
           практик и аналитик моды РФ, директор консалтинговых программ Fashion Consulting Group (г. Москва)
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        а также ведущие дизайнеры Кыргызстана
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        • Мадина Тапаева — ведущий дизайнер КР, президент ассоциации fashion-дизайнеров КР
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        • Дильбар Ашимбаева — ведущий дизайнер КР, Арт-директор Дома Моды «Дильбар»,
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        • Татьяна Воротникова – дизайнер, арт-директор Творческой мастерской «Татьяна Воротникова»
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        • Жумагуль Сариева – Дизайнер, Руководитель студии «ChapanSar»
      </Typography>
      <Typography className={classes.typo} gutterBottom>
      • Замира Молдошева — Стилист-дизайнер, руководитель компании «Мон и Зам»
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        В 2012 году в качестве председателя жюри конкурса была приглашена Ирина Ашкинадзе — президент компании «Дефиле на Неве»,
        генеральный продюсер недели моды в Санкт-Петербурге, Председатель конкурса на соискание премии «Мода России».
      </Typography>
      <Typography className={classes.typo} gutterBottom>
        Все участники получают сертификат об участии в конкурсе, победители по каждой номинации получают денежные премии от организаторов и спонсоров конкурса и памятную статуэтку конкурса.
        В 2011 году обладатели гран-при конкурса«Fashion Industry» среди профессиональных дизайнеров и молодых дизайнеров в качестве приза
         получили бесплатную поездку в Москву для участия на Ассамблее Моды в апреле 2011 года. В рамках 12 Московской Международной недели 
         моды и текстиля «Ассамблея Моды», которая проходила с 19 по 23 апреля 2011 года в Московском Доме Художника, состоялся конкур
          дизайнеров одежды. Всего было представлено по пяти номинациям 78 коллекций молодых дизайнеров Москвы и многих регионов России. 
          В категории «Студент» приняла участие призер конкурса «Fashion industry» Керембердиева Луна и завоевали третье место в номинации: 
          «Этномода», а в категории «Профессиональный дизайнер» призер конкурса «Fashion industry» дизайнер компании «E-Line мода» Пай Наталья 
          заняла третье место в номинации: «Повседневная мода». Ассоциация «Легпром» предоставила возможность победителям конкурса 
          «Fashion industry» не только посетить столицу России и увидеть достопримечательности города, но и познакомиться с молодыми дизайнерами
           из многих городов России, ознакомиться с их работами, обменяться опытом в создании коллекций и заявить о себе, как о перспективных дизайнерах Кыргызстана.
        В 2012 году обладатели гран-при в категории «Молодой дизайнер» получили приз – промышленную швейную машину, а обладатель Гран-при 
        конкурса «Fashion industry» в категории «Профессиональный дизайнер» получил право на бесплатный проезд и участие в Международном 
        конкурсе дизайнеров одежды «Мода России», который проводится в рамках Международной выставки ярмарки в Москве «Текстильлегпром».
        Ассоциация «Легпром» ежегодно улучшает качество организации и проведения конкурса, так в 2011 году конкурс проводился в концертном зале 
        Дворца спорта, где был открытый показ для всех посетителей выставки «Индустрия Моды: Изделия и оборудование», в 2012 году конкурс 
        состоялся на подиуме зала развлекательного центра «Алла-Тоо», в 2013- 2014 годах в торжественном зале ресторана «Тагай Бий»,
         а в 2018 году в большом зале «Форум» АУЦА. Так же для повышения уровня проведения показа, организаторами конкурса приглашаются
          к сотрудничеству модельные агентства г.Бишкек , салоны красоты, школы стилистов, молодежные развлекательные телевизионные каналы, 
          модные глянцевые журналы, интернет-порталы, фото-студии.
      </Typography>
    </div>
  );
}