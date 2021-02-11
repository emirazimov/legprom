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
        Ассоциация <ExpandMoreIcon/>
      </Button>
      <ParentPopupState.Provider value={popupState}>
        <Menu
          {...bindMenu(popupState)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          getContentAnchorEl={null}
          style={{width: '500px', }}
        > 
          <Submenu popupId="moreChoicesMenu" title="О нас">
            <Link className="button" to="/main/missia"><MenuItem onClick={popupState.close}>Миссия</MenuItem></Link>
            <Link className="button" to="/main/history"><MenuItem onClick={popupState.close}>История</MenuItem></Link>
            <Link className="button" to="/main/services"><MenuItem onClick={popupState.close}>Услуги</MenuItem></Link>
            <Link className="button" to="/main/structure"><MenuItem onClick={popupState.close}>Структура</MenuItem></Link>
          </Submenu>
          <Link className="button" to="/main/textile"><MenuItem style={{whiteSpace: 'normal'}} onClick={popupState.close}>Текстильная и швейная промышленность Кыргызской Республики</MenuItem></Link>
          <Link className="button" to="/main/legislation"><MenuItem onClick={popupState.close}>Законодательство</MenuItem></Link>
          <Link className="button" to="/main/export"><MenuItem onClick={popupState.close}>Торговля</MenuItem></Link>
        </Menu>
      </ParentPopupState.Provider>
    </div>
  )
}

export default CascadingHoverMenus

const submenuStyles = theme => ({
  menu: {
    marginTop: theme.spacing(-1),
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