import TopBilledInsuranceTableRow from "./TopBilledInsuranceTableRow";
import DatePicker from "../../../reusables/DatePicker";
import Constants from "../../../../utils/Constants";
import { share } from "../../../../assets";

const TopBilledInsurance = () => {
  return (
    <section className='w-full ml-0 lg:w-[49%] shadow-secondary lg:ml-4 mt-10 h-full rounded-[8px] bg-white'>
      <header className="h-[52px] px-2 flex self-center items-center justify-between border-b-1 border-b-base">
        <h4 className="text-primary-500 text-[12px] md:text-xl">Top Billed Insurance</h4>
        <div className="flex gap-x-5">
          <img src={share} alt="share icon" className="cursor-pointer" />
          <DatePicker />
        </div>
      </header>
      <div className="w-full overflow-x-auto mt-5 bg-white px-1.5">
      <table className="table-auto h-fit w-full">
        <thead className="text-primary-800 font-bold">
          <tr className="flex w-full pb-2.5 items-center">
            <th className='text-start w-[10%] lg:ps-3 flex items-center'>
              <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
            </th>
            <th className='text-start w-[35%]'>Insurance Name</th>
            <th className='text-start w-[35%]'>Amount (GH₵)</th>
            <th className='text-start w-[20%]'>Claims Status</th>
          </tr>
        </thead>
        <tbody>
          {
            Constants?.Table?.slice(0, 7).map((data, index) => {
              return(<TopBilledInsuranceTableRow key={index} data={data} index={index} />)
            })
          }
        </tbody>
      </table>
    </div>


    </section>
  )
}

export default TopBilledInsurance;