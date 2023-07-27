import { useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
export default function Nav() {
    const [isExpanded, setIsExpanded] = useState(false);
    const links = [
        {
            linkTo: "/",
            text: "Home",
        },
        {
            linkTo: "/about",
            text: "About",
        }, {
            linkTo: "/menu",
            text: "Menu",
        }, {
            linkTo: "/booking",
            text: "Reservations",
        }, {
            linkTo: "/orderonline",
            text: "Order Online",
        },
        {
            linkTo: "/login",
            text: "Login",
        },

    ]
    const handleToggle = () => {
        setIsExpanded(!isExpanded)
    }
    return <>
        <nav className="flex justify-end">
            <section className="hidden md:block"><ul className="flex gap-7 text-highlight-text h-16 items-center">
                {
                    links.map((navlink) => {
                        return <li className="capitalize"><NavLink to={navlink.linkTo} className={({ isActive }) => isActive ? "border border-b-2 border-x-0 p-2 border-primary-yellow " : "p-1 hover:border-primary-yellow hover:border hover:py-2  hover:border-b-2 hover:border-x-0"}>{navlink.text}</NavLink></li>
                    })
                }

            </ul></section>
            <button className="block md:hidden" onClick={handleToggle}>
                {isExpanded ? <MdOutlineClose /> :
                    <MdOutlineMenu />}
            </button>
            
        </nav>
        <ul className={isExpanded ? `flex flex-col absolute   bg-white shadow-sm h-screen w-1/2 top-0 left-0 py-12 z-auto p-4 gap-12  text-highlight-text  items-right`: "hidden" } onClick={handleToggle}>
                {
                    links.map((navlink) => {
                        return <li className="capitalize w-full"><NavLink to={navlink.linkTo} className={({ isActive }) => isActive ? "border border-b-2 border-x-0 p-4 border-primary-yellow w-full " : "p-4 hover:border-primary-yellow hover:border hover:py-4  hover:border-b-2 hover:border-x-0 w-full"}>{navlink.text}</NavLink></li>
                    })
                }

            </ul>
    </>
}