import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';
export default function LayoutPage (props) {
    return (
        <>
            <section className='flex justify-between items-center h-24 py-2 md:px-[290px] bg-white shadow-sm'><Header />
            <Nav /></section>
            <main className='px-[290px]'>{props.children}</main>
            <section className='px-[290px] bg-slate-100 py-16'>
            <Footer />
            </section>
        </>
    );
}