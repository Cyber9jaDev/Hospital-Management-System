import { useState } from "react";
import Content from "../../../components/Layout/Content";
import Sidebar from "../../../components/Layout/Sidebar";

const BillingModuleLayout = () => {
  const [isActive, setIsActive] = useState('Dashboard');
  const [collapseSidebar, setCollapseSidebar] = useState(false);
  const [hiddenSidebar, setHiddenSidebar] = useState(true);

  return (
    <main className="relative flex w-full">
      <Sidebar
        hiddenSidebar={hiddenSidebar}
        setHiddenSidebar={setHiddenSidebar}
        collapseSidebar={collapseSidebar}
        setCollapseSidebar={setCollapseSidebar}
        isActive={isActive} 
        setIsActive={setIsActive} 
      />
      <Content
        collapseSidebar={collapseSidebar}
        isActive={isActive}
        setHiddenSidebar={setHiddenSidebar}
        hiddenSidebar={hiddenSidebar}
      />
    </main>
  )
}

export default BillingModuleLayout;