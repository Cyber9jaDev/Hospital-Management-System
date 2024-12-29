import Constants from "../../../../../utils/Constants";
import TableRow from "./TableRow";

const PatientPersonalTable = () => {
  return (
    <section className="w-full md:flex-1">
      <div className="w-full overflow-x-auto bg-white">
        <table className="table-auto h-fit w-[170%] md:w-[100%] lg:w-full">
          <thead>
            <tr className="flex w-full py-3">
              <th className='ps-3 text-primary-800 text-base text-start font-bold w-[6%]'>
                <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
              </th>
              <th className='text-primary-800 text-base text-start font-bold w-[15%]'>Date</th>
              <th className='text-primary-800 text-base text-start font-bold w-[20%]'>Prescription ID</th>
              <th className='text-primary-800 text-base text-start font-bold w-[30%]'>Prescribing Dr.</th>
              <th className='text-primary-800 text-base text-start font-bold w-[15%]'>Status</th>
              <th className='text-primary-800 text-base text-center font-bold w-[9%]'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              Constants?.PatientPersonalTable?.map((data, index) => {
                return(<TableRow key={index} data={data} index={index} />)
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PatientPersonalTable;