/* eslint-disable react/prop-types */
import { useState } from "react";
import { customStatusStyle } from "../../../../utils/Functions";
import { deleteIcon, editIcon, printer } from "../../../../assets";
import { Link } from "react-router-dom";

const MedicationOrdersTableRow = ({ selectAll, index, data }) => {
  const [ isChecked, setIsChecked ] = useState(false);

  const handleIsChecked = (e) => {
    e.preventDefault();
    if(selectAll){
      // setSelectAll(false);
      // setIsChecked(prev => !prev);
    }
    setIsChecked(prev => !prev);
  }

  return (
    <tr className={`${index % 2 === 0 ? 'bg-light-grey': 'bg-white' } flex items-center w-full py-3 text-xs md:text-sm`}>
      <td className='ps-3 w-[5%]'>
        {/* <input onClick={() => setIsChecked(prev => !prev)} type="checkbox" checked={selectAll || isChecked} className={`${(selectAll || isChecked) ? 'accent-primary-base' : 'accent-inherit'} cursor-pointer`} /> */}
        <input onChange={handleIsChecked} type="checkbox" checked={selectAll || isChecked} className={`${(selectAll || isChecked) ? 'accent-primary-base' : 'accent-inherit'} cursor-pointer w-4 h-4`} />
      </td>
      <td className='w-[85%] flex items-center'>
        <Link to={`order-details/${data?.uhid}`} className="flex w-full items-center">
          <span className="w-[15%]">{data?.date}</span>
          <span className="w-[15%]">{data?.billing_id}</span>
          <span className="w-[15%]">{data?.uhid}</span>
          <span className="w-[20%]">{data?.patient_name}</span>
          <span className="w-[12%]">{data?.amount}</span>
          <span className="w-[13%]">{data?.payment_mode}</span>
          <span className={`w-[10%] ${customStatusStyle(data?.order_status)}`}>{data?.order_status}</span>
        </Link>
      </td>
      <td className='w-[10%] flex justify-center'>
        <img src={printer} alt="edit icon" className='w-5 h-5 ml-3 cursor-pointer' />
        <img src={editIcon} alt="edit icon" className='w-5 h-5 ml-3 cursor-pointer' />
        <img src={deleteIcon} alt="delete icon" className='w-5 h-5 ml-3 cursor-pointer' />
      </td>
    </tr>
  )
}

export default MedicationOrdersTableRow;