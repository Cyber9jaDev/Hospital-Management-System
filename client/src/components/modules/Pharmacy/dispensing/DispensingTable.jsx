import { useState } from "react";
import Constants from "../../../../utils/Constants";
import DispensingTableRow from "./DispensingTableRow";

const DispensingTable = () => {
  const [selectAll, setSelectAll] = useState(false);
  return (
    <div className="w-full overflow-x-auto mt-3">
      <table className="table-auto h-fit w-[240%] md:w-[150%] lg:w-full">
        <thead>
          <tr className="flex w-full py-3">
            <th className='ps-3 text-primary-800 text-base text-start font-bold w-[6%]'>
              <input onChange={() => setSelectAll(all => !all)} type="checkbox" className="accent-primary-base cursor-pointer w-4 h-4" />
            </th>
            <th className='text-primary-800 text-base text-start font-bol w-[12%]'>Issue Date</th>
            <th className='text-primary-800 text-base text-start font-bol w-[15%]'>UHID</th>
            <th className='text-primary-800 text-base text-start font-bol w-[17%]'>Patient Name</th>
            <th className='text-primary-800 text-base text-start font-bol w-[18%]'>Prescription ID</th>
            <th className='text-primary-800 text-base text-start font-bol w-[10%]'>Bill No.</th>
            <th className='text-primary-800 text-base text-start font-bol w-[13%]'>Status</th>
            <th className='text-primary-800 text-base text-center font-bol w-[9%]'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Constants.dispensingTable.map((data, index) => {
              return( 
                <DispensingTableRow 
                  key={index} 
                  data={data} 
                  index={index} 
                  selectAll={selectAll}
                  setSelectAll={setSelectAll}
                /> )
            })
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default DispensingTable