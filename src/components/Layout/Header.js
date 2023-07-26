import Nav from "./Nav"
import image from "./assets/logo.png"
export default function Header() {
    return <>
        <header className="flex justify-between items-center h-24 py-2 md:px-[290px] px-4 bg-white shadow-sm">
            <img src={image}  alt="logo" className="h-16"/>
            <Nav/>
        </header>
    </>
}