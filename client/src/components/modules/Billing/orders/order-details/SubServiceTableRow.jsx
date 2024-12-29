/* eslint-disable react/prop-types */

const SubServiceTableRow = ({ index, service_name, quantity, unit_amount, amount, discount, deductibles }) => {
  return (
    <td key={index} className="w-full flex text-primary-400">
      <span className='w-[5%]'></span>
      <span className="w-[15%] flex items-center gap-x-1">
        <input type="checkbox" className="cursor-pointer w-4 h-4" /> 
        <span className="mt-0.5">{ service_name }</span>
      </span>
      <span className="w-[20%]"> </span>
      <span className="w-[10%]">{quantity}</span>
      <span className="w-[10%]">{unit_amount}</span>
      <span className="w-[10%]">{amount}</span>
      <span className="w-[10%]">{discount}</span>
      <span className="w-[10%]">{deductibles}</span>
    </td>
  )
}

export default SubServiceTableRow;