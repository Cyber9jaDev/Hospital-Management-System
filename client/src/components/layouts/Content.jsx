/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

const Content = ({ activePath, collapseSidebar, setHiddenSidebar }) => {
  return (
    <main className={`w-full flex-1 flex flex-col overflow-hidden z-0 ${
      collapseSidebar ? 'lg:ml-[calc(12rem)]' : 'lg:ml-[calc(4rem)]'
      } bg-light-grey relative duration-1000` }>

      <TopNav 
        activePath={activePath} 
        collapseSidebar={collapseSidebar} 
        setHiddenSidebar={setHiddenSidebar}
      />
      
      {/* Contents */}
      <section className="bg-light-grey mt-24 p-2 lg:p-5">
        <Outlet />
      </section>
    </main>
  )
}

export default Content;