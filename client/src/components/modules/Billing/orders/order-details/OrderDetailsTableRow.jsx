/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { deleteIcon, editIcon } from "../../../../../assets";
import SubServiceTableRow from "./SubServiceTableRow";

const OrderDetailsTableRow = ({ index, selectAll, service_name, doctor, quantity, unit_amount, amount, discount, deductibles, hasSubService, subService }) => {
  const [ isChecked, setIsChecked ] = useState(false);

  return (
      <tr className={`${index % 2 === 0 ? 'bg-light-grey': 'bg-white' } flex flex-col gap-y-5 items-center w-full py-3 lg:ps-2 text-xs md:text-sm`}>
        <td className="w-full flex">
          <span className='w-[5%]'>
            <input type="checkbox" className={`${(selectAll || isChecked) ? 'accent-primary-base' : 'accent-inherit'} cursor-pointer w-4 h-4`} />
          </span>
          <span className="w-[15%]">{service_name}</span>
          <span className="w-[20%]">{doctor}</span>
          <span className="w-[10%]">{quantity}</span>
          <span className="w-[10%]">{unit_amount}</span>
          <span className="w-[10%]">{amount}</span>
          <span className="w-[10%]">{discount}</span>
          <span className="w-[10%]">{deductibles}</span>
          <span className='w-[10%] flex justify-center'>
            <img src={editIcon} alt="edit icon" className='w-5 h-5 ml-3 cursor-pointer'/>
            <img src={deleteIcon} alt="delete icon" className='w-5 h-5 ml-3 cursor-pointer'/>
          </span>
        </td>
    

        {/* SubServices */}
        { hasSubService && subService.map(( service, index) => <SubServiceTableRow key={index} { ...service } />) }
      </tr>
  )
}

export default OrderDetailsTableRow;