import DatePicker from '../../../reusables/DatePicker'
import FilterButton from '../../../reusables/FilterButton'

const MedicationOrdersHeader = () => {
  return (
    <header className="h-12 flex items-center justify-between">
      <DatePicker position='start' />
      <FilterButton />
    </header>
  )
}

export default MedicationOrdersHeader;