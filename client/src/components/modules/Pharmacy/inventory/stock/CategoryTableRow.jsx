/* eslint-disable react/prop-types */
import { deleteIcon, editIcon } from "../../../../../assets";

const CategoryTableRow = ({ product, index }) => {
  return (
    <tr className={`text-sm text-primary-800 items-center ${index % 2 === 0 ? 'bg-light-grey': 'bg-white' } flex w-full py-2.5`}>
      <td className='w-[15%] mt-0.5'>
        <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
      </td>
      <td className='w-[55%] mt-0.5'>{product?.category_name}</td>
      <td className='w-[30%] flex gap-x-4 mt-0.5'>
        <img src={editIcon} alt="edit icon" className='w-5 h-5 cursor-pointer' />
        <img src={deleteIcon} alt="delete icon" className='w-5 h-5 cursor-pointer' />
      </td>
    </tr>
  )
}

export default CategoryTableRow