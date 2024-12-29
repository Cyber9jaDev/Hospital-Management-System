/* eslint-disable no-unused-vars */
import { useState } from "react";
import { UseGlobalContext } from "../../../contexts/GlobalContext.jsx";
import Filter from "../../../components/modals/Filter.jsx";
import Modal from "../../../utils/CustomModal.jsx";
import { InventoryHeader, InventoryTable, Pagination } from "../../../components/modules/index.js";

const Inventory = () => {
  const { filterModalIsOpen } = UseGlobalContext();
  const [stockToShow, setStockToShow] = useState('all');
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
      <InventoryHeader stockToShow={stockToShow} setStockToShow={setStockToShow} />
      <InventoryTable stockToShow={stockToShow} />
      <Pagination/>
    </main>
  )
}

export default Inventory;