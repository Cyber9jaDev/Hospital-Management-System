/* eslint-disable react/prop-types */

const DashboardIcon = ({ activeColor }) => {

  return (
    <svg className="w-8 h-8 text-light-red-600" viewBox="0 0 32 32" fill={`${activeColor}`} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_84_662)">
            <path d="M5.33301 5.33331H13.333V16H5.33301V5.33331Z" stroke={`${activeColor}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.33301 21.3333H13.333V26.6666H5.33301V21.3333Z" stroke={`${activeColor}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.667 16H26.667V26.6667H18.667V16Z" stroke={`${activeColor}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.667 5.33331H26.667V10.6666H18.667V5.33331Z" stroke={`${activeColor}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g><defs><clipPath id="clip0_84_662"><rect width="32" height="32" fill="white"/></clipPath></defs>
    </svg>
  )
}

export default DashboardIcon;