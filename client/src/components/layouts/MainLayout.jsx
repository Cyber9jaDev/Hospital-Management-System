/* eslint-disable react/prop-types */
import { useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

const MainLayout = ({ menus }) => {
  const [activePath, setActivePath] = useState('Dashboard');
  const [collapseSidebar, setCollapseSidebar] = useState(false);
  const [hiddenSidebar, setHiddenSidebar] = useState(true);

  return (
    <main className="relative flex w-full">
      <Sidebar
        hiddenSidebar={hiddenSidebar}
        setHiddenSidebar={setHiddenSidebar}
        collapseSidebar={collapseSidebar}
        setCollapseSidebar={setCollapseSidebar}
        activePath={activePath} 
        setActivePath={setActivePath}
        menus={menus} 
      />
      <Content
        collapseSidebar={collapseSidebar}
        activePath={activePath}
        setHiddenSidebar={setHiddenSidebar}
        hiddenSidebar={hiddenSidebar}
      />
    </main>
  )
}

export default MainLayout;