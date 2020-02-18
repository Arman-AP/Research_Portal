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
import {  } from "./actions"
import {  } from './selectors';
import { getGlobalState } from "../../App/selectors"
import {Alert} from "react-bootstrap"
const key = 'login';
class Form extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>  
        <Helmet>
          <title>Login Page</title>
          <meta
            name="Login Page"
            content=""
          />
        </Helmet>
       asdasd
  </div>
    )
  }
  componentWillUnmount(){
  }
}
export function Profile({
global
}) {
  useEffect(() => {
    
  });
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  console.log("login function")
      return (
        <Form 
        ></Form>
  )  
}
const mapStateToProps = createStructuredSelector({
});
export function mapDispatchToProps(dispatch) {
  return {

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  memo,
)(Profile);
