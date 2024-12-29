import { refreshIcon } from '../../../../assets';
import { formatCurrency } from '../../../../utils/Functions';
import DoughnutChart from '../../../charts/DoughnutChart';
import DatePicker from '../../../reusables/DatePicker';

const BillingOverview = () => {
  
  return (
    <section className="sm:w-full shadow-secondary lg:w-[49%] h-fit rounded-[8px] bg-white z-auto">
      <header className="h-[52px] px-2 flex items-center border-b-1 border-b-base">
        <h4 className="text-primary-500 text-xl">Overview</h4>
        <div className='ms-auto flex items-center'>
          <img src={refreshIcon} alt="refresh icon" className="w-5 h-5 cursor-pointer me-4"/>
          <DatePicker />
        </div>
      </header>

      <div className='py-8 px-2 border-solid border-b-1 border-b-primary-200 flex gap-y-8 gap-x-3 items-center justify-between flex-wrap'>
        <div className='w-full md:w-[49%] flex items-center justify-center h-full relative'>
          <div className='w-full h-full lg:w-[85%] lg:h-[85%]'>
            <DoughnutChart />
          </div>
          <div className='absolute'>
              <h2 className='text-primary-base text-5xl font-bold block'>3265</h2>
              <span className='text-primary-300 text-center block'>{formatCurrency(34243)}</span>
              <span className='text-primary-300 font-bold text-lg text-center block'>Total Orders</span>
            </div>
        </div>
        <div className='w-full lg:w-[49%] flex flex-wrap gap-4 justify-between md:justify-start'>
          
          <div className='w-2/5'>
            <h3 className='text-primary-600 text-2xl'>1,265</h3>
            <p className='text-primary-300 text-sm'>{formatCurrency(1279.00)}</p>
            <small className='text-light-blue-base text-xs bg-light-blue-100 rounded-3xl py-1 px-2'>Completed Orders</small>
          </div>

          <div className='w-2/5'>
            <h3 className='text-primary-600 text-2xl'>1,265</h3>
            <p className='text-primary-300 text-sm'>{formatCurrency(34069.00)}</p>
            <small className='text-deep-red-base text-xs bg-deep-red-100 rounded-3xl py-1 px-2'>Canceled Orders</small>
          </div>

          <div className='w-2/5'>
            <h3 className='text-primary-600 text-2xl'>1,085</h3>
            <p className='text-primary-300 text-sm'>{formatCurrency(12782.00)}</p>
            <small className='text-light-red-base text-xs bg-light-red-100 rounded-3xl py-1 px-2'>Pending Orders</small>
          </div>

          <div className='w-2/5'>
            <h3 className='text-primary-600 text-2xl'>1,085</h3>
            <p className='text-primary-300 text-sm'>{formatCurrency(7289.00)}</p>
            <small className='text-medium-blue-base text-xs bg-medium-blue-100 rounded-3xl  py-1 px-2'>Insurance Claims</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BillingOverview;