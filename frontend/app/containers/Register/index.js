/*
 * FeaturePage
 *
 * List all the features
 */
import { Helmet } from 'react-helmet';
import React, { useEffect, memo } from 'react';
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { signUp, changePassword, changeEmail, clearThisState } from './actions'
const key = 'register';
import reducer from './reducer';
import saga from './saga';
import { changeUsername } from './actions';
import { Alert } from "react-bootstrap"
import { createStructuredSelector } from 'reselect';
import { thisStateError, thisStateLoading, thisStateRedirect } from './selectors';
import { getGlobalState } from "../App/selectors"
import { GoogleReCaptchaProvider, GoogleReCaptchang } from 'react-google-recaptcha-v3';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)

  }
  componentDidUpdate() {
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Register Page</title>
          <meta
            name="Register Page"
            content=""
          />
        </Helmet>
        <div className="container">

          {this.props.loading ? <div className="mx-auto w-50 text-center">
            <div className="mx-auto spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>      </div> :

            <form onSubmit={this.props.onSubmitForm} className=" mx-auto w-lg-50">
              {this.props.error ?
                <Alert variant="danger">
                  Error -
          {this.props.error.message &&
                    this.props.error.message[0].messages
                    ? this.props.error.message[0].messages.map((each) => each.message) : ""}</Alert> : ""}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  onChange={this.props.onChangeUsername} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  onChange={this.props.onChangeEmail} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                  onChange={this.props.onChangePassword} />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <div className="form-group form-check">
                
                <button type="submit" className="btn btn-primary mx-2" >Submit</button>              </div>
            </form>}
        </div>
      </div>)
  }
  componentWillMount() {
    this.props.clearState()
  }
}
export function Register({
  onSubmitForm,
  onChangeUsername,
  onChangePassword,
  onChangeEmail,
  error,
  loading,
  redirect,
  global,
  clearState
}) {
  console.log("register ");
  if (redirect || (global.jwt && global.user)) { return (<Redirect to="/portal"></Redirect>) } else {
    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });
    return (<RegisterForm error={error}
      loading={loading}
      error={error} onSubmitForm={onSubmitForm}
      onChangeUsername={onChangeUsername}
      onChangePassword={onChangePassword}
      onChangeUsername={onChangeUsername}
      onChangeEmail={onChangeEmail}
      clearState={clearState}
      
    ></RegisterForm>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  error: thisStateError(),
  loading: thisStateLoading(),
  redirect: thisStateRedirect(),
  global: getGlobalState()
});
export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    clearState: () => {
      dispatch(clearThisState())
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(signUp());
      evt.target.reset();
    },
    handleCaptcha: ()=>{

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
)(Register);
