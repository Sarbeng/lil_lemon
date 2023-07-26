import { Link } from "react-router-dom"
import logo from "./assets/logo-white.png"
export default function Footer () {
    return <>
   <footer className="flex flex-col md:flex-row px-4 gap-6 justify-between text-white md:px-[290px] bg-primary-green py-16">
    <img src={logo} alt=" lil lemom logo" className="w-[162px]"/>
    <section>
        <h3 className="font-extrabold text-xl w-32 h-14">Doormat Navigation</h3>
        <ul className="text-xl ">
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Menu</Link></li>
                <li><Link>Reservations</Link></li>
                <li><Link>Order Online</Link></li>
                <li><Link>Login</Link></li>
            </ul>
    </section>
    <section>
        <h3 className="font-extrabold text-xl w-32 h-14">Contact</h3>
        <ul className="text-xl ">
                <li><a>Address</a></li>
                <li><a>Phone number</a></li>
                <li><a>Email</a></li>
                
            </ul>
    </section>
    <section>
        <h3 className="font-extrabold text-xl w-32 h-14 ">Social Media Links</h3>
        <ul className="text-xl ">
                <li><a>Address</a></li>
                <li><a>Phone number</a></li>
                <li><a>Email</a></li>
                
            </ul>
    </section>
   </footer>
    </>
}