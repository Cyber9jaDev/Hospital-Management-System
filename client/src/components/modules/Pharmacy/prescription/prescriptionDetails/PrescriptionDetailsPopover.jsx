/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { calendarSmall, prescriptionSmall, timesIcon } from "../../../../../assets";
import { UseGlobalContext } from "../../../../../contexts/GlobalContext";
import { Link } from 'react-router-dom';

const PrescriptionDetailsPopover = ({ prescriptionUHID }) => {
  const { closeModal } = UseGlobalContext();

  const applyFilter = (e) => {
    e.preventDefault();
  }

  return (
    <section className="flex flex-col bg-white w-[800px]">
      <header className="flex items-center justify-between h-12 w-full">
        <h4 className="text-primary-900 font-bold text-[22px]">Prescription Details</h4>
        <img src={timesIcon} alt="close modal" onClick={closeModal} className="w-8 h-8 cursor-pointer" />
      </header>

      {/* Content */}
      <div className="text-primary-800 text-sm">
        <div className="flex flex-col md:flex-row  items-center gap-4">
          <p className="inline-flex items-center gap-x-2"><img src={prescriptionSmall} alt="" /> <span>Paracetamol (5) </span></p>
          <p className="inline-flex items-center gap-x-2"><img src={calendarSmall} alt="" /> <span>7 days</span></p>
          <p className="inline-flex items-center gap-x-2"><img src={prescriptionSmall} alt="" /> <span>2 tablets 2 times daily/after meal </span></p>
          <p className="inline-flex items-center">No Refills</p>
          <p className="inline-flex items-center">No Interactions</p>
        </div>

        <div className="mt-5">
          <h6>Instructions</h6>
          <p className="mt-1">Take drug by oral and with juice. You can stop taking the drug when you start to feel better</p>
        </div>

        
        <div className="flex flex-col md:flex-row  items-center gap-4">
          <p className="inline-flex items-center gap-x-2"><img src={prescriptionSmall} alt="" /> <span>Paracetamol (5) </span></p>
          <p className="inline-flex items-center gap-x-2"><img src={calendarSmall} alt="" /> <span>7 days</span></p>
          <p className="inline-flex items-center gap-x-2"><img src={prescriptionSmall} alt="" /> <span>2 tablets 2 times daily/after meal </span></p>
          <p className="inline-flex items-center">No Refills</p>
          <p className="inline-flex items-center">No Interactions</p>
        </div>

        <div className="mt-5">
          <h6>Instructions</h6>
          <p className="mt-1">Take drug by oral and with juice. You can stop taking the drug when you start to feel better</p>
        </div>
      </div>

      <form onSubmit={applyFilter} className="w-full flex flex-wrap h-48">
        <div className="ml-auto flex gap-x-4 mt-auto">
          <button className="bg-primary-base text-white rounded-md px-3 py-2 h-fit">Dispense</button>
          <Link onClick={closeModal} to={`prescription-details/${ prescriptionUHID }`} className="bg-white text-primary-base rounded-md px-3 py-2 h-fit border border-primary-base"> Edit </Link>
        </div>
      </form>
    </section>
  )
}

export default PrescriptionDetailsPopover;