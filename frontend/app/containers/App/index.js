/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import Portal from "../Portal"
import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import "./app.scss";
import GlobalStyle from '../../global-styles';
import Register from 'containers/Register/Loadable';
import {setGlobalToken} from "./actions"
import request from "../../utils/request"
import {failedLogin} from "../Login/actions"
import PropTypes from 'prop-types';

class App extends React.Component{
   authenticate = async ()=>{
    console.log("Authenticate Function");
    var currentLocalStorage= localStorage.getItem("jwt");
    if(currentLocalStorage){
      try {
        var requestResults = await request("http://localhost:1337/users/me",{
        method: 'GET',
        headers: {Authorization: `Bearer ${currentLocalStorage}`} ,
      })
      console.log("Authentication Success ")
      requestResults.validatedAt = new Date()
      let globalToken = {jwt:currentLocalStorage, user:requestResults};
      this.props.setGlobal(globalToken)
      return(true)
      } catch (error) {
        console.log("Authentication Error ")
        console.log("Local Storage Erased ")
        localStorage.clear();
        console.log(error)
        return(false)
      }
    } else{
      console.log("No Token")
    }
    return(false)
  }

  render(){
    
    console.log(location.pathname)
    // this.props.getProfileFetch;
    return (
      <div className="">
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <Header />
        <div className="main-full">
        <Switch >
          <Route exact path="/"   render={()=>{
            var isAuth = this.authenticate();
            return(<HomePage/> )}}/>
          <Route path="/register"  render={()=>{
            var isAuth = this.authenticate();
            return(<Register/> )}}/>
          <Route path="/login" render={()=>{
            var isAuth = this.authenticate();
            return(<Login/> )}}/>
          <Route path="/portal"  render={()=>{
            var isAuth = this.authenticate();
            return(<Portal/> )}}/>
          <Route  render={()=>{
            var isAuth = this.authenticate();
            return(<NotFoundPage/> )}}/>
        </Switch>
        </div>
        <Footer />
        <GlobalStyle />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setGlobal: (globalToken) => dispatch(setGlobalToken(globalToken))
})



export default connect(null,mapDispatchToProps)(App)