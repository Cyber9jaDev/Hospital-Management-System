import Constants from "../../../../../utils/Constants";
import SuppliersTableRow from "./SuppliersTableRow";

const SuppliersTable = () => {
  return (
    <div className="w-full lg:w-[80%] overflow-x-auto mt-5 bg-white px-1.5">
      <table className="table-auto h-fit w-[200%] md:w-full">
        <thead className="text-primary-800 font-bold">
          <tr className="flex w-full py-2.5">
            <th className='text-start w-[5%]'>
              <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base"/>
            </th>
            <th className='text-start w-[23%]'>Supplier Name</th>
            <th className='text-start w-[23%]'>Telephone Number</th>
            <th className='text-start w-[22%]'>Email Address</th>
            <th className='text-start w-[15%]'>Address</th>
            <th className='text-start w-[12%]'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Constants?.InventoryTable.map((product, index) => {
              return(<SuppliersTableRow key={index} product={product} index={index} />)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default SuppliersTable