const RenderTotalRow = () => {
  return (
    <tr className="text-base text-primary-800 flex w-full py-3 bg-white">
      <th className='text-end w-[60%] pr-24'>TOTAL</th>
      <th className='text-start w-[10%]'>{`90.00`}</th>
      <th className='text-start w-[10%]'>{`0.00`}</th>
      <th className='text-start w-[10%]'>{`0.00`}</th>
    </tr>         
  )
}

export default RenderTotalRow