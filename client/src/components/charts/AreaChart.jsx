import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const createGradient = () => {
  const ctx = document.createElement('canvas').getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(78, 170, 228, 0.3)'); // Start color with opacity
  gradient.addColorStop(1, 'rgba(78, 170, 228, 0)'); // End color with transparency
  return gradient;
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
    x: {
      grid: {
        // color: 'rgba(140, 156, 183, 0.2)',
        color: createGradient(),
        display: true, // Remove x-axis grid lines
        drawTicks: false
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
      beginAtZero: true,
      grid: {
        // color: 'rgba(140, 156, 183, 0.2)',
        color: createGradient(),
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
      fill: true,
      data: [130, 300, 250, 270, 220, 330, 290, 220, 280, 190, 280, 300],
      label: 'Total Profit',
      borderColor: 'rgba(78, 170, 228, 1)',
      backgroundColor: createGradient(),
      lineTension: 0.4,
      pointRadius: 0, // Set pointRadius to 0 to remove dots
    },
  ],
};

const AreaChart = () => {
  return (
    <Line options={options} data={data} />
  );
}

export default AreaChart;