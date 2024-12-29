import { AlertIcon, infoIcon, prescriptionIcon, refreshIcon } from "../../../../assets";
import { formatCurrency } from "../../../../utils/Functions";
import DatePicker from "../../../reusables/DatePicker";

const Overview = () => {
  
  return (
    <section className="sm:w-full shadow-secondary lg:w-[60%] h-fit rounded-[8px] bg-white z-auto">
      <header className="h-[52px] px-2 flex items-center border-b-1 border-b-base">
        <h4 className="text-primary-500 text-xl">Overview</h4>
        <div className='ms-auto flex items-center'>
          <img src={refreshIcon} alt="refresh icon" className="w-5 h-5 cursor-pointer me-4"/>
          <DatePicker />
        </div>
      </header>

      <div className='px-2 py-9 border-solid border-b-1 border-b-primary-200 flex gap-y-8 justify-between flex-wrap'>
        <div className='w-full md:w-1/2'>
          <p className='text-primary-500 text-sm'>Over all Medication Orders </p>
          <div className='mt-3 flex items-center'>
            <div className='w-[70px] h-[70px] rounded-full bg-light-red-200 flex items-center justify-center'>
              <img src={prescriptionIcon} alt="prescription logo" className="w-[30px] h-[30px]" />
            </div>
            <div className='ms-3'>
              <h1 className='text-primary-600 text-5xl'>1,185</h1>
              <p className='text-sm text-primary-300'>{formatCurrency(9089.00)}</p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 flex flex-wrap gap-4 justify-between md:justify-start'>
          <div className='w-2/5'>
            <h3 className='text-primary-600 text-2xl'>1,085</h3>
            <p className='text-primary-300 text-sm'>{formatCurrency(1279.00)}</p>
            <small className='text-warning text-xs bg-warning-100 rounded py-0.5 px-1'>Pending verification</small>
          </div>

          <div className='w-2/5'>
            <h3 className='text-primary-600 text-2xl'>435</h3>
            <p className='text-primary-300 text-sm'>{formatCurrency(34069.00)}</p>
            <small className='text-success text-xs bg-success-100 rounded py-0.5 px-1'>Verified</small>
          </div>

          <div className='w-2/5'>
            <h3 className='text-primary-600 text-2xl'>1,085</h3>
            <p className='text-primary-300 text-sm'>{formatCurrency(12782.00)}</p>
            <small className='text-warning text-xs bg-warning-100 rounded py-0.5 px-1'>Pending payment</small>
          </div>

          <div className='w-2/5'>
            <h3 className='text-primary-600 text-2xl'>1,085</h3>
            <p className='text-primary-300 text-sm'>{formatCurrency(7289.00)}</p>
            <small className='text-info text-xs bg-light-blue-100 rounded py-0.5 px-1'>Dispensed</small>
          </div>
        </div>
      </div>

      {/* Appointment, Allergy Report */}
      <div className='px-2 py-4 gap-y-5 md:flex justify-between flex-wrap'>
        <div className='w-full flex items-center text-error text-xs font-bold md:w-1/2'>
          <img src={AlertIcon} alt="alert icon" className='w-5 h-5' />
          <h5 className='text-error font-bold text-xs ms-1'>5 allergy report.</h5> <span className='cursor-pointer text-deep-red-500 text-xs font-medium ms-1'>View details</span>
        </div>
        <div className='w-full flex my-4 items-center text-error text-xs font-bold md:w-1/2 md:my-0'>
          <img src={infoIcon} alt="alert icon" className='w-5 h-5' />
          <h5 className='text-info font-bold text-xs ms-1'>5 prescription refill request.</h5> <span className='cursor-pointer text-deep-red-500 text-xs font-medium ms-1'>View details</span>
        </div>
        <div className='w-full flex items-center text-error text-xs font-bold md:w-1/2'>
          <img src={infoIcon} alt="alert icon" className='w-5 h-5' />
          <h5 className='text-info font-bold text-xs ms-1'>5 upcoming appointments.</h5> <span className='cursor-pointer text-deep-red-500 text-xs font-medium ms-1'>View details</span>
        </div>
      </div>
    </section>
  )
}

export default Overview;