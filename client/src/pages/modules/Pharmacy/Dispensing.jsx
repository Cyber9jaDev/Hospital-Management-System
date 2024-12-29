/* eslint-disable no-unused-vars */
import { useState } from "react";
import { UseGlobalContext } from "../../../contexts/GlobalContext";
import Modal from "../../../utils/CustomModal.jsx";
import Filter from "../../../components/modals/Filter.jsx";
import { DispensingHeader, DispensingTable, Pagination } from "../../../components/modules/index.js";

const Dispensing = () => {
  const { popoverModalIsOpen, filterModalIsOpen } = UseGlobalContext();
  const [filterParams, setFilterParams] = useState({
    dateFrom: '',
    dateTo: '',
    patientName: '',
    status: ''
  });

  return (
    <main className='py-5 bg-white rounded-[16px] px-2'>
      <Modal>
        {filterModalIsOpen && <Filter />}
      </Modal>
      <DispensingHeader />
      <DispensingTable />
      <Pagination />
    </main>
  )
}

export default Dispensing;