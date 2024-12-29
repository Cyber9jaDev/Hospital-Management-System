/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { OPEN_PRESCRIPTION_DETAILS_MODAL } from "../../contexts/Actions";

import { UseGlobalContext } from "../../../../contexts/GlobalContext";
import CategoryTable from "./stock/CategoryTable";
import ExpiredMedTable from "./stock/ExpiredMedTable";
import OutOfStockTable from "./stock/OutOfStockTable";
import StockTable from "./stock/StockTable";
import SuppliersTable from "./stock/SuppliersTable";


const InventoryTable = ({ setPrescriptionUHID, stockToShow }) => {
  const { dispatch } = UseGlobalContext();


  // function openPrescriptionDetailsPopoverModal(UHID){ 
  //   setPrescriptionUHID(UHID);
  //   dispatch({ type: OPEN_PRESCRIPTION_DETAILS_MODAL }); 
  // }

  return (
    <>
      { stockToShow === 'all' && <StockTable /> }
      { stockToShow === 'out_of_stock' && <OutOfStockTable/> }
      { stockToShow === 'expired' && <ExpiredMedTable/> }
      { stockToShow === 'category' && < CategoryTable/> }
      { stockToShow === 'supplier' && <SuppliersTable/> }
      
    </>
  )
}

export default InventoryTable