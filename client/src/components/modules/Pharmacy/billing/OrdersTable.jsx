import Constants from "../../../../utils/Constants";
import OrdersTableRow from "./OrdersTableRow";

const OrdersTable = () => {
  return (
    <div className="w-full overflow-x-auto mt-5 bg-white px-1.5">
      <table className="table-auto h-fit w-[370%] md:w-[180%] lg:w-full">
        <thead className="text-primary-800 font-bold">
          <tr className="flex w-full py-2.5">
            <th className='text-start w-[5%]'>
              <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
            </th>
            <th className='text-start w-[8%]'>Date</th>
            <th className='text-start w-[12%]'>Prescription ID</th>
            <th className='text-start w-[17%]'>Patient Name</th>
            <th className='text-start w-[11%]'>Amount (Ghs)</th>
            <th className='text-start w-[13%]'>Payment Mode</th>
            <th className='text-start w-[15%]'>Prescribing Dr.</th>
            <th className='text-start w-[11%]'>Status</th>
            <th className='text-start w-[8%]'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Constants?.Table?.map((data, index) => {
              return(<OrdersTableRow key={index} data={data} index={index} />)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default OrdersTable