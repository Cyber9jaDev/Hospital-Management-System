
const PrescriptionInfo = () => {
  return (
    <section className="w-full flex-1 px-0 lg:px-6 text-primary-800">
      <h3 className="font-medium font-metropolis text-2xl">Prescription Details</h3>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-y-3 mt-4">
        <div className="w-full lg:w-1/2 flex justify-between">
          <h4 className="text-base font-bold w-1/2">Prescription ID</h4>
          <p className="text-base text-start w-1/2">123456789</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-between">
          <h4 className="text-base font-bold w-1/2">Date</h4>
          <p className="text-base text-start w-1/2">14/07/1993</p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-between">
          <h4 className="text-base font-bold w-1/2">Paracetamol BP</h4>
          <p className="text-base text-start w-1/2">2x Daily for 7 Days</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-between">
          <h4 className="text-base font-bold w-1/2">Paracetamol BP</h4>
          <p className="text-base text-start w-1/2">2x Daily for 7 Days</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-between">
          <h4 className="text-base font-bold w-1/2">Paracetamol BP</h4>
          <p className="text-base text-start w-1/2">2x Daily for 7 Days</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-between">
          <h4 className="text-base font-bold w-1/2">Paracetamol BP</h4>
          <p className="text-base text-start w-1/2">2x Daily for 7 Days</p>
        </div>
      </div>

      <button className="rounded-lg bg-primary-base text-white py-3 px-4 mt-5">Verify Prescription</button>
    </section>
  )
}

export default PrescriptionInfo;