/* eslint-disable react/prop-types */
import { deleteIcon, editIcon, printer } from "../../../../assets";
import { customStatusStyle } from "../../../../utils/Functions";

const OrdersTableRow = ({ data, index }) => {
  return (
    <tr className={`text-sm text-primary-800 items-center ${index % 2 === 0 ? 'bg-light-grey': 'bg-white' } flex w-full py-2.5`}>
      <td className='w-[5%] mt-0.5'>
        <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
      </td>
      <td className='w-[8%] mt-0.5'>{data?.date}</td>
      <td className='w-[12%] mt-0.5'>{data?.prescription_ID}</td>
      <td className='w-[17%] mt-0.5'>{data?.patient_name}</td>
      <td className='w-[11%] mt-0.5'>{data?.amount}</td>
      <td className='w-[13%] mt-0.5'>{data?.payment_mode}</td>
      <td className='w-[15%] mt-0.5'>{data?.prescribing__Dr}</td>
      <td className={`w-[11%] text-xs  mt-0.5 ${customStatusStyle(data?.billing_status)}`}>{data?.billing_status}</td>
      <td className='w-[8%] flex gap-x-3 mt-0.5'>
        <img src={printer} alt="edit icon" className='w-5 h-5 cursor-pointer' />
        <img src={editIcon} alt="edit icon" className='w-5 h-5 cursor-pointer' />
        <img src={deleteIcon} alt="delete icon" className='w-5 h-5 cursor-pointer' />
      </td>
    </tr>
  )
}

export default OrdersTableRow;