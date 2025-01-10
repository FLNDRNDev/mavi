'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutCart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [ 2333, 2551, 1078 ],
        backgroundColor: ['#07474b6', '#2265d8', '#2f91fa'],
      },
    ],
    labels: ['Pension Fonds', 'Small Fonds', 'Deposit Fonds'],
  };

  return (
    <div className='size-28 w-full flex items-center gap-4'> 
      <Doughnut 
        data={data} 
        options={{
          cutout: '60%',
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  )
}

export default DoughnutCart