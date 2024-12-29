import { dispenseLightIcon as medicationIcon } from "../../../../../assets";

const Medications = () => {
  return (
    <section className="text-primary-800 sm:w-full lg:w-[38%] shadow-variant-1 rounded-[10px] flex items-center px-3 lg:px-6 py-4 lg:py-0">
      <div className="flex flex-col justify-center w-full gap-y-3">
        <h1 className="font-bold text-center text-2xl">Medications</h1>
        <div className="mt-2 flex flex-col">
          <h5 className="flex gap-x-3"> <img src={medicationIcon} alt="medication icon" className="w-5 h-5"/>Paracetamol BP</h5>
          <h5 className="flex gap-x-3"> <img src={medicationIcon} alt="medication icon" className="w-5 h-5"/>Paracetamol BP</h5>
          <h5 className="flex gap-x-3"> <img src={medicationIcon} alt="medication icon" className="w-5 h-5"/>Paracetamol BP</h5>
          <h5 className="flex gap-x-3"> <img src={medicationIcon} alt="medication icon" className="w-5 h-5"/>Paracetamol BP</h5>
        </div>
          <button className="ms-auto bg-primary-base w-fit py-3 px-3.5 rounded-md text-white text-sm">Reconcile</button>
      </div>
    </section>
  )
}

export default Medications