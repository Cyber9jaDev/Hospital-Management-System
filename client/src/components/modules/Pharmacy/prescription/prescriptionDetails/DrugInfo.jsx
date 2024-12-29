import { addIcon, addWhiteIcon, subtractIcon } from "../../../../../assets";

const DrugInfo = () => {
  return (
    <section className="w-full text-primary-900">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-y-8 lg:gap-y-4 mt-4">
        <div className="w-full md:w-1/2 flex flex-col lg:flex-row gap-y-3">
          <div className="w-full flex items-center lg:w-1/2 gap-x-3">
            <h4 className="text-lg font-bold w-fit">Drug Name</h4>
            <p className="text-lg text-start flex-1">Paracetamol </p>
          </div>
            
          <div className="w-full flex items-center lg:w-2/4 gap-x-4 h-fit">
            <h4 className="text-lg font-bold">Quantity</h4>
            <div className="flex items-center rounded-lg justify-between shadow-primary w-28 p-2 h-fit">
              <img src={subtractIcon} alt="subtract" className="cursor-pointer" />
              <p className="text-sm">10</p>
              <img src={addIcon} alt="add" className="mb-0.5 text-white cursor-pointer" />
            </div>
            <button className="flex items-center justify-between w-[87px] h-fit font-medium px-3 py-2 bg-primary-base text-white rounded-lg cursor-pointer"><img src={addWhiteIcon} alt="add" className="mb-0.5 w-3 h-3" /><span>Add</span></button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col lg:flex-row gap-y-3">
          <div className="w-full flex items-center lg:w-1/2 gap-x-3">
            <h4 className="text-lg font-bold w-fit">Drug Name</h4>
            <p className="text-lg text-start flex-1">Paracetamol </p>
          </div>
            
          <div className="w-full flex items-center lg:w-2/4 gap-x-4 h-fit">
            <h4 className="text-lg font-bold">Quantity</h4>
            <div className="flex items-center rounded-lg justify-between shadow-primary w-28 p-2 h-fit">
              <img src={subtractIcon} alt="subtract" className="cursor-pointer" />
              <p className="text-sm">10</p>
              <img src={addIcon} alt="add" className="mb-0.5 text-white cursor-pointer" />
            </div>
            <button className="flex items-center justify-between w-[87px] h-fit font-medium px-3 py-2 bg-primary-base text-white rounded-lg cursor-pointer"><img src={addWhiteIcon} alt="add" className="mb-0.5 w-3 h-3" /><span>Add</span></button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col lg:flex-row gap-y-3">
          <div className="w-full flex items-center lg:w-1/2 gap-x-3">
            <h4 className="text-lg font-bold w-fit">Drug Name</h4>
            <p className="text-lg text-start flex-1">Paracetamol </p>
          </div>
            
          <div className="w-full flex items-center lg:w-2/4 gap-x-4 h-fit">
            <h4 className="text-lg font-bold">Quantity</h4>
            <div className="flex items-center rounded-lg justify-between shadow-primary w-28 p-2 h-fit">
              <img src={subtractIcon} alt="subtract" className="cursor-pointer" />
              <p className="text-sm">10</p>
              <img src={addIcon} alt="add" className="mb-0.5 text-white cursor-pointer" />
            </div>
            <button className="flex items-center justify-between w-[87px] h-fit font-medium px-3 py-2 bg-primary-base text-white rounded-lg cursor-pointer"><img src={addWhiteIcon} alt="add" className="mb-0.5 w-3 h-3" /><span>Add</span></button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col lg:flex-row gap-y-3">
          <div className="w-full flex items-center lg:w-1/2 gap-x-3">
            <h4 className="text-lg font-bold w-fit">Drug Name</h4>
            <p className="text-lg text-start flex-1">Paracetamol </p>
          </div>
            
          <div className="w-full flex items-center lg:w-2/4 gap-x-4 h-fit">
            <h4 className="text-lg font-bold">Quantity</h4>
            <div className="flex items-center rounded-lg justify-between shadow-primary w-28 p-2 h-fit">
              <img src={subtractIcon} alt="subtract" className="cursor-pointer" />
              <p className="text-sm">10</p>
              <img src={addIcon} alt="add" className="mb-0.5 text-white cursor-pointer" />
            </div>
            <button className="flex items-center justify-between w-[87px] h-fit font-medium px-3 py-2 bg-primary-base text-white rounded-lg cursor-pointer"><img src={addWhiteIcon} alt="add" className="mb-0.5 w-3 h-3" /><span>Add</span></button>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default DrugInfo