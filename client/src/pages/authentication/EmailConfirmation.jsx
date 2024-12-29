import { Link } from "react-router-dom"

const EmailConfirmation = () => {


  const handleFormSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <main className="flex flex-col gap-y-10 items-center justify-center h-screen w-full px-3 lg:px-0">
      <h3 className="text-dark-gray text-3.5xl font-lato font-bold">Almost there!</h3>
      <p className="text-center text-base lg:text-[20px] w-full md:w-[85%] text-dark-gray">Thank you for signing up! Please verify your email address to complete the registration process. <br />
        A verification link has been sent to your email.
      </p>

      <form onSubmit={handleFormSubmit} className="w-full">
        <div className="form-group w-full flex">
          <button type='submit' className='w-full mx-auto md:w-[387px] h-[50px] bg-primary-base text-base lg:text-[20px] font-semibold text-white rounded-[10px] border-0 outline-0 font-roboto'> Resend verification </button>
        </div>
      </form>

      <p className='font-roboto text-base text-dark-gray-medium text-center mt-5'>You can re-enter your email <Link className="text-light-blue-base font-bold" to='#'> here </Link> if the one you entered is incorrect.  </p>

    </main>
  )
}

export default EmailConfirmation