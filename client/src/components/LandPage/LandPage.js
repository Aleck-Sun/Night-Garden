import React, { useState } from 'react';
import '../../App.css';
import './LandPage.css';
import Menu from '../Menu/Menu';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Clock from 'react-live-clock';
import 'moment-timezone';

function LandPage() {
    const [goal, setGoal] = useState(8);
    const [today, setToday] = useState(5);
    const [points, setPoints] = useState(3);

    return(
        <>
            <Menu />
            <div className='landpage'>
                <div className='goal-circle'>
                    <div className='goal-circle-style'>
                        <CircularProgressbarWithChildren
                            value={Math.floor(today/goal*100)}
                            text={`${Math.floor(today/goal*100)}% ${today}/${goal}h`}
                            styles={buildStyles({
                                textSize: '1.5vh',
                                pathTransitionDuration: 0.5,
                                pathColor: 'turquoise',
                                textColor: 'white',
                                trailColor: 'white',
                            })}
                        />
                    </div>
                </div>
                <div className='goal-info'>
                    <div className='time'>
                        <i class="far fa-clock"></i> <Clock format='h:mm a' ticking={true} />
                    </div>
                    <div class="grid-container">
                        <div class="grid-item-head">
                            <h1 className='title'>
                                Sleep Goal:
                            </h1>
                        </div>
                        <div class="grid-item">
                            <input type="text" defaultValue={goal}
                                   onChange={(e) => {
                                        e.preventDefault();
                                        setGoal(parseFloat(e.target.value));  
                                    }}></input>
                        </div>
                        <div class="grid-item-head">
                            <h1 className='title'>
                                Sleep Today:
                            </h1>
                        </div>
                        <div class="grid-item">
                            <input type="text" defaultValue={today}
                                   onChange={(e) => {
                                       e.preventDefault();
                                       setToday(parseFloat(e.target.value));
                                   }}></input>
                        </div>
                        <div class="grid-item-head">
                            <h1 className='title'>
                                Sleep Points:
                            </h1>
                        </div>
                        <div class="grid-item">
                            <input type="text" defaultValue={points} readOnly></input>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandPage;