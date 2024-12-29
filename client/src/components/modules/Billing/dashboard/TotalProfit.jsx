import { share } from "../../../../assets";
import AreaChart from "../../../charts/AreaChart";
import DatePicker from "../../../reusables/DatePicker";

const TotalProfit = () => {

  return (
    <section className="w-full shadow-secondary lg:w-[49%] mt-10 rounded-[8px] h-full bg-white flex flex-col">
      <header className="w-full h-[52px] px-2 flex items-center justify-between border-b-1 border-b-base">
        <h4 className="text-primary-500 text-xl">Total Profit</h4>
        <div className="flex gap-x-5">
          <img src={share} alt="share icon" className="cursor-pointer" />
          <DatePicker />
        </div>
      </header>
      
      {/* Chart */}
      <div className='w-full h-full flex items-center justify-center'>
        <div className="flex items-center justify-center w-full h-full lg:h-[100%] lg:w-[100%] lg:p-4">
          <AreaChart />
        </div>
      </div>
    </section>
  )
}

export default TotalProfit