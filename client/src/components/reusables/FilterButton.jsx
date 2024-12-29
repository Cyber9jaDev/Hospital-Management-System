import { filterLight } from "../../assets"
import { UseGlobalContext } from "../../contexts/GlobalContext";

const FilterButton = () => {
  const { openFilterModal } = UseGlobalContext();
  
  return (
    <button onClick={openFilterModal}  className="flex items-center cursor-pointer gap-3 px-4 py-1.5 rounded-[8px] shadow-lavender-blue-off-inset bg-off-white">
      <img src={filterLight} alt="filter" className='w-5 h-5' />
      <span className="text-base font-bold text-primary-800">Filter</span>
    </button>
  )
}

export default FilterButton