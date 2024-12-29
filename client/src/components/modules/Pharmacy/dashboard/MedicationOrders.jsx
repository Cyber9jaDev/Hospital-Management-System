import { useState } from "react";
import StatusButton from "./StatusButton";
import { medicationOrders } from "../../../../utils/Constants";

const MedicationOrders = () => {
  const [isStatusVisible, setStatusVisibility] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('view_inventory');

  const customMedicationStatusStyle = (status) => {
    if(status === 'Verified') return 'text-success'
    else if(status === "Pending") return "text-warning"
    else if(status === 'Dispensed') return 'text-info'
  }

  return (
    <section className="w-full shadow-secondary lg:w-[70%] mt-10 rounded-[8px] bg-white lg:overflow-auto flex flex-col">
      <header className="w-full h-[52px] px-2 flex items-center justify-between border-b-1 border-b-base">
        <h4 className="text-primary-500 text-xl">Medication Orders</h4>
        
        <div className="ml-auto flex items-end flex-col relative">
          <svg onClick={() => setStatusVisibility(prev => !prev)} className="w-5 h-5 cursor-pointer me-4" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.625 10.5C5.625 11.5355 4.78553 12.375 3.75 12.375C2.71447 12.375 1.875 11.5355 1.875 10.5C1.875 9.46447 2.71447 8.625 3.75 8.625C4.78553 8.625 5.625 9.46447 5.625 10.5Z" fill="#193A6F"/>
            <path d="M11.875 10.5C11.875 11.5355 11.0355 12.375 10 12.375C8.96447 12.375 8.125 11.5355 8.125 10.5C8.125 9.46447 8.96447 8.625 10 8.625C11.0355 8.625 11.875 9.46447 11.875 10.5Z" fill="#193A6F"/>
            <path d="M16.25 12.375C17.2855 12.375 18.125 11.5355 18.125 10.5C18.125 9.46447 17.2855 8.625 16.25 8.625C15.2145 8.625 14.375 9.46447 14.375 10.5C14.375 11.5355 15.2145 12.375 16.25 12.375Z" fill="#193A6F"/>
          </svg>
          
          { isStatusVisible 
              && 
              <div className="w-60 p-2 flex flex-col items-start gap-0.5 absolute top-5 bg-white shadow-variant-2 rounded-md">
                  <StatusButton status={'View Inventory'} statusKey={'view_inventory'} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                  <StatusButton status={'Add to Stock'} statusKey={'add_to_stock'} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                  <StatusButton status={'Manage Inventory'} statusKey={'manage_inventory'} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                </div>
          }
        </div>
      </header>
      <div className="w-full overflow-x-auto">
        <table className="table-fixed w-[160%] md:w-full">
          <thead>
              <tr className="flex w-full py-3">
                <th className='w-[8%] ps-3 text-medium-blue-300 text-start font-bold text-lg lg:w-[7%]'>#</th>
                <th className='w-[25%] text-sm text-medium-blue-300 text-start font-bold md:text-lg md:w-[20%]'>Patient Name</th>
                <th className='w-[8%] text-sm text-medium-blue-300 text-start font-bold md:text-lg md:w-[15%]'>Date</th>
                <th className='w-[25%] text-sm ml-10 text-medium-blue-300 text-start font-bold md:ml-0 md:text-lg md:w-[22%]'>Prescribing Dr.</th>
                <th className='w-[20%] text-sm text-medium-blue-300 text-start font-bold md:text-lg md:w-[20%]'>Prescription ID</th>
                <th className='w-[12%] text-sm text-medium-blue-300 text-start font-bold md:text-lg md:w-[10%] pe-4'>Status</th>
              </tr>
            </thead>
          <tbody>
            {
              medicationOrders.map((medication, index) => {
                return(
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-light-grey': 'bg-white' } flex w-full py-3`}>
                    <td className='w-[8%] ps-3 text-primary-900 text-sm md:w-[7%]'>{index + 1}</td>
                      <td className='w-[25%] text-primary-900 text-sm md:w-[20%]'>{medication.patient__name}</td>
                      <td className='w-[8%] text-primary-900 text-sm md:w-[15%]'>{medication.date}</td>
                      <td className='w-[25%] ml-10 text-primary-900 text-sm md:ml-0 md:w-[22%]'>{medication.prescribing__dr}</td>
                      <td className='w-[20%] text-primary-900 text-sm md:w-[20%]'>{medication.prescription__id}</td>
                      <td className={`w-[12%] ${customMedicationStatusStyle(medication.status)} text-xs md:w-[10%]`}>{medication.status}</td>
                  </tr>
                )
              })
            }
            
          </tbody>
        </table>
      </div>
      
  </section>
  )
}

export default MedicationOrders