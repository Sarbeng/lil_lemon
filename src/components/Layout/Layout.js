import Header from './Header';
import Main from '../Main';
import Nav from './Nav';
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