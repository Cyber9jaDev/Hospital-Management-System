/* eslint-disable react/prop-types */
import { customStatusStyle } from "../../../../../utils/Functions";
import { addIcon, deleteIcon } from "../../../../../assets";

const OutOfStockTableRow = ({ product, index }) => {
  return (
    <tr className={`text-sm text-primary-800 items-center ${index % 2 === 0 ? 'bg-light-grey': 'bg-white' } flex w-full py-2.5`}>
      <td className='w-[5%] mt-0.5'>
        <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
      </td>
      <td className='w-[25%] mt-0.5'>{product?.medicine_name}</td>
      <td className='w-[15%] mt-0.5'>{product?.batch_no}</td>
      <td className='w-[25%] mt-0.5'>{product?.supplier}</td>
      <td className='w-[13%] mt-0.5'>{product?.available_quantity}</td>
      <td className={`w-[15%] text-xs  mt-0.5 ${customStatusStyle(product?.status)}`}>{product.status}</td>
      <td className='w-[12%] flex gap-x-2 mt-0.5'>
        <img src={addIcon} alt="edit icon" className='w-5 h-5 cursor-pointer' />
        <img src={deleteIcon} alt="delete icon" className='w-5 h-5 cursor-pointer' />
      </td>
    </tr>
  )
}

export default OutOfStockTableRow;