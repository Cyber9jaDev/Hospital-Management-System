/* eslint-disable react/prop-types */
const UseIcons = ({ label, activeColor, activeLink }) => {
  if(label === 'Dashboard'){
    return(
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill={`${activeLink === 'Dashboard' ? '#193A6F' : 'none'}`} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_84_662)">
        <path d="M5.33301 5.33331H13.333V16H5.33301V5.33331Z" stroke={`${ activeLink === 'Dashboard' ? '#193A6F' : '#8C9CB7'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.33301 21.3333H13.333V26.6666H5.33301V21.3333Z" stroke={`${ activeLink === 'Dashboard' ? '#193A6F' : '#8C9CB7'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.667 16H26.667V26.6667H18.667V16Z" stroke={`${ activeLink === 'Dashboard' ? '#193A6F' : '#8C9CB7'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.667 5.33331H26.667V10.6666H18.667V5.33331Z" stroke={`${ activeLink === 'Dashboard' ? '#193A6F' : '#8C9CB7'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g><defs><clipPath id="clip0_84_662"><rect width="32" height="32" fill="white"/></clipPath></defs>
      </svg>
    )
  }

  if(label === 'Dispensing'){
    return(
      <svg className='w-8 h-8' viewBox="0 0 32 32" fill={`${activeLink === 'Dispensing' ? '#193A6F' : 'none'}`} xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_116_110)">
            <path d="M4 10.6667C4 12.4348 4.70238 14.1305 5.95262 15.3807C7.20286 16.631 8.89856 17.3333 10.6667 17.3333C12.4348 17.3333 14.1305 16.631 15.3807 15.3807C16.631 14.1305 17.3333 12.4348 17.3333 10.6667C17.3333 8.89856 16.631 7.20286 15.3807 5.95262C14.1305 4.70238 12.4348 4 10.6667 4C8.89856 4 7.20286 4.70238 5.95262 5.95262C4.70238 7.20286 4 8.89856 4 10.6667Z" stroke={`${ activeLink === 'Dashboard' ? activeColor : 'none'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.3333 22.6666C17.3333 24.0811 17.8952 25.4377 18.8954 26.4379C19.8956 27.4381 21.2522 28 22.6667 28C24.0812 28 25.4377 27.4381 26.4379 26.4379C27.4381 25.4377 28 24.0811 28 22.6666C28 21.2522 27.4381 19.8956 26.4379 18.8954C25.4377 17.8952 24.0812 17.3333 22.6667 17.3333C21.2522 17.3333 19.8956 17.8952 18.8954 18.8954C17.8952 19.8956 17.3333 21.2522 17.3333 22.6666Z" stroke={`${ activeLink === 'Dashboard' ? activeColor : 'none'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L15.3333 15.3333" stroke={`${ activeLink === 'Dispensing' ? '#193A6F' : '#8C9CB7'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26 19.3333L19.3333 26" stroke={`${ activeLink === 'Dispensing' ? '#193A6F' : '#8C9CB7'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g><defs><clipPath id="clip0_116_110"><rect width="32" height="32" fill="white"/></clipPath></defs>
      </svg>
    )
  } 

  if(label ==='Patients'){
    return(
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill={`${activeLink === 'Patients' ? '#193A6F' : 'red'}`} xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9999 2.66666C8.50661 2.66666 5.66661 5.50666 5.66661 9C5.66661 12.4267 8.34661 15.2 11.8399 15.32C11.9466 15.3067 12.0533 15.3067 12.1333 15.32H12.2266C13.8658 15.2653 15.4194 14.5753 16.559 13.3959C17.6986 12.2164 18.3349 10.6401 18.3333 9C18.3333 5.50666 15.4933 2.66666 11.9999 2.66666ZM18.7733 18.8653C15.0533 16.3853 8.98661 16.3853 5.23995 18.8653C3.54661 19.9987 2.61328 21.532 2.61328 23.172C2.61328 24.812 3.54661 26.332 5.22661 27.452C7.09328 28.7053 9.54661 29.332 11.9999 29.332C14.4533 29.332 16.9066 28.7053 18.7733 27.452C20.4533 26.3187 21.3866 24.7987 21.3866 23.1453C21.3733 21.5053 20.4533 19.9853 18.7733 18.8653ZM26.6533 9.784C26.8666 12.3707 25.0266 14.6373 22.4799 14.944H22.4133C22.3333 14.944 22.2533 14.944 22.1866 14.9707C20.8933 15.0373 19.7066 14.624 18.8133 13.864C20.1866 12.6373 20.9733 10.7973 20.8133 8.79733C20.7218 7.75734 20.3686 6.75741 19.7866 5.89066C20.4853 5.55077 21.2561 5.38595 22.0327 5.41043C22.8092 5.4349 23.5682 5.64793 24.244 6.03113C24.9199 6.41434 25.4924 6.95622 25.9121 7.61003C26.3319 8.26385 26.5862 9.00995 26.6533 9.784Z" fill={`${activeLink === 'Patients' ? '#193A6F' : 'white'}`}/>
        <path d="M29.3171 22.12C29.2104 23.4133 28.3837 24.5333 26.9971 25.2933C25.6637 26.0267 23.9837 26.3733 22.3171 26.3333C23.2771 25.4667 23.8371 24.3867 23.9437 23.24C24.0771 21.5867 23.2904 20 21.7171 18.7333C20.8237 18.0267 19.7837 17.4667 18.6504 17.0533C21.5971 16.2 25.3037 16.7733 27.5837 18.6133C28.8104 19.6 29.4371 20.84 29.3171 22.12Z" fill={`${activeLink === 'Patients' ? '#193A6F' : 'red'}`}/>
      </svg>
    );
  }
  return
}

export default UseIcons;