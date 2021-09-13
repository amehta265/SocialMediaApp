import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; /** This allows us to link different things on the navbar to different pages we have already created */

import { AuthContext } from '../context/auth';

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname; /** We are trying to use the link on the url to set the page active e.g. if it is /register then we set the register button active */

  const path = pathname === '/' ? 'home' : pathname.substr(1); /** we are checking to see what path we are in. We are using ternary operator to decide if we should set it to home or to the other pages */
  const [activeItem, setActiveItem] = useState(path); /** make active Item the path (we got above)and hence pass it to useState */
  /** At this point we have implemented semantic UI and the set our routes */

  const handleItemClick = (e, { name }) => setActiveItem(name);
  
  /**the size and color are attributes that change the navbar */
  const menuBar = user ? (
    <Menu pointing secondary size="massive" color="teal"> 
      <Menu.Item name={user.username} active as={Link} to="/" />  

      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={logout} />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="register"
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link} /** This will link the button on the menuBar to the register page in ./pages/register */
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  );

  return menuBar;
}

export default MenuBar;
