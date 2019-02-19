import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import classes from './NavigationItem.module.css'

function NavigationItem(props) {
  return (
    <NavLink
      className={classes.NavigationItem}
      to={props.link}
      activeClassName={classes.active}
      exact={props.exact}
    >
      {props.children}
    </NavLink>
  )
}

NavigationItem.propTypes = {

}
// for className - , props.active ? classes.active : null].join(' ')}
export default NavigationItem

