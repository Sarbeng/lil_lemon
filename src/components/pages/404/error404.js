import {  MdOutlineErrorOutline, } from "react-icons/md";

export default function Error404 () {
    return (
        <>
           <section className="flex justify-center py-16 px-4 items-center gap-4 h-[400px]  text-primary-green flex-col">
            <section className="flex gap-3 items-center">
            <h1 className="text-4xl capitalize ">Sorry</h1>
            <span className="text-4xl"><MdOutlineErrorOutline/></span>
            </section>
            <p>the page you'
            re looking for does not exist!</p>
           
           </section>
        </>
    );
}