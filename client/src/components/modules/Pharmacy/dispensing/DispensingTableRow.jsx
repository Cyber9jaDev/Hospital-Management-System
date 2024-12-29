import { useState } from "react";
import { deleteIcon, editIcon } from "../../../../assets"
import { UseGlobalContext } from "../../../../contexts/GlobalContext";
import { customStatusStyle } from "../../../../utils/Functions";

/* eslint-disable react/prop-types */
const DispensingTableRow = ({ index, data, selectAll }) => {
  const [ isChecked, setIsChecked ] = useState(false);
  const { openModal } = UseGlobalContext();

  const handleIsChecked = (e) => {
    e.preventDefault();
    if(selectAll){
      // setSelectAll(false);
      // setIsChecked(prev => !prev);
    }
    setIsChecked(prev => !prev);
  }

  return (
    <tr className={`${index % 2 === 0 ? 'bg-light-grey': 'bg-white' } flex w-full py-3`}>
      <td className='ps-3 text-primary-900 text-sm w-[6%]'>
        {/* <input onClick={() => setIsChecked(prev => !prev)} type="checkbox" checked={selectAll || isChecked} className={`${(selectAll || isChecked) ? 'accent-primary-base' : 'accent-inherit'} cursor-pointer`} /> */}
        <input onChange={handleIsChecked} type="checkbox" checked={selectAll || isChecked} className={`${(selectAll || isChecked) ? 'accent-primary-base' : 'accent-inherit'} cursor-pointer w-4 h-4`} />
      </td>
      <td className='text-primary-900 text-sm w-[12%]'>{data?.issue_date}</td>
      <td className='text-primary-900 text-sm w-[15%]'>{data?.UHID}</td>
      <td className='text-primary-900 text-sm w-[17%]'>{data?.patient_name}</td>
      <td className='text-primary-900 text-sm w-[18%]'>{data?.prescription_no}</td>
      <td className='text-primary-900 text-sm w-[10%]'>{data?.bill_no}</td>
      <td className={`${customStatusStyle(data?.status)} text-xs w-[13%]`}>{data?.status}</td>
      <td className='text-primary-900 text-sm w-[9%] flex justify-center'>
        <img onClick={ openModal } src={editIcon} alt="edit icon" className='w-5 h-5 ml-3 cursor-pointer' />
        <img src={deleteIcon} alt="delete icon" className='w-5 h-5 ml-3 cursor-pointer' />
      </td>
    </tr>
  )
}

export default DispensingTableRow