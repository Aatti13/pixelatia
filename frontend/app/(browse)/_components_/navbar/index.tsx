import Logo from "./Logo";
import Search from "./search";

export const Navbar = ()=>{
  return (
    <nav className="fixed top-0 w-full h-21 z-[49] bg-[#1C1F24] text-[#E0F2FE] px-15 lg:px-4 flex justify-between items-center shadow-2xl">
      <figure className="w-2/3 cursor-pointer">
        <a href="/">
          <Logo/>
        </a>
      </figure>
      <div>
        <Search />
      </div>
    </nav>
  )
}