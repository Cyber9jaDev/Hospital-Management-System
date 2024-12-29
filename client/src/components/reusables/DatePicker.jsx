/* eslint-disable react/prop-types */
import { useState } from 'react';
import { UseGlobalContext } from '../../contexts/GlobalContext';

const currentDate = new Date().toISOString().split('T')[0];

const DatePicker = ({ position }) => {
  const { modalIsOpen } = UseGlobalContext();
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className={`flex items-center ${ position ? 'ms-0' : 'ms-auto'} me-1 relative`}>
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center self-center relative">
        <div className={modalIsOpen ? '-z-10' : 'z-auto'}>
          <input
            type="date"
            name="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="cursor-pointer p-1.5 rounded-lg outline-none text-primary-base bg-light-blue-100 border-light-blue-100"
          />
        </div>
      </form>
    </div>
  );
};

export default DatePicker;
