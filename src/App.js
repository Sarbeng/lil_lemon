
import { Route, Routes } from "react-router-dom";
import BookingPage from './components/pages/Booking/Booking';
import HomePage from './components/pages/Home/Homepage';


function App() {
  return (
    <>
     
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/booking' element={<BookingPage/>}></Route>
        <Route path='/menu' element={<BookingPage/>}></Route>
        <Route path='/booking' element={<BookingPage/>}></Route>
        <Route path='/login' element={<BookingPage/>}></Route>
        <Route path='/about' element={<BookingPage/>}></Route>
        <Route path='/orderonline' element={<BookingPage/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
