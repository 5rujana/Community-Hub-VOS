import logo from "../assets/logo.png"
import { navItems } from "../constants/index"

const NavBar = () => {
  return (
    <nav className="bg-purple-900 py-2">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex flex-row justify-start items-center">
                <div className="flex basis-1/2 items-center flex-shrink-0">
                    <img className="h-10 w-12 mr-2" src={logo} alt="" />
                    <span className="span text-xl tracking-tight text-white font-sans">CSI X VIT AP</span>
                </div>
                <div className="flex basis-1/2 justify-end items-center text-white font-sans">
                    <ul className="lg:flex ml-14 space-x-20  text-lg">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                </div>
                
            </div>
        </div>
    </nav>
  )
}

export default NavBar