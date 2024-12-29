import { useState } from "react";
import Constants from "../../../../utils/Constants";
import MedicationOrdersTableRow from "./MedicationOrdersTableRow";

const MedicationOrdersTable = () => {
  const [selectAll, setSelectAll] = useState(false);

  return (
    <div className="w-full overflow-x-auto mt-3 bg-white text-primary-800">
      <table className="table-auto h-fit w-[240%] md:w-[150%] lg:w-full">
        <thead >
          <tr className="flex w-full py-3 items-center text-base">
            <th className='ps-3 text-start font-bold w-[5%]'>
              <input onChange={() => setSelectAll(all => !all)} type="checkbox" className="accent-primary-base cursor-pointer w-4 h-4" />
            </th>
            <th className='text-sm text-start w-[85%] flex justify-between items-center'>
              <span className="w-[15%]">Date</span>
              <span className="w-[15%]">Billing ID</span>
              <span className="w-[15%]">UHID</span>
              <span className="w-[20%]">Patient Name</span>
              <span className="w-[12%]">Amount (GH₵)</span>
              <span className="w-[13%]">Payment Mode</span>
              <span className="w-[10%]">Status</span>
            </th>
            <th className='w-[10%] '>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Constants.Table.map((data, index) => {
              return( 
                <MedicationOrdersTableRow 
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

export default MedicationOrdersTable;