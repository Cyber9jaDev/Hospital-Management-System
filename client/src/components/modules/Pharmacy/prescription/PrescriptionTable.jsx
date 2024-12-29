/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { OPEN_PRESCRIPTION_DETAILS_MODAL } from "../../../../contexts/Actions";
import { UseGlobalContext } from "../../../../contexts/GlobalContext";
import Constants from "../../../../utils/Constants"
import PrescriptionTableRow from "./PrescriptionTableRow";

const PrescriptionTable = ({ setPrescriptionUHID }) => {
  const { dispatch } = UseGlobalContext();

  function openPrescriptionDetailsPopoverModal(UHID){ 
    setPrescriptionUHID(UHID);
    dispatch({ type: OPEN_PRESCRIPTION_DETAILS_MODAL }); 
  }

  return (
    <div className="w-full overflow-x-auto mt-3 bg-white">
      <table className="table-auto h-fit w-[300%] md:w-[150%] lg:w-full">
        <thead>
          <tr className="flex w-full py-3">
            <th className='ps-3 text-primary-800 text-base text-start font-bold w-[6%]'>
              <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
            </th>
            <th className='text-primary-800 text-base text-start font-bol w-[10%]'>Date</th>
            <th className='text-primary-800 text-base text-start font-bol w-[12%]'>UHID</th>
            <th className='text-primary-800 text-base text-start font-bol w-[17%]'>Patient Name</th>
            <th className='text-primary-800 text-base text-start font-bol w-[12%]'>Patient Age</th>
            <th className='text-primary-800 text-base text-start font-bol w-[13%]'>Prescription ID</th>
            <th className='text-primary-800 text-base text-start font-bol w-[18%]'>Prescribing Dr.</th>
            <th className='text-primary-800 text-base text-start font-bol w-[15%]'>Status</th>
            <th className='text-primary-800 text-base text-center font-bol w-[9%]'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Constants.prescriptionTable.map((data, index) => {
              return(
                <PrescriptionTableRow 
                  key={index} 
                  data={data}
                  setPrescriptionUHID={setPrescriptionUHID}
                />
              )
            })
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default PrescriptionTable