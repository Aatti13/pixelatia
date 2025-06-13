import { ReactNode } from "react";

import { Navbar } from "./_components_/navbar";
import { Sidebar } from "./_components_/sidebar";

const BrowseLayout = ({children}:{children: ReactNode})=>{
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        {children}
      </div>
    </>
  )
}

export default BrowseLayout;