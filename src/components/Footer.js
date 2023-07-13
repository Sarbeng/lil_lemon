import logo from "../assets/Logo.svg"
export default function Footer () {
    return <>
   <footer>
    <img src={logo}/>
    <section>
        <h3>Doormat Nav igation</h3>
        <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
    </section>
    <section>
        <h3>Contact</h3>
        <ul>
                <li><a>Address</a></li>
                <li><a>Phone number</a></li>
                <li><a>Email</a></li>
                
            </ul>
    </section>
    <section>
        <h3>Social Media Links</h3>
        <ul>
                <li><a>Address</a></li>
                <li><a>Phone number</a></li>
                <li><a>Email</a></li>
                
            </ul>
    </section>
   </footer>
    </>
}