import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    annotationPlugin,
    Title,
    Tooltip,
    Legend
);
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const options = {
    responsive: true,
    layout: {
        padding: 20
    },
    //   aspectRatio: 1,
    scales: {
        xAxis: {
            beginAtZero: true,
            grid: {
                // display:false,
                lineWidth: 1,
                borderWidth: 1,
                tickWidth: 3
            },

        },
        yAxes: {
            grid: {
                borderColor: '#E0E0E0',
                borderDash: [7, 3]
            },
            beginAtZero: true,
            lineWidth: 5,
            max: 100,
            ticks: {
                stepSize: 20,
                height: 105,
                callback: (context) => {
                    return `${context}%`
                }
            }
        },
    },

    plugins: {
        annotation: {
            annotations: {
                line1: {
                    type: 'line',
                    scaleID:'xAxis',
                    
                    value:labels[new Date().getMonth()],
                    label: {
                        content: "Now",
                        enabled: true,
                        position: "end"
                    },
                    borderColor: '#3AB4F9',
                    borderDash:[5,3],
                    borderWidth: 2,
                }
            }
        },
        legend: {
            display: false
        },
        title: {
            display: false,
        },
        tooltip: {
            enabled: true,
            usePointStyle: true,
            displayColors: false,
            yAlign: 'bottom',
            xAlign: 'center',
            fontSize: 20,
            fontWeight: "bold",
            callbacks: {
                label: function (context) {
                    //    console.log(context);
                    return `${context.raw}% Perfect`
                }
            }
        },

    },
};


export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [65, 79, 80, 81, 56, 55],
            tension: 0.5,
            borderColor: '#5193F5',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [35, 49, 60, 31, 36, 40],
            tension: 0.5,
            borderColor: '#A4A4A4',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function LineChart() {
    return (
        <div><Line options={options} data={data} /></div>
    )
}

