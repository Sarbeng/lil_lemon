
import CallToAction from './CallToAction';
import Chicago from './Chicago';
import CustomerSay from './CustomersSay';
import LayoutPage from './Layout';
import Specials from './Specials';

export default function HomePage () {
    return (
        <LayoutPage>
        
      
     <section>
        <CallToAction/>
        <Specials/>
        <CustomerSay/>
        <Chicago/>
     </section>
      </LayoutPage>
    );
}