
const NewStock = () => {
  const currentYear = new Date().getFullYear();
  const prevYears = Array.from({ length: 10 }, (_, index) => currentYear - index);
  const nextYears = Array.from({ length: 10 }, (_, index) => currentYear + index);

  return (
    <main className="w-full h-[80vh] mt-3 px-0 md:px-3">
      <button className="text-deep-red-base text-[22px]">&#43; Add New Medicine</button>
      
      {/* Form Container */}
      <div className="mt-5 text-primary-900">
        <form className="w-full flex flex-col md:flex-row md:flex-wrap gap-x-2.5 lg:gap-x-3.5 gap-y-7">
          
          {/* Medicine Name */}
          <div className="w-full md:w-[49%] flex flex-col gap-y-2">
            <label htmlFor="medicine_name">Medicine Name</label>
            <input type="text" name="medicine_name" id="medicine_name" className="p-2 rounded-md outline-none border-none shadow-primary" placeholder="Paracetamol BP"/>
          </div>

          {/* Batch Number */}
          <div className="w-full md:w-[49%] flex flex-col gap-y-2">
            <label htmlFor="batch_number">Batch Number</label>
            <input type="number" name="batch_number" id="batch_number" className="p-2 rounded-md placeholder:text-primary-200 outline-none border-none shadow-primary" placeholder="000000000"/>
          </div>

          {/* Category */}
          <div className="w-full md:w-[49%] lg:w-[24%] flex flex-col gap-y-2">
            <label htmlFor="category">Category</label>
            <select name="category" id="category" className="h-10 px-2 rounded-md outline-none border-none shadow-primary">
              <option value="tablet">Tablet</option>
              <option value="capsule">Capsule</option>
              <option value="liquid">Liquid</option>
              <option value="drop">Drop</option>
              <option value="inhaler">Inhaler</option>
              <option value="injection">Injection</option>
            </select>
          </div>

          {/* Supplier */}
          <div className="w-full md:w-[49%] lg:w-[24%] flex flex-col gap-y-2">
            <label htmlFor="supplier">Supplier</label>
            <select name="supplier" id="supplier" className="px-2 h-10 rounded-md outline-none border-none shadow-primary">
              <option value="ernest">Ernest Chemist</option>
              <option value="liverpool">Liverpool Chemist</option>
              <option value="kingdom">Kingdom Chemist</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="w-full md:w-[49%] flex flex-col gap-y-2">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="quantity" className="p-2 rounded-md outline-none border-none shadow-primary"placeholder="1000"/>
          </div>

          {/* Manufacturing Month */}
          <div className="w-full md:w-[24%] flex flex-col gap-y-2">
            <label htmlFor="manufacturing_month">Manufacturing Month</label>
            <select id="manufacturing_month" name='manufacturing_month' className="p-2 rounded-md h-10 outline-none border-none shadow-primary">
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>

          {/* Manufacturing Year */}
          <div className="w-full md:w-[24%] flex flex-col gap-y-2">
            <label htmlFor="manufacturing_year">Manufacturing Month</label>
            <select id="manufacturing_year" name='manufacturing_year' className="p-2 rounded-md h-10  outline-none border-none shadow-primary">
              { prevYears.map(year => <option key={year} value={year}>{year}</option> )}
            </select>
          </div>

          {/* Expiry Month */}
          <div className="w-full md:w-[24%] flex flex-col gap-y-2">
            <label htmlFor="expiry_month">Expiry Month</label>
            <select id="expiry_month" name='expiry_month' className="p-2 rounded-md h-10  outline-none border-none shadow-primary">
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>

          {/* Expiry Year */}
          <div className="w-full md:w-[24%] flex flex-col gap-y-2">
            <label htmlFor="expiry_year">Expiry Year</label>
            <select id="expiry_year" name='expiry_year' className="p-2 rounded-md h-10 outline-none border-none shadow-primary">
              { nextYears.map(year => <option key={year} value={year}>{year}</option> )}
            </select>
          </div>

          {/* Purchase Price */}
          <div className="w-full md:w-[49%] flex flex-col gap-y-2">
            <label htmlFor="purchase_price">Purchase price per Unit(GHS)</label>
            <input placeholder="00.00" type="number" name="purchase_price" id="purchase_price" className="p-2 rounded-md placeholder:text-primary-200 outline-none border-none shadow-primary"/>
          </div>

          {/* Sale Price */}
          <div className="w-full md:w-[49%] flex flex-col gap-y-2">
            <label htmlFor="sale_price">Sale price per Unit(GHS)</label>
            <input placeholder="00.00" type="number" name="sale_price" id="sale_price" className="p-2 rounded-md placeholder:text-primary-200 outline-none border-none shadow-primary"/>
          </div>

          <div className="my-8 flex items-center justify-center w-full gap-x-5">
            <input type="submit" value="Add" className="px-10 py-2 w-fit bg-primary-base text-white rounded-md cursor-pointer" />
            <input type="reset" value="Cancel" className="px-8 py-2 w-fit bg-white border border-primary-base rounded-md text-primary-base cursor-pointer" />
          </div>
          
        </form>
      </div>
    </main>
  )
}

export default NewStock