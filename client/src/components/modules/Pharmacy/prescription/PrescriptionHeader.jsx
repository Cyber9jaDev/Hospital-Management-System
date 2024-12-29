import DatePicker from "../../../reusables/DatePicker";
import FilterButton from "../../../reusables/FilterButton";

const PrescriptionHeader = () => {

  return (
    <header className="h-12 flex items-center justify-between">
      
      {/* Filter */}
      <DatePicker position='start' />
      <FilterButton />
      
    </header>
  )
}

export default PrescriptionHeader;