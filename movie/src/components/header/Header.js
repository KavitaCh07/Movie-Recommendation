import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user.png';
import './header.scss';

const Header = () => {
    // console.log("gjdctuty");
    return (
        <div className='header'> 
        <Link to="/">
        <div className='logo'>Movie App</div>
        </Link>
        <div className='user-image'>
        <img src={user} alt=''/>
        </div>
        </div>
    );
};

export default Header;