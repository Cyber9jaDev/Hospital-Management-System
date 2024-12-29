import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  cutout: '92%',
  spacing: 7,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const data = {
  labels: ['Canceled Orders', 'Completed Orders', 'Pending Orders', 'Insurance Claims'],
  datasets: [
    {
      label:'',
      data: [300, 600, 500, 550],
      backgroundColor: [
        '#A81A4C',
        '#4EAAE4',
        '#E9A5BD',
        '#4F75AD',
      ],
      borderColor: [
        '#A81A4C',
        '#4EAAE4',
        '#E9A5BD',
        '#4F75AD',
      ],
      borderWidth: 1,
      borderRadius: 10
    },
  ],
};

const DoughnutChart = () => {
  return (
    <Doughnut data={data} options={options} />
  )
}

export default DoughnutChart