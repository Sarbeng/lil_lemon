import logo from "../assets/Logo.svg"
export default function Footer () {
    return <>
   <footer className="flex justify-between">
    <img src={logo}/>
    <section>
        <h3 className="font-extrabold text-xl w-32 h-14">Doormat Navigation</h3>
        <ul className="text-xl">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
    </section>
    <section>
        <h3 className="font-extrabold text-xl w-32 h-14">Contact</h3>
        <ul className="text-xl">
                <li><a>Address</a></li>
                <li><a>Phone number</a></li>
                <li><a>Email</a></li>
                
            </ul>
    </section>
    <section>
        <h3 className="font-extrabold text-xl w-32 h-14 ">Social Media Links</h3>
        <ul className="text-xl">
                <li><a>Address</a></li>
                <li><a>Phone number</a></li>
                <li><a>Email</a></li>
                
            </ul>
    </section>
   </footer>
    </>
}