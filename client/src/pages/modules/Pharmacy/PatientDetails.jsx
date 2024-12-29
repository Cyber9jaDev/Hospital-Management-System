import { ConditionsAndAllergies, Medications, PatientPersonalTable, PatientProfile, Refills } from "../../../components/modules"

const PatientDetails = () => {
  return (
    <main className="flex flex-col lg:flex-row gap-5 flex-wrap">
      <PatientProfile />
      <Refills />
      <Medications />
      <ConditionsAndAllergies />
      <PatientPersonalTable />
    </main>
  )
}

export default PatientDetails