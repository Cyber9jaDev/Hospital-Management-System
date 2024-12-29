import { Link } from "react-router-dom"

const CompleteProfile = () => {

  const handleFormSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <main className="flex flex-col gap-y-10 items-center justify-center h-screen w-full px-3 lg:px-0">
      <h3 className="text-dark-gray text-3.5xl font-lato font-bold">Congratulations!</h3>
      <p className="text-center text-base lg:text-[20px] w-[85%] text-dark-gray">Welcome to HMS! Please click on the complete profile button below to proceed. </p>

      <form onSubmit={handleFormSubmit} className="w-full">
        <div className="form-group w-full flex ">
          <button type='submit' className='w-full mx-auto md:w-[387px] h-[50px] bg-primary-base text-base lg:text-[20px] font-semibold text-white rounded-[10px] border-0 outline-0 font-roboto'> Complete profile </button>
        </div>
      </form>

      <p className='font-roboto text-base text-dark-gray-medium text-center mt-5'>Can’t complete profile now? Click <Link className="text-light-blue-base font-bold" to='#'> here </Link> to contact customer care.</p>

    </main>
  )
}

export default CompleteProfile