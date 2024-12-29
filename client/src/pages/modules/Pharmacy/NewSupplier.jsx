
const NewSupplier = () => {
  return (
    <main className="w-full h-[80vh] mt-3 px-0 md:px-3">
      <button className="text-deep-red-base text-[22px]">&#43; Add New Supplier</button>
      
      {/* Form Container */}
      <div className="mt-5 text-primary-900">
        <form className="w-full flex flex-col md:flex-row md:flex-wrap md:gap-x-3 lg:gap-x-4 gap-y-7">
          
          {/* Supplier Name */}
          <div className="w-full md:w-[49%] flex flex-col gap-y-2">
            <label htmlFor="supplier_name">Supplier Name</label>
            <input type="text" name="supplier_name" id="supplier_name" className="p-2 rounded-md outline-none border-none shadow-primary" placeholder="Jerrytex Chem."/>
          </div>

          {/* Telephone Number */}
          <div className="w-full md:w-[49%] flex flex-col gap-y-2">
            <label htmlFor="telephone_number">Telephone Number</label>
            <input type="tel" name="telephone_number" id="telephone_number" className="p-2 rounded-md outline-none border-none shadow-primary" placeholder="+233 012 3243"/>
          </div>

          {/* Email Address */}
          <div className="w-full md:w-[49%] flex flex-col gap-y-2">
            <label htmlFor="supplier_email">Email Address</label>
            <input type="email" name="supplier_email" id="supplier_email" className="p-2 rounded-md outline-none border-none shadow-primary" placeholder="jerrytex@gmail.com"/>
          </div>

          {/* Address */}
          <div className="w-full md:w-[49%] flex flex-col gap-y-2">
            <label htmlFor="supplier_address">Address</label>
            <input type="text" name="supplier_address" id="supplier_address" className="p-2 rounded-md outline-none border-none shadow-primary" placeholder="Accra, Ghana"/>
          </div>

          <div className="mt-24 flex items-center justify-center w-full gap-x-5">
            <input type="submit" value="Add" className="px-10 py-2 w-fit bg-primary-base text-white rounded-md cursor-pointer" />
            <input type="reset" value="Cancel" className="px-8 py-2 w-fit bg-white border border-primary-base rounded-md text-primary-base cursor-pointer" />
          </div>                   
        </form>
      </div>
    </main>
  )
}

export default NewSupplier