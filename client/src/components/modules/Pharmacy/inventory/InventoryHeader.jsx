/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import FilterButton from "../../../reusables/FilterButton";
import StockButton from "../../../reusables/StockButton";

const InventoryHeader = ({ setStockToShow, stockToShow }) => {

  return (
    <header className="h-12 flex items-center justify-between">
      <div className="hidden md:block h-full overflow-x-auto md:overflow-hidden">
        <nav className="flex items-center me-5 relative h-full">
          <ul className="flex gap-x-6 items-center h-full border-b-[1px] border-[#8C9CB7] text-primary-800">
            <li onClick={() => setStockToShow('all')} className={`inline-flex h-full items-center cursor-pointer ${stockToShow === 'all' ? 'border-b-2 text-deep-red-500 border-deep-red-500' : 'border-b-0'}`}><span>Stock</span></li>
            <li onClick={() => setStockToShow('out_of_stock')} className={`inline-flex h-full items-center cursor-pointer ${stockToShow === 'out_of_stock' ? 'border-b-2 text-deep-red-500 border-deep-red-500' : 'border-b-0'}`}><span>Out of Stock Meds</span></li>
            <li onClick={() => setStockToShow('expired')} className={`inline-flex h-full items-center cursor-pointer ${stockToShow === 'expired' ? 'border-b-2 text-deep-red-500 border-deep-red-500' : 'border-b-0'}`}><span>Expired Meds</span></li>
            <li onClick={() => setStockToShow('category')} className={`inline-flex h-full items-center cursor-pointer ${stockToShow === 'category' ? 'border-b-2 text-deep-red-500 border-deep-red-500' : 'border-b-0'}`}><span>Category</span></li>
            <li onClick={() => setStockToShow('supplier')} className={`inline-flex h-full items-center cursor-pointer ${stockToShow === 'supplier' ? 'border-b-2 text-deep-red-500 border-deep-red-500' : 'border-b-0'}`}><span>Suppliers</span></li>
          </ul>
        </nav>
      </div>

      {/* Add Stock */}
      { (stockToShow === 'all' || stockToShow === 'out_of_stock' || stockToShow === 'expired') && <StockButton text='Add Stock' link='new-stock' />}
      
      {/* Add new category */}
      { stockToShow === 'category' && <StockButton text='Add New Category' link='new-category' />}
      
      {/* Add new supplier */}
      { stockToShow === 'supplier' && <StockButton text='Add New Supplier' link='new-supplier' />}
      
      {/* Filter */}
      { stockToShow === 'all' && <FilterButton />}

    </header>
  )
}

export default InventoryHeader