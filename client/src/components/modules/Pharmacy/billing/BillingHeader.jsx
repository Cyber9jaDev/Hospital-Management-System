/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import DatePicker from "../../../reusables/DatePicker";
import FilterButton from "../../../reusables/FilterButton";

const BillingHeader = ({ activeBillingTab, setActiveBillingTab }) => {

  return (
    <header className="h-12 flex items-center justify-between">
      <div className="hidden md:block h-full overflow-x-auto md:overflow-hidden">
        <nav className="flex items-center me-5 relative h-full">
          <ul className="flex gap-x-6 items-center h-full border-b-[1px] border-[#8C9CB7] text-primary-800">
            <li 
              onClick={() => setActiveBillingTab('orders')} 
              className={`inline-flex h-full items-center cursor-pointer ${ 
                activeBillingTab === 'orders' 
                  ? 'border-b-2 text-deep-red-500 border-deep-red-500' 
                  : 'border-b-0'
              }`}
            >
              <span>Orders</span>
            </li>
            <li 
              onClick={() => setActiveBillingTab('sales')} 
              className={`inline-flex h-full items-center cursor-pointer ${
                activeBillingTab === 'sales' 
                  ? 'border-b-2 text-deep-red-500 border-deep-red-500' 
                  : 'border-b-0'
              }`}
            >
              <span>Sales</span>
            </li>
            <li 
              onClick={() => setActiveBillingTab('insurance')} 
              className={`inline-flex h-full items-center cursor-pointer ${
                activeBillingTab === 'insurance' 
                ? 'border-b-2 text-deep-red-500 border-deep-red-500' 
                : 'border-b-0'
              }`}
            >
              <span>Insurance</span>
            </li>
            <li 
              onClick={() => setActiveBillingTab('reports')} 
                className={`inline-flex h-full items-center cursor-pointer ${
                  activeBillingTab === 'reports' 
                  ? 'border-b-2 text-deep-red-500 border-deep-red-500' 
                  : 'border-b-0'
                }`}
              >
                <span>Reports</span>
            </li>
          </ul>
        </nav>
      </div>

      <DatePicker/>
      <FilterButton />

    </header>
  )
}

export default BillingHeader;