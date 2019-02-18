import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../Logo/Logo'

import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

function Toolbar(props) {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.Nav}>
        <NavigationItems />
      </nav>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
  )
}

Toolbar.propTypes = {

}

export default Toolbar
