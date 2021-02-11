import * as React from 'react';
import Menu from 'material-ui-popup-state/HoverMenu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import { Link } from "react-router-dom";
import './Button.css';

const ParentPopupState = React.createContext(null)

const CascadingHoverMenus = () => {
  const popupState = usePopupState({ popupId: 'demoMenu', variant: 'popover' })
  return (
    <div style={{ height: 6 }}>
      <Button  {...bindHover(popupState)}>
        Члены Ассоциация <ExpandMoreIcon/>
      </Button>
      <ParentPopupState.Provider value={popupState}>
        <Menu
          {...bindMenu(popupState)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          getContentAnchorEl={null}
          
        >
          <MenuItem  onClick={popupState.close}><Link style={{textDecoration: "none", color:"black"}} to="/main/list">Список членов ассоциации</Link></MenuItem>
          <MenuItem onClick={popupState.close}><Link style={{textDecoration: "none", color:"black"}} to="/main/associations">Как стать членом Ассоциации</Link></MenuItem>
          <MenuItem onClick={popupState.close}><Link style={{textDecoration: "none", color:"black"}} to="/main/benefists">Преимущества членства</Link></MenuItem>
        </Menu>
      </ParentPopupState.Provider>
    </div>
  )
}

export default CascadingHoverMenus

