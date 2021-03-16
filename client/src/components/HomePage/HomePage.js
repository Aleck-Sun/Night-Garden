import React from 'react';
import '../../App.css';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Stars from '../Stars/Stars';
import NavBar from '../NavBar/NavBar';
import image from './side.png';

function HomePage() {
    return (
        <>
        <NavBar />
        <div className='home'>
            <Stars />
            <div className='home-front'>
                <div className='home-text'>
                    <h1 className='home-title'>
                        Night Garden
                    </h1>
                    <p className='home-desc'>
                        Night Garden tracks your sleep and rewards you for
                        <br></br>
                        reaching your sleep goals in a plantastic way!
                    </p>
                    <Link to='/user/home' className='start-button'>
                        Get Started
                    </Link>
                </div>
                <div className='home-demo'>
                    <img src={image}></img>
                </div>
            </div>
        </div>
        </>
    );
}

export default HomePage;