import React from 'react'
import PropTypes from 'prop-types'

import classes from './NavigationItem.module.css'

function NavigationItem(props) {
  return (
    <a className={[classes.NavigationItem, props.active ? classes.active : null].join(' ')} href={props.link}>{props.children}</a>
  )
}

NavigationItem.propTypes = {

}

export default NavigationItem

