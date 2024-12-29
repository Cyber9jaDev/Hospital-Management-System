/* eslint-disable no-unused-vars */
import { useState } from "react";
import Filter from "../../../components/modals/Filter.jsx";
import Modal from "../../../utils/CustomModal.jsx";
import { UseGlobalContext } from "../../../contexts/GlobalContext";
import { Pagination, PatientsHeader, PatientsTable } from "../../../components/modules/index.js";

const Patients = () => {
  const { filterModalIsOpen } = UseGlobalContext();
  const [filterParams, setFilterParams] = useState({
    dateFrom: '',
    dateTo: '',
    patientName: '',
    status: ''
  });

  return (
    <main className="py-5 bg-white rounded-[16px] px-2">
      <Modal>
        {filterModalIsOpen && <Filter />}
      </Modal>
      <PatientsHeader />
      <PatientsTable />
      <Pagination />
    </main>
  )
}

export default Patients;