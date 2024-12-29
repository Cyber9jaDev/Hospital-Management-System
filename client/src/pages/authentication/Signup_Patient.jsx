/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signUpSlides_Patient } from '../../utils/Constants'
import { appleIconSmall, emailIcon, eyeClosedIcon, eyeOpenIcon, facebookIcon, googleIcon, padlockIcon } from "../../assets";

const Signup_Patient = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ visiblePassword , setVisiblePassword ] = useState(false);
  const [ userFormData, setUserFormData ] = useState({ email: "", password: "", remember: false });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  const { email, password, remember } = userFormData;

  useEffect(() => {
    const slideInterval = setInterval(() => setCurrentSlide(currentSlide => currentSlide < signUpSlides_Patient.length - 1 ? currentSlide + 1 : 0), 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <main className="flex h-screen w-screen">
      <section className="w-full lg:w-1/2 flex h-full items-center justify-center">
        <div className='w-full px-5 md:px-0 md:w-auto'>
          <div className="flex items-center mb-8">
            <img src={appleIconSmall} alt="icon" />
            <h4 className='font-lato font-semibold text-[20px] text-black'>HMS</h4>
          </div>

          <h4 className="text-dark-gray text-3xl font-bold font-lato mb-3">Create a new account</h4>

          <p className="font-roboto text-base text-dark-gray mb-7">Welcome! Select sign-up method:</p>

          {/* Login with facebook or google */}
          <div className='flex gap-x-4 justify-between'>
            <div className="flex justify-center w-1/2">
              <button className='flex items-center justify-center gap-x-2 h-[45px] border-1 w-full rounded-[12px] border-pinkish-purple'>
                <img src={facebookIcon} alt="facebook icon" />
                <span className='font-roboto text-base font-medium'>Facebook</span>
              </button>
            </div>
            <div className="flex justify-center w-1/2">
              <button className='flex items-center justify-center gap-x-2 h-[45px] border-1 w-full rounded-[12px] border-pinkish-purple'>
                <img src={googleIcon} alt="google icon" />
                <span className='font-roboto text-base font-medium'>Google</span>
              </button>
            </div>
          </div>

          {/* Separator */}
          <div className='flex items-center justify-center w-full gap-x-3 my-5'>
            <div className='w-14 h-[1px] bg-pinkish-purple'></div>
            <span className='text-dark-gray-medium my-auto text-base font-roboto'>or</span>
            <div className='w-14 h-[1px] text-pinkish-purple bg-pinkish-purple'></div>
          </div>
          {/* Form */}
          
          <form  onSubmit={handleFormSubmit}>
            <div className="form-group my-4">
              <div className="w-full md:w-[387px] px-4 flex items-center rounded-[12px] h-[50px] relative border-1 border-pinkish-purple">
                <img className="w-5 h-5" src={emailIcon} alt="email icon" />
                <input 
                  name="email"
                  placeholder='Email' 
                  type="email" 
                  value={email} onChange={(e) => setUserFormData({ ...userFormData, email: e.target.value })} 
                  className="ps-2 text-sm text-dark-gray-medium w-full border-0 outline-0 placeholder:text-base font-roboto placeholder:text-dark-gray-medium" 
                />
              </div>
            </div>
            <div className="form-group my-4">
              <div className="w-full md:w-[387px] px-4 flex items-center rounded-[12px] h-[50px] relative border-1 border-pinkish-purple">
                <img src={padlockIcon} alt="password lock" className="w-5 h-5" />
                <input 
                  className="ps-2 text-sm text-dark-gray-medium w-full border-0 outline-0 placeholder:text-base font-roboto placeholder:text-dark-gray-medium" 
                  placeholder='Password' 
                  value={password} 
                  onChange={(e) => setUserFormData({ ...userFormData, password: e.target.value })} type={`${visiblePassword ? 'text' : "password"}`} 
                />
                
                {/* Toggle password visibility */}
                <img src={visiblePassword ? eyeOpenIcon : eyeClosedIcon } alt="show password" onClick={() => setVisiblePassword(!visiblePassword)} className="w-4 h-4 ms-auto cursor-pointer" />
                
              </div>
            </div>
            <div className="form-group my-4">
              <div className='flex items-center'>
                <input id="checkbox" type='checkbox' className=" accent-primary-base cursor-pointer" />
                <label 
                  className='ms-2 font-roboto text-base text-black'
                  onChange={(e) => setUserFormData({ ...userFormData, remember: e.target.checked })} 
                  defaultChecked={remember} 
                  htmlFor="checkbox"> I agree to the terms
                </label>
              </div>
            </div>
            <div className="form-group mt-14">
              <button type='submit' className='w-full md:w-[387px] h-[50px] bg-primary-base text-base text-white rounded-md border-0 outline-0 font-roboto'> CREATE ACCOUNT </button>
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
            signUpSlides_Patient.map(data => {
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

export default Signup_Patient