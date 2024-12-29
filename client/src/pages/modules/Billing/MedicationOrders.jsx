
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Modal from "../../../utils/CustomModal.jsx";
import { UseGlobalContext } from "../../../contexts/GlobalContext.jsx";
import Filter from "../../../components/modals/Filter.jsx";
import { MedicationOrdersHeader, MedicationOrdersTable, Pagination } from "../../../components/modules/index.js";

const MedicationOrders = () => {
  const { popoverModalIsOpen, filterModalIsOpen } = UseGlobalContext();
  const [filterParams, setFilterParams] = useState({
    dateFrom: '',
    dateTo: '',
    patientName: '',
    status: ''
  });

  return (
    <main className='py-5 rounded-[16px] px-2'>
      <Modal>
        {filterModalIsOpen && <Filter />}
      </Modal>
      <MedicationOrdersHeader/>
      <MedicationOrdersTable/>
      <Pagination />
    </main>
  )
}

export default MedicationOrders;