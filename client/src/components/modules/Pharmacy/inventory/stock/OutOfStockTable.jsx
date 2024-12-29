import Constants from "../../../../../utils/Constants";
import OutOfStockTableRow from "./OutOfStockTableRow";

const OutOfStockTable = () => {
  const outOfStockProducts = Constants?.InventoryTable.filter(stock => (stock?.status === 'Out of stock' || stock?.status === 'Low on stock'));
  
  return (
    <div className="w-full lg:w-[80%] overflow-x-auto mt-5 bg-white px-1.5">
      <table className="table-auto h-fit w-[200%] md:w-full lg:w-[100%]">
        <thead className="text-primary-800 font-bold">
          <tr className="flex w-full py-2.5">
            <th className='text-start w-[5%]'>
              <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
            </th>
            <th className='text-start w-[25%]'>Med. Name</th>
            <th className='text-start w-[15%]'>Batch No.</th>
            <th className='text-start w-[25%]'>Supplier</th>
            <th className='text-start w-[13%]'>Avail. Qty</th>
            <th className='text-start w-[15%]'>Status</th>
            <th className='text-start w-[12%]'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            outOfStockProducts.map((product, index) => {
              return(<OutOfStockTableRow key={index} product={product} index={index} />)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default OutOfStockTable