import { refreshIcon } from "../../../../assets";
import VerticalBarChart from "../../../charts/VerticalBarChart";
import DatePicker from "../../../reusables/DatePicker";

const BillingSummary = () => {

  return (
    <section className='w-full ml-0 mt-10 lg:ml-4 lg:mt-0 lg:w-[49%] shadow-secondary h-fit rounded-[8px] bg-white'> 
      <header className="h-[52px] px-2 flex self-center items-center justify-between border-b-1 border-b-base">
        <h4 className="text-primary-500 text-xl">Billing Summary</h4>
        <div className='ms-auto flex items-center'>
          <img src={refreshIcon} alt="refresh icon" className="w-5 h-5 cursor-pointer me-4"/>
          <DatePicker />
        </div>
      </header>
        
      {/* Chart */}
      <div className='flex flex-col self-center items-center justify-center h-full py-3'>
        <div className='flex items-center w-full h-full lg:w-[85%] lg:h-[85%]'>
          <VerticalBarChart />
        </div>
        <div className='flex gap-5 justify-end items-end w-full mt-2 mr-14'>
          <span className='bg-light-blue-200 p-1 rounded-[20px] text-[8px] font-bold text-light-blue-base'>Total Billings</span>
          <span className='bg-light-red-100 p-1 rounded-[20px] text-[8px] font-bold text-light-red-base'>Total Payments</span>
        </div>
      </div>
      

    </section>
  )
}

export default BillingSummary;