/* eslint-disable no-unused-vars */
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';
import { signUpSlides, staffRoles } from '../../utils/Constants'
import { appleIconSmall } from "../../assets";

const Signup = () => {
  const [selectedOption, setSelectedOption] = useState({ value: 'account__type', label: '--- Select Account Type ---' });
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  useLayoutEffect(() => {
    const slideInterval = setInterval(() => setCurrentSlide(currentSlide => currentSlide < signUpSlides.length - 1 ? currentSlide + 1 : 0), 3000);
    return () => clearInterval(slideInterval);
  }, []);

  // const { email, password, remember } = userFormData;

  return (
    <main className="flex h-screen w-full">
      <section className="w-full lg:w-1/2 flex h-full items-center justify-center">
        <div className='w-full px-5 md:px-0 md:w-auto'>
          <div className="flex items-center mb-8">
            <img src={appleIconSmall} alt="icon" />
            <h4 className='font-lato font-semibold text-[20px] text-black'>HMS</h4>
          </div>

          <h4 className="text-dark-gray text-3xl font-bold font-lato mb-3">Select account type</h4>

          <p className="font-roboto text-base text-dark-gray mb-7 w-[70%]">Welcome! Select your account type by clicking on the drop-down menu below:</p>

          {/* Form */}
          <form  onSubmit={handleFormSubmit}>
            <div className="form-group my-4 h-[250px] w-[274px]">
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius: "5px",
                    border: '1px solid #000000',
                    boxShadow: '0 0 0 0px #000000',
                    width: '100%',
                    fontSize: '16px',
                    outline: 'none',
                    '&:hover': {
                      border: '1px solid #000000',
                    },
                  }),
                }}
                value={selectedOption} 
                options={staffRoles} 
              />
            </div>

            <div className="form-group mt-7">
              <button type='submit' className='w-full h-[50px] bg-primary-base text-base text-white rounded-md border-0 outline-0 font-roboto'> Proceed To Sign Up </button>
            </div>

          </form>

          <p className='font-roboto text-base text-dark-gray-medium text-center mt-5'>Already have an account? 
            <Link className="text-light-blue-base font-bold" to='/login'> Log in </Link> 
          </p>
        </div>

      </section>
      <section className="hidden bg-primary-base w-1/2 lg:flex flex-col h-full p-2 items-center justify-center">
        <div className='w-full flex relative overflow-hidden mb-3'>
          {
            signUpSlides.map(data => {
              return(
                <div key={data.id} style={{transform: `translateX(${- currentSlide * 100}%)`}} 
                  className='w-full transform transition-transform ease-in-out duration-[2s]'>
                  <div className='w-[50vw]'>
                    <img src={data.img} className='rounded-full w-[324px] h-[324px] mx-auto' alt="doctor-image" />
                  </div>
                  <hgroup className='mt-5'>
                    <h4 className="font-lato font-bold text-3.5xl text-white text-center my-3">{data.header}</h4>
                    <h6 className="font-roboto text-base text-white w-[70%] text-center mx-auto">{data.description}</h6>
                  </hgroup>
                </div>
              )
            })
          }
        </div>
        <div className="block">
          <span onClick={() => setCurrentSlide(0)} className={`inline-block mx-1 w-[11px] h-[11px] rounded-full ${currentSlide === 0 ? 'scale-150' : 'scale-100'} ${currentSlide === 0 ? 'bg-pinkish-purple' : 'bg-white'} cursor-pointer transition-all ease-in-out duration-[2s]`}></span>
          <span onClick={() => setCurrentSlide(1)} className={`inline-block mx-1 w-[11px] h-[11px] rounded-full ${currentSlide === 1 ? 'scale-150' : 'scale-100'} ${currentSlide === 1 ? 'bg-pinkish-purple' : 'bg-white'} cursor-pointer transition-all ease-in-out duration-[2s]`}></span>
          <span onClick={() => setCurrentSlide(2)} className={`inline-block mx-1 w-[11px] h-[11px] rounded-full ${currentSlide === 2 ? 'scale-150' : 'scale-100'} ${currentSlide === 2 ? 'bg-pinkish-purple' : 'bg-white'} cursor-pointer transition-all ease-in-out duration-[2s]`}></span>
          </div>
      </section>
    </main>
  )
}

export default Signup