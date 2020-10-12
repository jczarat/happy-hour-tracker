import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <NavLink to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</NavLink>
        </div>
        :
        <div>
            <NavLink exact to="/">HOME</NavLink> &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink exact to="/show">SHOW PAGE</NavLink> &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink to='/login' className='NavBar-link'>LOG IN</NavLink> &nbsp;&nbsp;|&nbsp;&nbsp;
        <NavLink to='/signup' className='NavBar-link'>SIGN UP</NavLink>
        </div>;

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar