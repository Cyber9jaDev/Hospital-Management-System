import Constants from "../../../../../utils/Constants";
import OrderDetailsTableRow from "./OrderDetailsTableRow";
import RenderTotalRow from "./RenderTotalRow";

const OrderDetailsTable = () => {
  return (
    <div className="w-full overflow-x-auto mt-3">
      <table className="table-auto h-fit w-[240%] md:w-[150%] lg:w-full">
        <thead>
          <tr className="text-base text-primary-800 flex w-full py-3 lg:ps-2 bg-white">
            <th className='text-start font-bold w-[5%]'>
              <input type="checkbox" className="accent-primary-base cursor-pointer w-4 h-4" />
            </th>
            <th className='text-start w-[15%]'>Service Name</th>
            <th className='text-start w-[20%]'>Doctor</th>
            <th className='text-start w-[10%]'>Quantity</th>
            <th className='text-start w-[10%]'>Unit Amt.</th>
            <th className='text-start w-[10%]'>Amt(GH₵)</th>
            <th className='text-start w-[10%]'>Discount</th>
            <th className='text-start w-[10%]'>Deductibles</th>
            <th className='text-center w-[10%]'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Constants.Table.slice(0, 3).map((data, index) => {
              return(<OrderDetailsTableRow key={index} {...data } index={index} />)
            })
          }
          <RenderTotalRow/>
        </tbody>
      </table>
    </div>
  )
}

export default OrderDetailsTable;