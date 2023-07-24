
import CallToAction from './CallToAction';
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
     </section>
      </LayoutPage>
    );
}