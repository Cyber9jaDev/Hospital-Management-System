/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const SidebarItem = ({ url, icon__light, icon__deep, collapseSidebar, index, label, activePath, setActivePath }) => {
  
  return (
    <li key={label} className={`group relative cursor-pointer flex ${activePath === label ? 'text-primary-base' : 'text-primary-300'}`} 
      onClick={() => setActivePath(label)}>
      <Link to={`${url}`} className="flex gap-x-4 items-center">
        <div className={ `${collapseSidebar ? 'ml-0': 'ml-4'}`}>
          { activePath === label ? icon__deep : icon__light }
        </div>
        <span
          style={{transitionDelay: `${index + 3}00ms`}}
          className={`whitespace-pre duration-500 ${!collapseSidebar && "w-0 opacity-0 translate-x-28 overflow-hidden" } text-lg`}
          >{label} 
        </span>
        <h6
        className={`${
          collapseSidebar && 'hidden'
          } absolute left-20 bg-primary-400 font-semibold whitespace-pre text-gray-100 
            rounded-md drop-shadow-lg px-0 py-0 w-0 
            overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 
            group-hover:duration-1000 group-hover:w-fit`}
          >
          {label}
        </h6>
      </Link>
    </li>
  )
}

export default SidebarItem