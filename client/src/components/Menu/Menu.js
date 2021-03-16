import React from 'react';
import '../../App.css';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className='menu'>
            <Link to='/user/stats' className='menu-item'>
                <i class="fas fa-poll"></i>
            </Link>
            <Link to='/user/home' className='menu-item'>
                <i class="fas fa-home"></i>
            </Link>
            <Link to='/user/garden' className='menu-item'>
                <i class="fas fa-leaf"></i>
            </Link>
        </div>
    );
}

export default Menu;