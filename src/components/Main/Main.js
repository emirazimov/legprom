import React from 'react';
import {
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import Footer from '../Footer/Footer';
import Association from '../Buttons/Association';
import Associationch from '../Buttons/Associationch';
import Projects from '../Buttons/Projects';
import Partnership from '../Buttons/Partnership';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Main.css';
import Contact from '../Contact/Contact';
import Grid from '@material-ui/core/Grid';
import Missia from '../Association/Missia';
import History from '../Association/History';
import Services from '../Association/Services';
import Structure from '../Association/Structure';
import StateDodies from '../Partnership/StateDodies';
import Contests from '../Projects/Contests';
import Vystavki from '../Projects/Vystavki';
import Technopolis from '../Projects/Technopolis';
import Textile from '../Association/Textile';
import Legislation from '../Association/Legislation';
import Export from '../Association/Export';
import Benefists from '../Associationch/Benefits';
import Associations from '../Associationch/Associations';
import Organization from '../Partnership/Organization';
import List from '../Associationch/List';
import NewsIn from '../News/NewsIn';
import News from '../News/News';




const useStyles = makeStyles((theme) => ({
  appBar: {
      backgroundColor: '#fff',
      color: 'black',
      [theme.breakpoints.up('')]: {
        display: 'none',
        position: 'fixed',
      },
  },
  toolbar: {
      display: 'flex',
      justifyContent: 'center',
      marginRight: '10px',
      fontSize: '14',
  },
  button: {
      marginRight: '10px', 
      bottom: '-15px',
      textDecoration: 'none',
      color: 'black',
  },
  searchIcon: {
      marginLeft: '10px',
      marginTop: '30px',
  },
  typo: {
      marginTop: '30px',
      color: 'DeepSkyBlue',
      fontSize: '16px',
    marginBottom: '20px',
      marginLeft: 918
  },
  menu: {
    display: 'flex',
    position: 'relative',
    width: '80%',
    height: '40px',
    backgroundColor: '#F5F5F5',
    borderRadius: '30px',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginLeft: '30px',
    marginBottom: '17px',
  },
  menuIcon: {
    marginTop: '2.5px',
    color: '#7CB9E8',
  },
  text: {
    width: '70%',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginLeft: '50px',
    },
  },
  typot: {
    textAlign: 'left',
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    justifyContent: 'center',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  acor: {
    display: 'block',
    justifyContent: 'center',
    textAlign: 'left',
    fontSize: '16px',
  },
  bbutton: {
  textAlign: 'left',
  fontSize: '16px',
  },
}));

function ElevationScroll(props) {
const { children, window } = props;
// Note that you normally won't need to set the window ref as useScrollTrigger
// will default to window.
// This is only being set here because the demo is in an iframe.
const trigger = useScrollTrigger({
  disableHysteresis: true,
  threshold: 0,
  target: window ? window() : undefined,
});

return React.cloneElement(children, {
  elevation: trigger ? 4 : 0,
});
}

ElevationScroll.propTypes = {
children: PropTypes.element.isRequired,
/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */
window: PropTypes.func,
};

export default function Main(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('980'));
  const classes = useStyles();
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = React.useState(false);
  const onClick = () => setIsActive(!isActive);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

return (
  <>
    <CssBaseline />
    <ElevationScroll {...props}>
    <AppBar className={classes.appBar} > 
        <Typography className={classes.typo} variant="h5">Легпром</Typography>
      {isMobile ?
      (
        <div style={{position: 'relative'}}>
          <CssBaseline />
          <ElevationScroll {...props}>
          <div className={classes.menu}>
            <Typography style={{marginLeft: '10px', marginTop:'4px'}} variant="h6">Выбрать страницу </Typography>
            <div className="menu-container"> 
              <Button onClick={onClick}>
                <MenuIcon  className={classes.menuIcon}/>
              </Button>
              <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                
                <ul  >
                <div className={classes.root}>
                    <li onClick={onClick} className={classes.bbutton}><Link to="/main/newsin">Новости</Link></li>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >  
                        <Typography className={classes.heading}>Ассоциация</Typography>
                      </AccordionSummary>
                      <Typography className={classes.heading}>О нас</Typography>
                      <AccordionDetails onClick={onClick}  className={classes.acor}>
                        <li><Link to="/main/missia">Миссия</Link></li>
                        <li><Link to="/main/history">История</Link></li>
                        <li><Link to="/main/services">Услуги</Link></li>
                        <li><Link to="/main/structure">Структура</Link></li>
                        <li><Link to="/main/textile">Текстильная и швейная промышленность Кыргызской Республики</Link></li>
                        <li><Link to="/main/legislation">Законодательство</Link></li>
                        <li ><Link to="/main/export">Торговля</Link></li>
                        
                        
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <Typography >Члены Ассоциация</Typography>
                      </AccordionSummary>
                      <AccordionDetails onClick={onClick}  className={classes.acor}>
                        <li ><Link to="/main/associations">Список членов ассоциации</Link></li>
                        <li ><Link to="/main/list">Как стать членом Ассоциации</Link></li>
                        <li ><Link to="/main/benefists">Преимущества членства</Link></li>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                      >
                        <Typography className={classes.heading}>Проекты</Typography>
                      </AccordionSummary>
                      <AccordionDetails onClick={onClick}  className={classes.acor}>
                        <li ><Link to="/main/vystavki">Выставки</Link></li>
                        <li ><Link to="/main/contests">Конкурсы</Link></li>
                        <li ><Link to="/main/technopolis">Технополис</Link></li>
                        <li >Подготовка кадров</li>
                        <li ><Link to="/main/benefits">Координационный совет</Link></li>
                        <li ><Link to="/main/benefits">Ярмарка вакансий</Link></li>
                        <li ><Link to="/main/benefits">Семинары, тренинг</Link></li>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                      >
                        <Typography className={classes.heading}>Партнерство</Typography>
                      </AccordionSummary>
                      <AccordionDetails onClick={onClick}  className={classes.acor}>
                        <li ><Link to="/main/stateDodies">Государственные органы</Link></li>
                        <li ><Link to="/main/list">Институты подддержки Торговли</Link></li>
                        <li >Образоваттельные учреждения</li>
                        <li><Link to="/main/benefits">Университеты</Link></li>
                        <li ><Link to="/main/benefits">Колледжи</Link></li>
                        <li ><Link to="/main/benefits">Профессиональные лицеи</Link></li>
                        <li ><Link to="/main/organization">Международные организации</Link></li>
                        <li ><Link to="/main/benefits">Международные партнеры</Link></li>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <li onClick={onClick}><Link to="/main/contact">Контакты </Link></li>
                  <li onClick={onClick}>
                  <Typography variant="contained" color="secondary">
                  <Link to="/news/newsin">Информация </Link>
                  </Typography>
                  
                  </li>
                
                </ul>
              </nav>
              </div>
          </div>
          </ElevationScroll>
        </div>
        
        
      ) : (
        <>
        
        <Container >
            <Toolbar className={classes.toolbar}>
                <Button className={classes.button} color="primary" >
                  <NavLink style={{textDecoration: 'none', color: 'black'}} to="/main/newsin">Новости</NavLink>
                </Button>
                <Association/>
                <Associationch/>
                <Projects/>
                <Partnership/>
                <Link to="/main/contact"><Button className={classes.button}>Контакты</Button></Link>
                
                <Button
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                >
                    Информация
                </Button>
                <SearchIcon className={classes.searchIcon}/>
            </Toolbar>
        </Container>
        <Divider />
        </>
      ) }
      </AppBar>
    </ElevationScroll>
    <Toolbar />
    
      <div style={{marginTop:'30px', flexGrow: '1'}}>
      <Grid container  >
        
        <Grid   item xs={12} sm={9} md={9} lg={9} xl={9}>
            <Switch>
                <Route exact path="/main/newsin" component={NewsIn} />
                <Route exact path="/main/news/:id" component={News} />
                <Route exact path="/main/contact" component={Contact} />
                <Route exact path="/main/missia" component={Missia} />
                <Route exact path="/main/history" component={History} />
                <Route exact path="/main/services" component={Services} />
                <Route exact path="/main/structure" component={Structure} />
                <Route exact path="/main/stateDodies" component={StateDodies} />
                <Route exact path="/main/contests" component={Contests} />
                <Route exact path="/main/vystavki" component={Vystavki} />
                <Route exact path="/main/technopolis" component={Technopolis} />
                <Route exact path="/main/textile" component={Textile} />
                <Route exact path="/main/legislation" component={Legislation} />
                <Route exact path="/main/export" component={Export} />
                <Route exact path="/main/benefists" component={Benefists} />
                <Route exact path="/main/associations" component={Associations} />
                <Route exact path="/main/organization" component={Organization} />
            <Route exact path="/main/list" component={List} />


            </Switch>
        </Grid>
        <Grid style={{marginTop:'100px', flexGrow: '1', marginBottom: '100px'}} item xs={12} md={3} lg={3} xl={3}>
          <p  className={classes.text}>
            <Typography className={classes.typot} variant="h5" gutterBottom> Свежие записи</Typography>
            <Typography className={classes.typot}  gutterBottom>
                Первая В2В встреча кыргызских швейников и российских сетевых магазинов: развитие партнерских связей и новые рынки  
             </Typography>
            <Typography className={classes.typot}  gutterBottom>
              Результаты жеребьевки для предстоящей В2В встречи 4-5 декабря 2019 г.
            </Typography>
            <Typography className={classes.typot}  gutterBottom>
            Российский эксперт провела семинар для кыргызстанских швейников в рамках предстоящей В2В встречи с представителями 25 торговых сетей России
            </Typography>
            <Typography className={classes.typot}  gutterBottom>
                В2В Встреча в г. Бишкек производителей изделий легкой промышленности КР с 25 представителями сетевых магазинов одежды из России. 4 декабря 2019 г. Отель “Orion Hotel Bishkek”  
            </Typography>
            <Typography className={classes.typot}  gutterBottom>
            Студенты Кыргызского государственного технического университета им. И. Раззакова и Кыргызско-Российского Славянского университета ознакомились с Целями устойчивого развития ООН
            </Typography>
            </p>
        </Grid>
    </Grid>
      
      </div>
    
    <Footer />
  </>
);
}

