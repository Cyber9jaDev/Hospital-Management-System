import { useState } from "react"
import StatusButton from "./StatusButton";
import InventoryChart from "../../../charts/InventoryChart";
import { AlertIcon } from "../../../../assets";

const InventoryStatus = () => {
  const [isStatusVisible, setStatusVisibility] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('verify_pending');

  return (
    <section className='h-full w-full ml-0 mt-10 lg:ml-4 lg:mt-0 lg:w-[38%] shadow-secondary lg:h-full rounded-[8px] bg-white'> 
      <header className="h-[52px] px-2 flex self-center items-center justify-between border-b-1 border-b-base">
        <h4 className="text-primary-500 text-xl">Inventory Status</h4>
        <div className="ml-auto flex items-end flex-col relative">
          <svg onClick={() => setStatusVisibility(prev => !prev)} className="w-5 h-5 cursor-pointer mr-4" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.625 10.5C5.625 11.5355 4.78553 12.375 3.75 12.375C2.71447 12.375 1.875 11.5355 1.875 10.5C1.875 9.46447 2.71447 8.625 3.75 8.625C4.78553 8.625 5.625 9.46447 5.625 10.5Z" fill="#193A6F"/>
            <path d="M11.875 10.5C11.875 11.5355 11.0355 12.375 10 12.375C8.96447 12.375 8.125 11.5355 8.125 10.5C8.125 9.46447 8.96447 8.625 10 8.625C11.0355 8.625 11.875 9.46447 11.875 10.5Z" fill="#193A6F"/>
            <path d="M16.25 12.375C17.2855 12.375 18.125 11.5355 18.125 10.5C18.125 9.46447 17.2855 8.625 16.25 8.625C15.2145 8.625 14.375 9.46447 14.375 10.5C14.375 11.5355 15.2145 12.375 16.25 12.375Z" fill="#193A6F"/>
          </svg>
          { isStatusVisible 
              && <div className="w-60 p-2 flex flex-col items-start gap-0.5 absolute top-5 bg-white shadow-variant-2 rounded-md">
                    <StatusButton status={'Verify Pending'} statusKey={'verify_pending'} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                    <StatusButton status={'Dispense Verified'} statusKey={'dispense_verified'} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                    <StatusButton status={'manage Orders'} statusKey={'manage_orders'} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                </div>
          }
        </div>
      </header>

      <div className="p-1.5">
        <div className='flex flex-col items-center justify-center h-full w-full lg:py-3 lg:px-2.5'>
          <InventoryChart />
        </div>
        <div className='flex gap-5 justify-end items-center w-full'>
            <span className='bg-[#D5FAEB] p-1 rounded-[20px] text-[10px] font-bold text-success'>Adequate stock</span>
            <span className='bg-warning-100 p-1 rounded-[20px] text-[10px] font-bold text-warning'>Low on stock</span>
            <span className='bg-[#FDEDED] p-1 rounded-[20px] text-[10px] font-bold text-error mr-5'>Out of stock</span>
        </div>
        <div className='flex gap-1 items-center w-full'>
          <img src={AlertIcon} alt="alert" className='ml-4' />
          <span className="text-error font-bold text-[12px] mt-1">Medication with code 039 is out of stock</span>
        </div>
      </div>
    </section>
  )
}

export default InventoryStatus;