/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { OPEN_PRESCRIPTION_DETAILS_MODAL } from "../../contexts/Actions";
// import { UseGlobalContext } from "../../contexts/GlobalContext";
import Constants from "../../../../utils/Constants";
import PatientTableRow from "./PatientTableRow";

const PatientsTable = ({ setPrescriptionUHID }) => {
  // const { dispatch } = UseGlobalContext();

  // function openPrescriptionDetailsPopoverModal(UHID){ 
  //   setPrescriptionUHID(UHID);
  //   dispatch({ type: OPEN_PRESCRIPTION_DETAILS_MODAL }); 
  // }
  
  return (
    <div className="w-full overflow-x-auto mt-3 bg-white">
      <table className="table-auto h-fit w-[270%] md:w-[150%] lg:w-full">
        <thead>
          <tr className="flex w-full py-3">
            <th className='ps-3 text-primary-800 text-base text-start font-bold w-[6%]'>
              <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
            </th>
            <th className='text-primary-800 text-base text-start font-bold w-[20%]'>Patient Name</th>
            <th className='text-primary-800 text-base text-start font-bold w-[15%]'>UHID</th>
            <th className='text-primary-800 text-base text-start font-bold w-[15%]'>Date of Birth</th>
            <th className='text-primary-800 text-base text-start font-bold w-[10%]'>Patient Age</th>
            <th className='text-primary-800 text-base text-start font-bold w-[10%]'>Gender</th>
            <th className='text-primary-800 text-base text-start font-bold w-[15%]'>Mobile</th>
            <th className='text-primary-800 text-base text-start font-bold w-[12%]'>Status</th>
            <th className='text-primary-800 text-base text-center font-bold w-[9%]'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Constants?.patientsTable?.map((data, index) => {
              return(<PatientTableRow key={index} data={data} index={index} />)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default PatientsTable