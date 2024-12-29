import { UseGlobalContext } from "../../../../../contexts/GlobalContext";

const MedicineDetailsPopover = () => {
  const { closeModal } = UseGlobalContext();

  const handleSave = (e) => {
    e.preventDefault();
  }

  return (
    <section className="text-primary-900 flex flex-col items-center justify-center bg-white w-full lg:w-[800px]">
      <header className="flex items-center justify-between h-12 w-full">
        <h4 className="font-bold text-[22px]">Medicine Details</h4>
        <svg onClick={closeModal} className="w-8 h-8 cursor-pointer" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.6569 23.5424C22.1776 24.0631 23.0218 24.0631 23.5425 23.5424C24.0632 23.0217 24.0632 22.1775 23.5425 21.6568L17.8857 16L23.5425 10.3431C24.0632 9.82244 24.0632 8.97822 23.5425 8.45752C23.0218 7.93682 22.1776 7.93682 21.6569 8.45752L16.0001 14.1144L10.3432 8.4575C9.82249 7.9368 8.97827 7.9368 8.45757 8.4575C7.93687 8.97819 7.93687 9.82241 8.45757 10.3431L14.1144 16L8.45757 21.6568C7.93687 22.1775 7.93687 23.0218 8.45757 23.5425C8.97827 24.0632 9.82249 24.0632 10.3432 23.5425L16.0001 17.8856L21.6569 23.5424Z" fill="#081325"/>
        </svg>
      </header>

        <form onSubmit={handleSave} className="w-full p-5 flex flex-col md:flex-row flex-wrap gap-y-6">
          <div className="flex flex-col gap-y-2 w-full md:w-1/2 px-0 md:px-3 lg:px-0">
            <label className="font-medium" htmlFor="drug_name">Drug Name <span className=" text-error">*</span></label>
            <input type="text" name='drug_name' id="drug_name" className="w-full h-[40px] rounded-md shadow-primary px-2 outline-none placeholder-primary-200 text-primary-200" placeholder="John Kabala"/>
          </div> 
          
          <div className="flex flex-col gap-y-2 w-full md:w-1/2 px-0 md:px-3 lg:px-0">
            <label className="font-medium" htmlFor="statue">Status</label>
            <select name="status" id="status" className="w-full lg:w-[224px] h-[40px] rounded-md shadow-primary px-2 outline-none text-primary-200">
              <option value="all">All</option>
              <option value="option-1">Option 1</option>
              <option value="option-2">Option 2</option>
              <option value="option-3">Option 3</option>
            </select>
          </div>

          <div className="flex flex-col gap-y-2 w-full md:w-1/2 px-0 md:px-3 lg:px-0">
            <label className="font-medium" htmlFor="patient_name">Patient Name</label>
            <input type="text" id="patient_name" className="w-full lg:w-[224px] h-[40px] rounded-md shadow-primary px-2 outline-none placeholder-primary-200 text-primary-200" placeholder="John Kabala"/>
          </div>

          <div className="flex flex-col gap-y-2 w-full md:w-1/2 px-0 md:px-3 lg:px-0">
            <label className="font-medium" htmlFor="patient_name">Date From</label>
            
            
            <input type="date" id="patient_name" className="w-full lg:w-[224px] h-[40px] rounded-md shadow-primary px-2 outline-none text-primary-200" />
          </div> 

          <div className="flex flex-col gap-y-2 w-full md:w-1/2 px-0 md:px-3 lg:px-0">
            <label className="font-medium" htmlFor="patient_name">Date To</label>
            <input type="date" id="patient_name" className="w-full lg:w-[224px] h-[40px] rounded-md shadow-primary px-2 outline-none text-primary-200" />
          </div> 

          <div className="ml-auto mt-6 flex items-center w-full justify-end">
            <input type="submit" value="Save" className="px-10 py-2 w-fit bg-primary-base text-white rounded-md cursor-pointer" />
            <input type="reset" value="Cancel" className="px-8 py-2 w-fit bg-white border border-primary-base rounded-md text-primary-base cursor-pointer" />
          </div>
        </form>
      
    </section>
  )
}

export default MedicineDetailsPopover;