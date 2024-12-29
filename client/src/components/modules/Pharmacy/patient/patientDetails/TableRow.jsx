/* eslint-disable react/prop-types */
import { deleteIcon, editIcon } from "../../../../../assets";
import { customStatusStyle } from "../../../../../utils/Functions";

const TableRow = ({ data, index }) => {
  return (
    <tr className={`items-center ${index % 2 === 0 ? 'bg-light-grey': 'bg-white' } flex w-full py-2.5`}>
      <td className='ps-3 text-primary-900 text-sm w-[6%] flex items-center mt-0.5'>
        <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
      </td>
      <td className='text-primary-900 text-sm w-[15%] mt-0.5'>{data?.date}</td>
      <td className='text-primary-900 text-sm w-[20%] mt-0.5'>{data?.prescription_ID}</td>
      <td className='text-primary-900 text-sm w-[30%] mt-0.5'>{data?.prescribing__Dr}</td>
      <td className={`${customStatusStyle(data?.status)} text-xs w-[15%] mt-0.5`}>{data.status}</td>
      <td className='text-primary-900 text-sm w-[9%] flex justify-center gap-x-3 mt-0.5'>
        <img src={editIcon} alt="edit icon" className='w-5 h-5 ml-3 cursor-pointer' />
        <img src={deleteIcon} alt="delete icon" className='w-5 h-5 ml-3 cursor-pointer' />
      </td>
    </tr>
  )
}

export default TableRow