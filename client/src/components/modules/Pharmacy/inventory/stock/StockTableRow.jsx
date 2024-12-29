/* eslint-disable react/prop-types */
import { addIcon, deleteIcon, editIcon } from "../../../../../assets";
import { customStatusStyle } from "../../../../../utils/Functions";

const StockTableRow = ({ data, index }) => {
  return (
    <tr className={`text-sm text-primary-800 items-center ${index % 2 === 0 ? 'bg-light-grey': 'bg-white' } flex w-full py-2.5`}>
      <td className='w-[4%] mt-0.5'>
        <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
      </td>
      <td className='w-[12%] mt-0.5'>{data?.medicine_name}</td>
      <td className='w-[8%] mt-0.5'>{data?.batch_no}</td>
      <td className='w-[12%] mt-0.5'>{data?.supplier}</td>
      <td className='w-[5%] mt-0.5'>{data?.quantity}</td>
      <td className='w-[5%] mt-0.5'>{data?.available_quantity}</td>
      <td className='w-[5%] mt-0.5'>{data?.price_per_unit}</td>
      <td className='w-[5%] mt-0.5'>{data?.total_cost}</td>
      <td className='w-[5%] mt-0.5'>{data?.sale_price}</td>
      <td className='w-[8%] mt-0.5'>{data?.purchase_date}</td>
      <td className='w-[8%] mt-0.5'>{data?.manufactured_date}</td>
      <td className='w-[8%] mt-0.5'>{data?.expiry_date}</td>
      <td className={`w-[8%] text-xs  mt-0.5 ${customStatusStyle(data?.status)}`}>{data.status}</td>
      <td className='w-[7%] flex gap-x-1 mt-0.5'>
        <img src={addIcon} alt="edit icon" className='w-5 h-5 cursor-pointer' />
        <img src={editIcon} alt="edit icon" className='w-5 h-5 cursor-pointer' />
        <img src={deleteIcon} alt="delete icon" className='w-5 h-5 cursor-pointer' />
      </td>
    </tr>
  )
}

export default StockTableRow