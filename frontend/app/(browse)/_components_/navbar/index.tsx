import Logo from "./Logo";
import Search from "./search";
import Actions from "./actions";

export const Navbar = ()=>{
  return (
    <nav className="fixed top-0 w-full h-21 z-[49] bg-[#1C1F24] text-[#E0F2FE] px-15 lg:px-4 flex justify-between items-center shadow-2xl">
      <figure className="mr-12 cursor-pointer shrink-0 lg:shrink lg:mr-0">
        <a href="/">
          <Logo/>
        </a>
      </figure>
      <Search />
      <Actions />
    </nav>
  )
}