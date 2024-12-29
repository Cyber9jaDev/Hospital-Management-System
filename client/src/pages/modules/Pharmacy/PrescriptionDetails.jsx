import { DrugInfo, DrugTable, PatientDetails, PrescriptionInfo } from "../../../components/modules";

const PrescriptionDetails = () => {
  return (
    <main className="w-full flex flex-col md:flex-row gap-y-12 flex-wrap">
      <PatientDetails />
      <PrescriptionInfo />
      <DrugInfo />
      <DrugTable />

      <div className="w-full flex justify-center items-center gap-x-5">
        <button className="cursor-pointer w-[80px] p-2 text-white font-medium rounded-lg bg-primary-base">Save</button>
        <button className="cursor-pointer w-[94px] p-2 text-primary-base text-base font-medium rounded-lg border border-primary-base">Cancel</button>
      </div>
    </main>
  )
}

export default PrescriptionDetails;