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
function Header({
    global, signOut
}) {
    console.log("Header Function")
    console.log(signOut)

    return (
        <div>
            <div className="container"> <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand " to="/"><img src={logo} alt="" className="w-100 h-100" /></Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/research">Research</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/institute">Institute</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 ">
                        <div className="collapse mx-1" id="expandedSearch">
                            <input type="text" className=" form-control" placeholder="Search" />
                        </div>
                        <button title="Search" className="btn mx-1 btn-primary my-2 my-sm-0" type="button" data-toggle="collapse" data-target="#expandedSearch" aria-expanded="false" aria-controls="collapseThree">
                            <i  className="fa fa-search"></i>

                        </button>
                        {global && global.user && global.jwt ?
                            <button title="Log Out" className="mx-1 btn btn-primary my-2 my-sm-0" onClick={signOut}>
                                <FaSignOutAlt>
                                </FaSignOutAlt>
                            </button> : ""
                        }
                        <Link title="Portal" to="/login"><button className="mx-1 btn btn-primary my-2 my-sm-0"  >Portal</button></Link>

                    </form>
                </div>
            </nav></div>
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    global: getGlobalState()
});
export function mapDispatchToProps(dispatch) {
    return {
        signOut: (evt) => {
            evt.preventDefault()
            dispatch(signOutUser());
            window.location.reload();
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
)(Header);

