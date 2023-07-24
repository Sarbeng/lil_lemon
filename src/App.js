
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BookingPage from './components/Booking';
import HomePage from './components/Homepage';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/booking' element={<BookingPage/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
