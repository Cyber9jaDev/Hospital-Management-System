/* eslint-disable react/prop-types */

import { customStatusStyle } from "../../../../utils/Functions";


const TopBilledInsuranceTableRow = ({ data, index }) => {
  return (
    <tr className={`text-sm text-primary-800 items-center ${index % 2 === 0 ? 'bg-light-grey': 'bg-white' } flex w-full py-2.5`}>
      <td className='w-[10%] mt-0.5 lg:ps-3'>
        <input type="checkbox" name="" id="" className="h-4 w-4 cursor-pointer accent-primary-base" />
      </td>
      <td className='w-[38%] mt-0.5'>{data?.insurance_name}</td>
      <td className='w-[32%] mt-0.5'>{data?.insurance_amount}</td>
      <td className={`w-[20%] mt-0.5 ${customStatusStyle(data?.claims_status)}`}>{data?.claims_status}</td>
    </tr>
  )
}

export default TopBilledInsuranceTableRow;