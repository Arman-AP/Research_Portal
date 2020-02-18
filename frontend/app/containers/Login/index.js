/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useEffect, memo  } from 'react';
import { Redirect, Link } from "react-router-dom"
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Helmet } from 'react-helmet';
import reducer from './reducer';
import saga from './saga';
import { createStructuredSelector } from 'reselect';
import { changeIdentifier, changePassword, logIn, cleanUpCurrentState } from "./actions"
import { thisStateError, thisStateLoading, thisStateRedirect } from './selectors';
import { getGlobalState } from "../App/selectors"
import {Alert} from "react-bootstrap"
const key = 'login';
class Form extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log("form")
    console.log(this)
    console.log(this.props)
    return(
      <div>  
      <div>
        <Helmet>
          <title>Login Page</title>
          <meta
            name="Login Page"
            content=""
          />
        </Helmet>
        <div className="container ">
          {this.props.loading ? <div className="mx-auto w-50 text-center">
            <div className="mx-auto spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>      </div> :
            <form className="mx-auto w-lg-50 pb-50" onSubmit={this.props.onSubmitForm}>
              {this.props.error ? <Alert variant="danger"> Error - {this.props.error.message && this.props.error.message[0].messages ? this.props.error.message[0].messages.map((each) => each.message) : ""}</Alert> : ""}
              <Link to="/register">New to our portal?</Link>
              <div className="form-group ">
                <label htmlFor="exampleInputEmail1">Email address/Username</label>
                <input className="form-control" id="exampleInputEmail1" onChange={this.props.onChangeIdentifier} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your information with anyone else.</small>
              </div>
              
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.props.onChangePassword} />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember my session </label>
              </div>
              <div className="d-flex justify-content-start">
                <button type="submit" className="btn btn-primary mx-2" >Submit</button>
                <button type="submit" className="btn btn-primary mx-2">Forgot Password</button>
              </div>
            </form>}
        </div>
      </div>
    
  </div>
    )
  }
  componentWillUnmount(){
    this.props.cleanUpState()
  }
}
export function Login({
  onChangeIdentifier,
  onChangePassword,
  onSubmitForm,
  error,
  loading,
  redirect,
  global,
  cleanUpState
}) {
  useEffect(() => {
    
  });
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  console.log("login function")
  console.log(loading)
  if( (global.jwt && global.user) ){ return(<Redirect to="/portal"></Redirect>)} else {
      return (
        <Form 
          global={global} 
          onSubmitForm={onSubmitForm}
          onChangeIdentifier={onChangeIdentifier}
          onChangePassword={onChangePassword}
          error={error}
          loading={loading}
          redirect={redirect}
          cleanUpState={cleanUpState}
        ></Form>
  )  }
}
const mapStateToProps = createStructuredSelector({
  error: thisStateError(),
  loading: thisStateLoading(),
  redirect: thisStateRedirect(),
  global: getGlobalState()
});
export function mapDispatchToProps(dispatch) {
  return {
    onChangeIdentifier: evt => dispatch(changeIdentifier(evt.target.value)),
    onChangePassword: evt => {
      dispatch(changePassword(evt.target.value))
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(logIn())
      evt.target.reset();
    },
    cleanUpState: ()=>{
      dispatch(cleanUpCurrentState())
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  memo,
)(Login);
