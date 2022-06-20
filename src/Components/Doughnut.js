import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Perfect', 'Good ', 'Bad'],
    datasets: [
        {
            data: [72, 18, 10],
            backgroundColor: [
                '#27C052',
                '#DF6666',
                '#ABD84B',
            ],
            borderColor: [
                '#27C052',
                '#DF6666',
                '#ABD84B',
            ],


        },
    ],
};


// const centerText = {
//     id:'centerText',
//     afterDatasetsDraw(chart){
//         let {context} = chart;
//         context.save();
//         console.log(context);
//         context.font = 'bolder 30px Arial';
//         // context.fillStyle = '#ABD84B',
//         context.fillText = 'MLO'
//     }
// }
export const options = {
    maintainAspectRatio: false,
    cutout: '85%',
    plugins: {
        legend:{
            display:false
        },
    }
}

export function DoughnutChart() {
    return <>
        <div>
            <Doughnut data={data} options={options} />
        </div>
    </>;
}
