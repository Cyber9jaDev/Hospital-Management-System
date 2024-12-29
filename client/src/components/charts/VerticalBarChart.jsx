import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Total Billings and Total Payment',
    },
  },
  scales: {
    x: {
      grid: {
        display: false // Remove x-axis grid lines
      },
      ticks: {
        color: '#8C9CB7', // Customize y-axis tick color,
        font: {
          weight: 'bold', // Make the font weight bold
          size: 10
        }
      }
    },
    y: {
      grid: {
        color: 'rgba(140, 156, 183, 0.5)',
        display: true, // Remove y-axis grid lines,
        drawTicks: false
      },
      ticks: {
        color: '#8C9CB7', // Customize y-axis tick color,
        font: {
          weight: 'bold', // Make the font weight bold
          size: 10
        }
      }
    }
  }
};

const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const data = {
  labels,
  datasets: [
    {
      label: 'Total Billings',
      data: [120, 190, 230, 150, 150, 150, 90, 240, 160, 180, 200, 150],
      backgroundColor: '#4EAAE4',
      borderRadius: 5,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
      
    },
    {
      label: 'Total Payments',
      data: [70, 190, 150, 50, 80, 100, 50, 100, 200, 120, 130, 200],
      backgroundColor: '#E9A5BD',
      borderRadius: 5,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
  ],
};

const VerticalBarChart = () => {
  return (
    <Bar options={options} data={data} />
  )
}

export default VerticalBarChart;