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

const getBackgroundColor = (value) => {
  if (value < 100 ) return '#EB5757'
  else if (value >= 100 && value < 200) return '#E2B93B'
  else if (value >= 200) return '#1FFFA5'
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Inventory Status',
    },
  },
  scales: {
    x: {
      grid: {
        display: true, // Remove x-axis grid lines
        drawTicks: false
      },
      ticks: {
        color: '#95ACCE', // Customize y-axis tick color,
        font: {
          weight: 'normal', // Make the font weight light
          size: 14
        }
      }
    },
    y: {
      grid: {
        color: 'rgba(140, 156, 183, 0.5)',
        display: true, // Remove y-axis grid lines,
        drawTicks: true
      },
      ticks: {
        color: '#95ACCE', // Customize y-axis tick color,
        font: {
          weight: 'normal', // Make the font weight bold
          size: 14
        }
      }
    }
  }
};

const labels = ['034', '034', '034', '034', '034', '034', '034'];

const data = {
  labels,
  datasets: [
    {
      label: 'Total Billings',
      data: [120, 40, 230, 150, 190, 250, 20],
      backgroundColor: (context) => {
        const value = context.dataset.data[context.dataIndex];
        return getBackgroundColor(value);
      },
      borderRadius: 15,
      barPercentage: 0.5,
    },
  ],
};

const InventoryChart = () => {
  return (
    <Bar options={options} data={data} />
  )
}

export default InventoryChart;