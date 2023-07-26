
import { useState } from 'react';
import BookingPage from '../Booking/Booking';
import CallToAction from './HeroSection';
import Chicago from './OurStory';
import CustomerSay from './Testimonials';
import LayoutPage from '../../Layout/Layout';
import Specials from './Specials';

export default function HomePage () {
    const [availableTimes, setAvailableTimes] = useState([
        {id:1,time:"17:00"},
        {id:2,time:"18:00"},
        {id:3,time:"19:00"},
        {id:4,time:"20:00"},
        {id:5,time:"21:00"},
        {id:6,time:"22:00"}
      ])

      const updateTimes = () => {
        return availableTimes;
      }

      const initializeTimes = () => {
        //this will intialize the available times
      }

    return (
        <LayoutPage>
        
      
     <>
        <CallToAction/>
        <Specials/>
        <CustomerSay/>
        <Chicago/>
     </>
      </LayoutPage>
    );
}