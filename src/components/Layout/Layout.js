import React from 'react'

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  }

  componentDidMount(){
    
  }

  componentDidUpdate(){

  }

  SideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  }

  SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render(){
    return (
      <React.Fragment>
        <Toolbar
          drawerToggleClicked={this.SideDrawerToggleHandler}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerCloseHandler}
        />
        <main className={classes.Content} >
          {this.props.children}
        </main>
      </React.Fragment>
    )
  }
}

export default Layout