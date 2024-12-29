import { deleteIcon, editIcon } from "../../../../../assets";

const DrugTable = () => {
  return (
    <section className="w-full text-primary-800">
      <div className="w-full overflow-x-auto mt-3">
      <table className="table-auto h-fit w-[240%] md:w-[150%] lg:w-full">
        <thead>
          <tr className="flex w-full py-3">
            <th className='ps-3 text-base text-start font-bold w-[6%]'>#</th>
            <th className='text-base text-start font-bol w-[22%]'>Drug Name</th>
            <th className='text-base text-start font-bol w-[10%]'>Quantity</th>
            <th className='text-base text-start font-bol w-[10%]'>Dosage</th>
            <th className='text-base text-start font-bol w-[10%]'>Duration</th>
            <th className='text-base text-start font-bol w-[7%]'>Route</th>
            <th className='text-base text-start font-bol w-[13%]'>Refills</th>
            <th className='text-base text-start font-bol w-[13%]'>Interaction</th>
            <th className='text-base text-center font-bol w-[9%]'>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className='flex w-full py-3'>
            <td className='ps-3 text-sm w-[6%]'>1</td>
            <td className='text-sm w-[22%]'>Paracetamol</td>
            <td className='text-sm w-[10%]'>5</td>
            <td className='text-sm w-[10%]'>2x Daily</td>
            <td className='text-sm w-[10%]'>7 days</td>
            <td className='text-sm w-[7%]'>Oral</td>
            <td className='text-xs w-[13%]'></td>
            <td className='text-xs w-[13%]'>-</td>
            <td className='text-sm w-[9%] flex justify-center gap-x-5'>
              <img src={editIcon} alt="edit icon" className='w-5 h-5 ml-3 cursor-pointer' />
              <img src={deleteIcon} alt="delete icon" className='w-5 h-5 ml-3 cursor-pointer' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </section>
  )
}

export default DrugTable