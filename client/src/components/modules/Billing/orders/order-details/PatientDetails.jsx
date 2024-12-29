
const PatientDetails = () => {
  return (
    <section className="mb-4">
      <div className="flex w-full gap-y-3 gap-x-11 flex-wrap text-primary-800 text-base">
        <div className="flex justify-between w-1/4">
          <strong className="font-bold">Name</strong>
          <span className="text-start">John Kurtis Jones</span>
        </div>
        <div className="flex justify-between w-1/4">
          <strong className="font-bold">Age</strong>
          <span className="text-start">50</span>
        </div>
        <div className="flex justify-between w-1/4">
          <strong className="font-bold">Payer</strong>
          <span className="text-start">Insurance</span>
        </div>
        <div className="flex justify-between w-1/4">
          <strong className="font-bold">UHID</strong>
          <span className="text-start">ABCD12345678</span>
        </div>
        <div className="flex justify-between w-1/4">
          <strong className="font-bold">Date of Birth</strong>
          <span className="text-start">14/07/1993</span>
        </div>
        <div className="flex justify-between w-1/4">
          <strong className="font-bold">Outstanding Bal.</strong>
          <span className="text-start">0.00</span>
        </div>
        <div className="flex justify-between w-1/4">
          <strong className="font-bold">Sex</strong>
          <span className="text-start">Male</span>
        </div>
        <div className="flex justify-between w-1/4">
          <strong className="font-bold">Phone No.</strong>
          <span className="text-start">024 444 4444</span>
        </div>
      </div>
    </section>
  )
}

export default PatientDetails