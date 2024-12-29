
const PaymentModeSelect = () => {
  return (
    <div className="flex items-center gap-x-3">
      <h5 className="text-primary-900 font-[600]">Payment Mode</h5>
      <select className="rounded-md shadow-primary p-2.5 outline-none">
        <option value="cash">Cash</option>
        <option value="check">Check</option>
        <option value="mobile_money">Mobile Money</option>
        <option value="card">Card</option>
      </select>
    </div>
    
  )
}

export default PaymentModeSelect;