
const PatientDetails = () => {
  return (
    <section className="w-full md:w-[45%] text-primary-800">
      <h5 className="font-medium text-2xl">Patient Details</h5>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-y-3 mt-4">
        <div className="w-full lg:w-1/2 flex justify-between">
          <h4 className="text-base font-bold w-[40%]">UHID</h4>
          <p className="text-base text-start flex-1">ABCD12345678</p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-between">
          <h4 className="text-base font-bold w-[40%]">Age</h4>
          <p className="text-base text-start flex-1">30</p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-between">
          <h4 className="text-base font-bold w-[40%]">Name</h4>
          <p className="text-base text-start flex-1">John Collins</p>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-between">
          <h4 className="text-base font-bold w-[40%]">Date of Birth</h4>
          <p className="text-base text-start flex-1">14/07/1993</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-between">
          <h4 className="text-base font-bold w-[40%]">Sex</h4>
          <p className="text-base text-start flex-1">Male</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-between">
          <h4 className="text-base font-bold w-[40%]">Address</h4>
          <p className="text-base text-start flex-1">Momentum Height, Accra </p>
        </div>
      </div>
    </section>
  )
}

export default PatientDetails