import StockTableRow from "./StockTableRow";
import Constants from "../../../../../utils/Constants";

const StockTable = () => {
  return (
    <div className="w-full overflow-x-auto mt-5 bg-white px-1.5">
      <table className="table-auto h-fit w-[370%] md:w-[170%] lg:w-full">
        <thead className="text-primary-800 font-bold">
          <tr className="flex w-full py-2.5">
            <th className='text-start w-[4%]'>
              <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
            </th>
            <th className='text-start w-[12%]'>Med. Name</th>
            <th className='text-start w-[8%]'>Batch No.</th>
            <th className='text-start w-[12%]'>Supplier</th>
            <th className='text-start w-[5%]'>Qty</th>
            <th className='text-start w-[5%]'>Avail. Qty</th>
            <th className='text-start w-[5%]'>Price /Unit</th>
            <th className='text-start w-[5%]'>Total Cost</th>
            <th className='text-start w-[5%]'>Sale Price</th>
            <th className='text-start w-[8%]'>Purchase Date</th>
            <th className='text-start w-[8%]'>Mfg. Date</th>
            <th className='text-start w-[8%]'>Exp. Date</th>
            <th className='text-start w-[8%]'>Status</th>
            <th className='text-start w-[7%]'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Constants?.InventoryTable?.map((data, index) => {
              return(<StockTableRow key={index} data={data} index={index} />)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default StockTable