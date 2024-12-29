
const ConditionsAndAllergies = () => {
  return (
    <section className="text-primary-800 px-3 py-6 w-full lg:w-[33%] rounded-[10px] shadow-variant-1 h-fit">
      <h2 className="font-bold text-2xl text-center">Conditions & Allergies</h2>
      <div className="flex gap-x-2 mt-6">

        {/* Conditions */}
        <div className="w-1/2 flex gap-y-1 flex-col">
          <div className="flex items-center gap-x-2">
            <span className="w-2.5 h-2.5 bg-primary-300 rounded-full"></span>
            <p>Cancer</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-300 rounded-full"></span>
            <p>Hypertension</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-300 rounded-full"></span>
            <p>Asthmatic</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-300 rounded-full"></span>
            <p>Diabetic</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-300 rounded-full"></span>
            <p>Autistic</p>
          </div>
        </div>

        {/* Allergies */}
        <div className="w-1/2 flex gap-y-1 flex-col">
          <div className="flex items-center gap-x-2">
            <span className="w-2.5 h-2.5 bg-primary-300 rounded-full"></span>
            <p>Almonds</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-300 rounded-full"></span>
            <p>Aspirins</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-300 rounded-full"></span>
            <p>Goat Milk</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConditionsAndAllergies