/* eslint-disable react/prop-types */
import { chevronDown, notificationLightIcon, profileIcon, searchIcon } from "../../assets";

const TopNav = ({ activePath, collapseSidebar, setHiddenSidebar }) => {
  return (
    <header className={`flex items-center justify-between fixed w-full ${
      collapseSidebar ? 'lg:w-[calc(100%-12rem)]' : 'lg:w-[calc(100%-4rem)]'
      }  z-50  h-24 bg-white px-2 md:px-5 shadow-light-bluish-gray`}>
      
      <svg onClick={() => setHiddenSidebar(false)} className={`block w-6 h-6 cursor-pointer lg:hidden`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      <h2 className="hidden md:block text-primary-900 text-2xl lg:text-4xl ">{activePath}</h2>

      <div className="w-[62%] md:w-[50%] lg:w-96 ml-2">
        <form className="flex items-center relative px-2 w-full h-10 border-none rounded-md shadow-light-bluish-gray">
          <img src={searchIcon} alt="search icon" className="w-5 h-5" />
          <input name="search" type='search' className="w-full h-full border-none outline-none px-2" placeholder="Search"/>
        </form>
      </div>
      
      
      <div className="flex items-center">
        {/* Notification icon */}
        <img src={notificationLightIcon} alt='notification icon' className="w-7 h-7 md:w-8 md:h-8 me-2 md:me-8" />

        {/* Profile Icon */}
        <img src={profileIcon} alt="profile image" className="w-9 md-9 md:w-10 md:h-10"/>
        
        <h5 className="hidden lg:block ms-1 text-base text-primary-base">Pharm Iniesta</h5>

        {/* dropdown icon */}
        <img src={chevronDown} alt="dropdown icon" className='cursor-pointer' />
      </div>
    </header>
  )
}

export default TopNav;