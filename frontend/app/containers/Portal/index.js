/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useEffect, memo } from 'react';
import { Redirect, Link, Switch, Route } from "react-router-dom"
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Helmet } from 'react-helmet';
import reducer from './reducer';
import saga from './saga';
import { createStructuredSelector } from 'reselect';
import { } from "./actions"
import { } from './selectors';
import { getGlobalState } from "../App/selectors"
import { Alert } from "react-bootstrap"
import request from "../../utils/request"
const key = 'login';
import PortalHeader from "../../components/PortalHeader"
import Profile from "./profile"
class AuthPortal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PortalHeader>
            <Switch>
                <Route exact path="/portal" component={Profile} />
                <Route path="/portal/profile" component={Profile} />
            </Switch></PortalHeader>
        )
    }
}
export function Portal({
    global
}) {
    if (global && global.jwt && global.user) {
        console.log
        return (<AuthPortal></AuthPortal>
        )
    }
    else{
        return(
            <Redirect to="/login"></Redirect>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    global: getGlobalState()
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
)(Portal);

