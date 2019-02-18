import React from 'react'
import Modal from '../../components/UI/Modal'

import classes from './withErrorHandler.module.css'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null
    }

    componentWillMount () {
      this.reqInterceptor =  axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req
      })

      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error})
      })
    }

    componentWillUnmount(){
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.response.eject(this.resInterceptor)
    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    }

    render(){

      return (
        <React.Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? <p className={classes.ErrorText}>{this.state.error.message}</p> : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      )
    }
  }
}

export default withErrorHandler