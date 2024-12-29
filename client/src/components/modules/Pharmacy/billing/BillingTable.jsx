/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import StockTable from "../inventory/stock/StockTable";
import OutOfStockTable from "../inventory/stock/OutOfStockTable";
import ExpiredMedTable from "../inventory/stock/ExpiredMedTable";
import CategoryTable from "../inventory/stock/CategoryTable";
import OrdersTable from "./OrdersTable";
import SalesTable from "./SalesTable";

const BillingTable = ({ activeBillingTab }) => {

  return (
    <>
      { activeBillingTab === 'orders' && <OrdersTable /> }
      { activeBillingTab === 'sales' && <SalesTable /> }
      { activeBillingTab === 'insurance' && <ExpiredMedTable /> }
      { activeBillingTab === 'reports' && < CategoryTable/> }
      
    </>
  )
}

export default BillingTable;