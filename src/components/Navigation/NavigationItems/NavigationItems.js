import React from 'react'
import PropTypes from 'prop-types'

import classes from './NavigationItems.module.css'

import NavigationItem from './NavigationItem/NavigationItem'

function NavigationItems(props) {
  return (
    <div className={classes.NavigationItems}>
      <NavigationItem link="/" exact>Burger Builder</NavigationItem>
      <NavigationItem link="/orders">Checkout</NavigationItem>
    </div>
  )
}

NavigationItems.propTypes = {

}

export default NavigationItems

