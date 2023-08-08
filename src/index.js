import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutPage from './components/Layout/Layout';
import BookingPage from './components/pages/Booking/Booking';
import HomePage from './components/pages/Home/Homepage';
import Error404 from './components/pages/404/error404';
import BookingForm from './components/pages/Booking/BookingForm';
import BookingConfirmation from './components/pages/Booking/BookingConfirmation';

const router = createBrowserRouter([
  {
    path:"/",
    element:<LayoutPage><HomePage/></LayoutPage>,
    errorElement:<LayoutPage><Error404/></LayoutPage>
  },
  {
    path:"booking",
    element: <LayoutPage><BookingForm/></LayoutPage>
  },
  {
    path:"confirm_booking",
    element: <LayoutPage><BookingConfirmation/></LayoutPage>
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
