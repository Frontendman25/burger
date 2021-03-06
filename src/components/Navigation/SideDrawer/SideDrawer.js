import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

function SideDrawer(props) {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if(props.open){
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <Logo height="8%" />
          <nav>
            <NavigationItems />
          </nav>
      </div>
    </React.Fragment>
  )
}

SideDrawer.propTypes = {

}

export default SideDrawer
