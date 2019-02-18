import React from 'react'
import PropTypes from 'prop-types'

import classes from './NavigationItems.module.css'

import NavigationItem from './NavigationItem/NavigationItem';

function NavigationItems(props) {
  return (
    <div className={classes.NavigationItems}>
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </div>
  )
}

NavigationItems.propTypes = {

}

export default NavigationItems

