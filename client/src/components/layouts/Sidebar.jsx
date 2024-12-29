/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom';
import Menus from '../../menus/index';
import { useEffect } from 'react';
import { closeMenuIcon, logo, toggleLeftIcon, toggleRightIcon } from '../../assets';
import { UseGlobalContext } from "../../contexts/GlobalContext";
import SidebarItem from './SidebarItem';

const Sidebar = ({ activePath, setActivePath, collapseSidebar, setCollapseSidebar, hiddenSidebar, setHiddenSidebar, menus }) => {
  const { modalIsOpen } =  UseGlobalContext();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if(pathname === '/billing' || pathname === '/pharmacy') {
      setActivePath('Dashboard');
    } else {
      const lastPathSegment  = pathname.split('/').pop();
      setActivePath(lastPathSegment.charAt(0).toUpperCase() + lastPathSegment.slice(1));
    }
  },[location, setActivePath, pathname]);

  return(
    <aside className={`fixed ${ hiddenSidebar ? '-left-60' : 'left-0'} duration-1000 top-0 md:flex justify-center ..... lg:fixed lg:left-0 ${modalIsOpen ? 'z-0 duration-0': 'z-10 duration-1000'} ${
      collapseSidebar ? 'w-[12rem]' : 'w-[4rem]'
        } h-screen bg-white shadow-primary`
      }>

        <div className="relative flex flex-col items-center">
          
          <div className='h-24 w-full flex items-center justify-center '>
            <img className={`w-11 h-11 duration-1000 ${ collapseSidebar && ' rotate-[360deg] duration-1000'}`} src={logo} alt="logo" />
            <h1 className={`whitespace-pre duration-500 text-lg text-primary-base ${!collapseSidebar && 'w-0 opacity-0 translate-x-28 overflow-hidden'} `}>Turbines HMS</h1>
          </div>
          <nav className='mt-3'>
            <ul className={`pl-0 ml-0 flex flex-col ${collapseSidebar ? '' : 'items-center'} gap-y-6`}>

              {/* Toggle menu icon for large screens*/}
              <li onClick={() => setCollapseSidebar(!collapseSidebar)} className={`cursor-pointer flex items-center`}>
                <Link to="#" className="flex items-center gap-x-4">
                  <img src={collapseSidebar ? toggleLeftIcon : toggleRightIcon} alt="toggle icon" className={`w-8 h-8 duration-200 ${ collapseSidebar && "rotate-[360deg]" }`}/>
                  <h4 className={`${!collapseSidebar && "w-0 hidden"} text-base font-bold text-primary-base`}>Collapse</h4>
                </Link>
              </li>

              {/* use hiddenSidebar to show or hide the sidebar on small screens */}
              {/* Toggle menu icon for small and medium screens screens*/}

              <li onClick={() => setHiddenSidebar(true)}  className={`cursor-pointer flex items-center lg:hidden`}>
                <Link to="#" className="flex items-center gap-x-4">
                  { <img className='w-8 h-8' src={closeMenuIcon} alt="close menu" /> }
                  <h4 className={`${!collapseSidebar && "w-0 hidden"} text-base font-bold text-primary-base`}>Close</h4>
                </Link>
              </li>

              {/* menu List */}
              { menus.map((menu, index) => {
                  return(
                    <SidebarItem 
                      key={menu?.label} {...menu}
                      activePath={activePath}
                      setActivePath={setActivePath}
                      collapseSidebar={collapseSidebar}
                      index={index}
                    />
                  )
                })
              }

              {/* Horizontal Spacing/ separator */}
              <hr className={`bg-primary-200 h-[1px] ${collapseSidebar ? 'w-full' : 'w-[80%]'} block my-`} />

              {/* Common menu */}
              { Menus.common.map((menu, index) => {
                  return(
                    <SidebarItem 
                      key={menu?.label} {...menu}
                      activePath={activePath}
                      setActivePath={setActivePath}
                      collapseSidebar={collapseSidebar}
                      index={index}
                    />
                  )
                })
              }
            </ul>
          </nav>

        </div>
    </aside>
  )
}

export default Sidebar
