/* eslint-disable react/prop-types */
import { customStatusStyle } from "../../../../utils/Functions";
import { OPEN_PRESCRIPTION_DETAILS_MODAL } from "../../../../contexts/Actions";
import { deleteIcon, editIcon } from "../../../../assets";
import { UseGlobalContext } from "../../../../contexts/GlobalContext";

const PrescriptionTableRow = ({ setPrescriptionUHID, index, data }) => {
  const { dispatch } = UseGlobalContext();

  function openPrescriptionDetailsPopoverModal(UHID){ 
    setPrescriptionUHID(UHID);
    dispatch({ type: OPEN_PRESCRIPTION_DETAILS_MODAL }); 
  }

  return (
    <tr className={`${index % 2 === 0 ? 'bg-light-grey': 'bg-white' } flex w-full py-3`}>
      <td className='ps-3 text-primary-900 text-sm w-[6%]'>
        <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
      </td>
      <td className='text-primary-900 text-sm w-[10%]'>{data.issue_date}</td>
      <td className='text-primary-900 text-sm w-[12%]'>{data.UHID}</td>
      <td className='text-primary-900 text-sm w-[17%]'>{data.patient_name}</td>
      <td className='text-primary-900 text-sm w-[12%]'>{data.patient_age}</td>
      <td className='text-primary-900 text-sm w-[13%]'>{data?.prescription_ID}</td>
      <td className='text-primary-900 text-sm w-[18%]'>{data?.prescribing__Dr}</td>
      <td className={`${customStatusStyle(data.status)} text-xs w-[15%]`}>{data.status}</td>
      <td className='text-primary-900 text-sm w-[9%] flex justify-center gap-x-3'>
        <img onClick={ () => openPrescriptionDetailsPopoverModal(data?.UHID) } src={editIcon} alt="edit icon" className='w-5 h-5 ml-3 cursor-pointer' />
        <img src={deleteIcon} alt="delete icon" className='w-5 h-5 ml-3 cursor-pointer' />
      </td>
    </tr>
  )
}

export default PrescriptionTableRow