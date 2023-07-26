import { Link } from "react-router-dom"
import logo from "./assets/logo-white.png"
export default function Footer () {
    return <>
   <footer className="flex flex-col md:flex-row px-4 gap-6 justify-between text-white md:px-[290px] bg-primary-green py-16">
    <img src={logo} alt=" lil lemom logo" className="w-28 md:w-32"/>
    <section className="flex flex-col gap-3">
        <h3 className="font-extrabold  text-lg  h-8">Navigation</h3>
        <ul className="text-highlight-text flex gap-3 flex-col">
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Menu</Link></li>
                <li><Link>Reservations</Link></li>
                <li><Link>Order Online</Link></li>
                <li><Link>Login</Link></li>
            </ul>
    </section>
    <section className="flex flex-col gap-3">
        <h3 className="font-extrabold text-lg h-8">Contact</h3>
        <ul className="text-highlight-text flex gap-3 flex-col">
                <li><Link>Address</Link></li>
                <li><Link>Phone number</Link></li>
                <li><Link>Email</Link></li>
                
            </ul>
    </section>
    <section className="flex flex-col gap-3">
        <h3 className="font-extrabold text-lg h-8 ">Social Media Links</h3>
        <ul className="text-highlight-text flex gap-3 flex-col ">
                <li><Link>Address</Link></li>
                <li><Link>Phone number</Link></li>
                <li><Link>Email</Link></li>
                
            </ul>
    </section>
   </footer>
    </>
}