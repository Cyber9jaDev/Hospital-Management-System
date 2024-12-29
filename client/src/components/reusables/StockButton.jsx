/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { addWhiteIcon } from '../../assets';

const StockButton = ({ text, link }) => {
  return (
    <button className="ms-auto me-4 flex items-center">
      <Link to={link} className='flex items-center w-full h-full gap-3 bg-primary-base px-4 py-2.5 rounded-md'>
        <img src={addWhiteIcon} alt="add stock" className='w-4 h-4' />
        <span className="text-sm text-white">{text}</span>
      </Link>
    </button>
  )
}

export default StockButton;