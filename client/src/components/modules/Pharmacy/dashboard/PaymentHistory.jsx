import { Link } from 'react-router-dom';
import { formatCurrency } from '../../../../utils/Functions';

const PaymentHistory = () => {
  return (
    <section className='w-full ml-0 lg:w-[calc(28%)] shadow-secondary lg:ml-4 mt-10 h-fit rounded-[8px] bg-white'>
      <header className="h-[52px] px-2 flex self-center items-center justify-between border-b-1 border-b-base">
        <h4 className="text-primary-500 text-xl">Payment History</h4>
      </header>

      <div className='py-5 flex flex-col ps-2 gap-y-1'>
        <h5 className='text-primary-500 text-sm'>Total Billings</h5>
        <h2 className='text-primary-600 text-[34px]'>{formatCurrency(5239.00)}</h2>
        <h5 className='text-primary-500 text-sm'>Pending Payment</h5>
        <h2 className='text-warning text-[34px]'>{formatCurrency(10449.00)}</h2>
        <button className='w-[142px] bg-primary-base text-sm text-white rounded-md h-10'>
          <Link to="#" className='flex self-center items-center justify-center'>
            <span>View Details</span>
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.32739 4.82741C7.65283 4.50197 8.18046 4.50197 8.5059 4.82741L13.0892 9.41074C13.4147 9.73618 13.4147 10.2638 13.0892 10.5893L8.5059 15.1726C8.18046 15.498 7.65283 15.498 7.32739 15.1726C7.00195 14.8472 7.00195 14.3195 7.32739 13.9941L11.3215 10L7.32739 6.00592C7.00195 5.68049 7.00195 5.15285 7.32739 4.82741Z" fill="white"/>
            </svg>
          </Link>
        </button>
      </div>
    </section>
  )
}

export default PaymentHistory