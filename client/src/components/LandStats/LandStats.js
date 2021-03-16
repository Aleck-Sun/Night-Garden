import React, { useState } from 'react';
import '../../App.css';
import './LandStats.css';
import Menu from '../Menu/Menu';
import { Bar } from 'react-chartjs-2';

function LandStats() {
    const data = {
        labels: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Hours of Sleep',
            data: [8, 9, 5, 6, 6, 10, 11],
            backgroundColor: 'turquoise'
        }, {
            label: 'Hours of Sleep',
            data: [8, 9, 5, 6, 6, 10, 11],
            backgroundColor: 'rgba(83, 102, 145, 0.5)', 
            type: 'line'
        }]
    }
    return (
        <div>
            <Menu />
            <div className="stats">
                <Bar
                    data={data}
                    height={'80vh'}
                    width={'80vw'} 
                    options={{
                        legend: {
                            display:false
                        },
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: '#FFFFFF',
                                    fontSize: 25
                                },
                                gridLines: {
                                    color: 'white',
                                    drawBorder: true,
                                    drawOnChartArea: false
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: '#FFFFFF',
                                    fontSize: 25
                                },
                                gridLines: {
                                    color: 'white',
                                    drawBorder: true,
                                    drawOnChartArea: false
                                }
                            }]
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default LandStats;