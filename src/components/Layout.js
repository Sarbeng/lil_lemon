import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';
export default function LayoutPage (props) {
    return (
        <body className=''>
            <div className='flex gap-20 items-center h-24 py-2 px-[290px] bg-white shadow-sm'><Header />
            <Nav /></div>
            <main className='px-[290px]'>{props.children}</main>
            <section className='px-[290px]'>
            <Footer />
            </section>
        </body>
    );
}