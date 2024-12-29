/* eslint-disable react/prop-types */
import { deleteIcon, editIcon } from "../../../../../assets";

const SuppliersTableRow = ({ product, index }) => {
  return (
    <tr className={`text-sm text-primary-800 items-center ${index % 2 === 0 ? 'bg-light-grey': 'bg-white' } flex w-full py-2.5`}>
      <td className='w-[5%] mt-0.5'>
        <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
      </td>
      <td className='w-[23%] mt-0.5'>{product?.supplier}</td>
      <td className='w-[23%] mt-0.5'>{product?.telephone_number}</td>
      <td className='w-[22%] mt-0.5'>{product?.email}</td> 
      <td className='w-[15%] mt-0.5'>{product?.address}</td>
      <td className='w-[12%] flex gap-x-2 mt-0.5'>
        <img src={editIcon} alt="edit icon" className='w-5 h-5 cursor-pointer' />
        <img src={deleteIcon} alt="delete icon" className='w-5 h-5 cursor-pointer' />
      </td>
    </tr>
  )
}

export default SuppliersTableRow;