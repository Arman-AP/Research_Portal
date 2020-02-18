import React, { useEffect, memo } from 'react';
import { Redirect, Link } from "react-router-dom"
import { connect } from 'react-redux';
import { compose } from 'redux';
import logo from './logo.svg'
import { FaSignOutAlt } from "react-icons/fa/"
import { getGlobalState } from "../../containers/App/selectors"
const key = 'register';
import { createStructuredSelector } from 'reselect';
import { signOutUser } from "../../containers/App/actions"
import navItems from "./HeaderLink"
function PortalHeader({
    global
}) {
    console.log("Header Function")
    navItems.map((each)=>{
        console.log(each.value)
    })
    return (
        <div>
            <div className="container bg-primary text-light pt-2  ">
                <div className="container-fluid"> <ul className="nav flex-wrap-reverse  border-0 nav-tabs text-light">
                    {navItems.map((each) => {
                        var desktopClass= "nav-link d-none  d-lg-block"
                        var mobileClass="nav-link  d-lg-none"
                        var itemClass="nav-item"
                        const url = each.link
                        if(url==location.pathname){
                            desktopClass += " active "
                            mobileClass += " active "
                        } else{
                            desktopClass += " text-light "
                            mobileClass += " text-light "
                        }
                        if(each.username){
                            each.value=global.user.username
                        }
                        console.log(each.id)
                        console.log(navItems.length)
                        if(each.pullRight){
                            itemClass += " ml-auto"
                        }
                        return(
                            <li className={itemClass} key={each.id}>
                            <Link className={desktopClass} to={each.link}>
                                {each.value}
                            </Link>  
                            <Link className={mobileClass}>
                                {each.icon}
                            </Link>                       </li>)
                    })}
                </ul>

                </div>
            </div>

        </div>
    );
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
)(PortalHeader);

