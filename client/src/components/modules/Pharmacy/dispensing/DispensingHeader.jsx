/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { UseGlobalContext } from "../../../../contexts/GlobalContext";
import DatePicker from "../../../reusables/DatePicker";
import FilterButton from "../../../reusables/FilterButton";

const DispensingHeader = () => {
  const { openFilterModal, modalIsOpen } = UseGlobalContext();

  const handleDateChange = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <header className="h-12 flex items-center justify-between">
        <DatePicker position='start' />

        <FilterButton />
      </header>
    </div>
    
  )
}

export default DispensingHeader