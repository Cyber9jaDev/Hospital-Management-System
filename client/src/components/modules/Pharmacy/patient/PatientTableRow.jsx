/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { deleteIcon, editIcon, profileSmall } from "../../../../assets";
import { customStatusStyle } from "../../../../utils/Functions";

const PatientTableRow = ({ data, index }) => {
  return (
    <tr className={`items-center ${index % 2 === 0 ? 'bg-light-grey': 'bg-white' } flex w-full py-2.5`}>
      <td className='ps-3 text-primary-900 text-sm w-[6%] flex items-center mt-0.5'>
        <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base"/>
      </td>
      <td className='text-primary-900 text-sm w-[20%] mt-0.5'>
        <Link to={`patient-details/${data?.UHID}`} className="flex items-center gap-x-2 w-fit">
          <img src={profileSmall} alt="profile icon" />
          <span>{data.patient_name}</span>
        </Link>
      </td>
      <td className='text-primary-900 text-sm w-[15%] mt-0.5'>{data?.UHID}</td>
      <td className='text-primary-900 text-sm w-[15%] mt-0.5'>{data?.dob}</td>
      <td className='text-primary-900 text-sm w-[10%] mt-0.5'>{data?.patient_age}</td>
      <td className='text-primary-900 text-sm w-[10%] mt-0.5'>{data?.gender}</td>
      <td className='text-primary-900 text-sm w-[15%] mt-0.5'>{data?.mobile}</td>
      <td className={`${customStatusStyle(data?.status)} text-xs w-[12%] mt-0.5`}>{data.status}</td>
      <td className='text-primary-900 text-sm w-[9%] flex justify-center gap-x-3 mt-0.5'>
        <img src={editIcon} alt="edit icon" className='w-5 h-5 ml-3 cursor-pointer' />
        <img src={deleteIcon} alt="delete icon" className='w-5 h-5 ml-3 cursor-pointer' />
      </td>
    </tr>
  )
}

export default PatientTableRow