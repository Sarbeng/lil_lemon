
import { Route, Routes } from "react-router-dom";
import BookingPage from './components/pages/Booking/Booking';
import HomePage from './components/pages/Home/Homepage';
import UnderConstruction from "./components/pages/UnderContruction/UnderContruction";
import Error404 from "./components/pages/404/error404";
import LayoutPage from "./components/Layout/Layout";
import BookingConfirmation from "./components/pages/Booking/BookingConfirmation";


function App() {
  return (
    <>
     <LayoutPage>
     <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/booking' element={<BookingPage/>}></Route>
        <Route path='/menu' element={<UnderConstruction/>}></Route>
        <Route path='/login' element={<UnderConstruction/>}></Route>
        <Route path='/about' element={<UnderConstruction/>}></Route>
        <Route path='/orderonline' element={<UnderConstruction/>}></Route>
        <Route path='/bookingconfirmation' element={<BookingConfirmation/>}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
     </LayoutPage>
      
      
    </>
  );
}

export default App;
