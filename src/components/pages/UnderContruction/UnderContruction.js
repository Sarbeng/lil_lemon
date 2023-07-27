import { MdOutlineConstruction } from "react-icons/md";

export default function UnderConstruction () {
    return (
        <>
           <section className="flex justify-center py-16 px-4 items-center gap-4 h-[400px]  text-primary-green">
            <h1 className="text-2xl md:text-4xl capitalize ">Page Under Construction</h1>
            <span className="text-4xl"><MdOutlineConstruction/></span>
           </section>
        </>
    );
}