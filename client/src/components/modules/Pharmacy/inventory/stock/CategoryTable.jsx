import Constants from "../../../../../utils/Constants"
import CategoryTableRow from "./CategoryTableRow"

const CategoryTable = () => {
  return (
    <div className="w-full md:w-[50%] lg:w-[25%] overflow-x-auto mt-5 bg-white px-1.5">
      <table className="table-auto h-fit w-full">
        <thead className="text-primary-800 font-bold">
          <tr className="flex w-full py-2.5">
            <th className='text-start w-[15%]'>
              <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base"/>
            </th>
            <th className='text-start w-[55%]'>Category Name</th>
            <th className='text-start w-[30%]'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Constants?.InventoryTable.map((product, index) => {
              return(<CategoryTableRow key={index} product={product} index={index} />)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default CategoryTable