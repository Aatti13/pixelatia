import { ReactNode, Suspense } from "react";

import { Navbar } from "./_components_/navbar";
import { Sidebar, SidebarSkeleton } from "./_components_/sidebar";
import { Container } from "./_components_/container";

const BrowseLayout = ({children}:{children: ReactNode})=>{
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton/>}>
          <Sidebar />
        </Suspense>
          <Container>
            {children}
          </Container>
      </div>
    </>
  )
}

export default BrowseLayout;