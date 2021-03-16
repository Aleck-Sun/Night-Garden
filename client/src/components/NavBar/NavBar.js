import React from 'react';
import '../../App.css';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar">
            <div className='logo'>
                <Link to='/' className='nav-logo'>
                    <i class="fas fa-cloud-moon"></i>Night Garden
                </Link>
            </div>
            <div className='login'>
                <Link to='/login' className='nav-item'>
                    Login
                </Link>
                <Link to='/register' className='nav-item'>
                    Register
                </Link>
            </div>
        </div>
    );
}

export default NavBar;