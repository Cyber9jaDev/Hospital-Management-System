import { useState } from "react";
import { UseGlobalContext } from "../../../contexts/GlobalContext.jsx";
import Modal from "../../../utils/CustomModal.jsx";
import Filter from "../../../components/modals/Filter.jsx";
import { Pagination, PrescriptionDetailsPopover, PrescriptionHeader, PrescriptionTable } from "../../../components/modules/index.js";

const Prescriptions = () => {
  const { prescriptionDetailsPopoverModalIsOpen, medicineDetailsPopoverModalIsOpen, filterModalIsOpen } = UseGlobalContext();
  const [prescriptionUHID, setPrescriptionUHID] = useState(null)

  return (
    <main className="py-5 rounded-2xl px-2">
      <Modal>

        {prescriptionDetailsPopoverModalIsOpen && <PrescriptionDetailsPopover prescriptionUHID={prescriptionUHID} />}
        {medicineDetailsPopoverModalIsOpen && <PrescriptionDetailsPopover />}
        {filterModalIsOpen && <Filter />}

      </Modal>
      <PrescriptionHeader />
      <PrescriptionTable setPrescriptionUHID={setPrescriptionUHID} />
      <Pagination/>
    </main>
  )
}

export default Prescriptions;