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
    responsive: true,
    // maintainAspectRatio: true,
    aspectRatio: 1,
    scales: {
        xAxis: {
            beginAtZero: true,
            grid: {
                // display:false,
                lineWidth: 0,
                borderWidth: 1,
                tickWidth: 3
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
            grid: {
                borderColor: '#E0E0E0',
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
            label: 'Chart 1',
            data: [{ x: 1, y: 12 }, { x: 2, y: 40 }, { x: 3, y: 56 }],
            fill: false,
            showLine: true,
            borderDash:[4,4],
            pointBorderWidth: 8,
            pointBorderColor: [
                '#9BDDAD',
                '#B5DC61',
                '#DF6666',
            ],
            pointBackgroundColor: [
                '#9BDDAD',
                '#B5DC61',
                '#DF6666',
            ],
        },
        {
            label: 'Chart 1',
            data: [{ x: 1, y: 22 }, { x: 2, y: 36 }, { x: 3, y: 66 }],
            fill: false,
            showLine: false,
            pointBorderWidth: 8,
            backgroundColor: [
                '#9BDDAD',
                '#B5DC61',
                '#DF6666',
            ],
            borderColor: [
                '#9BDDAD',
                '#B5DC61',
                '#DF6666',
            ],
        },
        {
            label: 'Chart 1',
            data: [{ x: 1, y: 72 }, { x: 2, y: 65 }, { x: 3, y: 16 }],
            fill: false,
            showLine: false,
            pointBorderWidth: 8,
            backgroundColor: [
                '#9BDDAD',
                '#B5DC61',
                '#DF6666',
            ],
            borderColor: [
                '#9BDDAD',
                '#B5DC61',
                '#DF6666',
            ],
        },


    ],
};
function Charts() {
    return (
        <div> <Scatter options={options} data={data} /></div>
    )
}

export default Charts