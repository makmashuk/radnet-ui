import React from 'react'
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
    // responsive: true,
    maintainAspectRatio: true,
    scales: {
        xAxis: {
            beginAtZero: true,
            grid:{
                // display:false,
                lineWidth:0,
                borderWidth:1,
                tickWidth:3
            },
            min: 0,
            max: 4,
            ticks: {
                maxTicksLimit: 6,
                callback: (context, index) => {
                    if (context === 1) {
                        return 'Perfect'
                    }
                    if (context === 2) {
                        return 'Good'
                    }
                    if (context === 3) {
                        return 'Bad'
                    }

                }

            }
        },
        yAxes: {
            grid:{
                borderColor:'#E0E0E0',
            },
            beginAtZero: true,
            lineWidth: 5,
            max: 100,
            ticks: {
                stepSize: 25,
                height: 105,
                callback: (context) => {
                    return `${context}%`
                }
            }
        },
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            usePointStyle: true,
            displayColors: false,
            yAlign: 'bottom',
            xAlign: 'center',
            callbacks: {
                label: function (context) {
                    let label = `${context.parsed.y} % Good Quality`;
                    return label;
                }
            }
        }
    }
};

const data = {

    datasets: [
        {
            data: [
                {
                    x: 0.8,
                    y: 10
                }, {
                    x: 1.3,
                    y: 62
                }, {
                    x: 1.2,
                    y: 15
                },
                {
                    x: 0.6,
                    y: 15
                }, {
                    x: 1.6,
                    y: 78
                }, {
                    x: 1.1,
                    y: 51
                },
            ],
            backgroundColor: '#9BDDAD',
            borderColor: '#9BDDAD',
            pointBorderWidth: 8
        },
        {
            data: [
                {
                    x: 2.1,
                    y: 51
                },
                {
                    x: 2.5,
                    y: 48
                },
                {
                    x: 2.2,
                    y: 37
                },
                {
                    x: 2.7,
                    y: 35
                },

            ],
            backgroundColor: '#B5DC61',
            borderColor: '#B5DC61',
            pointBorderWidth: 8
        },
        {
            data: [
                {
                    x: 3.0,
                    y: 22
                }, {
                    x: 3.1,
                    y: 65
                },
                {
                    x: 3.7,
                    y: 55
                },
                {
                    x: 3.6,
                    y: 45
                },
                {
                    x: 3.5,
                    y: 51
                },
                {
                    x: 2.7,
                    y: 70
                },

            ],
            backgroundColor: '#DF6666',
            borderColor: '#DF6666',
            pointBorderWidth: 8
        },

    ],
};
function Charts() {
    return (
        <div> <Scatter options={options} data={data} /></div>
    )
}

export default Charts