import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Menu from 'material-ui-popup-state/HoverMenu';
import MenuItem from '@material-ui/core/MenuItem';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import { Link} from "react-router-dom";
import './Button.css';

const ParentPopupState = React.createContext(null)

const CascadingHoverMenus = () => {
  const popupState = usePopupState({ popupId: 'demoMenu', variant: 'popover' })
  return (
    <div style={{ height: 6 }}>
      <Button  {...bindHover(popupState)}>
        Проекты <ExpandMoreIcon/>
      </Button>
      <ParentPopupState.Provider value={popupState}>
        <Menu
          {...bindMenu(popupState)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          getContentAnchorEl={null}
          style={{width: '500px', }}
        > 
          <Link className="button" to="/main/vystavki"><MenuItem onClick={popupState.close}>Выставки</MenuItem></Link>
          <Link className="button" to="/main/contests"><MenuItem onClick={popupState.close}>Конкурсы</MenuItem></Link>
          <Link className="button" to="/main/technopolis"><MenuItem onClick={popupState.close}>Технополис</MenuItem></Link>
          <Submenu popupId="moreChoicesMenu" title="Подготовка кадров">
            <Link className="button" to="/main/history"><MenuItem onClick={popupState.close}>Координационный совет</MenuItem></Link>
            <Link className="button" to="/main/history"><MenuItem onClick={popupState.close}>Ярмарка вакансий</MenuItem></Link>
            <Link className="button" to="/main/history"><MenuItem onClick={popupState.close}>Семинары, тренинг</MenuItem></Link>
          </Submenu>
        </Menu>
      </ParentPopupState.Provider>
    </div>
  )
}

export default CascadingHoverMenus

const submenuStyles = theme => ({
  menu: {
    marginTop: theme.spacing(-2),
  },
  title: {
    flexGrow: 1,
  },
  moreArrow: {
    marginRight: theme.spacing(-1),
  },
})

const Submenu = withStyles(submenuStyles)(
  // Unfortunately, MUI <Menu> injects refs into its children, which causes a
  // warning in some cases unless we use forwardRef here.
  React.forwardRef(({ classes, title, popupId, children, ...props }, ref) => {
    const parentPopupState = React.useContext(ParentPopupState)
    const popupState = usePopupState({
      popupId,
      variant: 'popover',
      parentPopupState,
    })
    return (
      <ParentPopupState.Provider value={popupState}>
        <MenuItem
          {...bindHover(popupState)}
          selected={popupState.isOpen}
          ref={ref}
        >
          <span className={classes.title}>{title}</span>
          <ChevronRight className={classes.moreArrow} />
        </MenuItem>
        <Menu
          {...bindMenu(popupState)}
          classes={{ paper: classes.menu }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          getContentAnchorEl={null}
          {...props}
        >
          {children}
        </Menu>
      </ParentPopupState.Provider>
    )
  })
)