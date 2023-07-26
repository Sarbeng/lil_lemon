import Header from './Header';
import Footer from './Footer';
export default function LayoutPage (props) {
    return (
        <>
            <Header/>
            <main className=''>{props.children}</main>

            <Footer />
        </>
    );
}