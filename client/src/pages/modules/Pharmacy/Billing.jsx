/* eslint-disable no-unused-vars */
import { useState } from "react";
import { UseGlobalContext } from "../../../contexts/GlobalContext.jsx";
import Filter from "../../../components/modals/Filter.jsx";
import Modal from "../../../utils/CustomModal.jsx";
import { BillingHeader, BillingTable, Pagination } from "../../../components/modules/index.js";

const Billing = () => {
  const { filterModalIsOpen } = UseGlobalContext();
  const [activeBillingTab, setActiveBillingTab] = useState('orders');

  return (
    <main className='py-5 rounded-[16px] px-2'>
      <Modal>
        {filterModalIsOpen && <Filter />}
      </Modal>
      <BillingHeader activeBillingTab={activeBillingTab} setActiveBillingTab={setActiveBillingTab} />
      <BillingTable activeBillingTab={activeBillingTab} />
      <Pagination />
    </main>
  )
}

export default Billing;