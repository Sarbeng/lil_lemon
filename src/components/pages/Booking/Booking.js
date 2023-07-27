import { useState } from "react";

export default function BookingPage (props) {
  
    return (
       <>
       <section className="flex justify-center bg-primary-green py-8">
        <h1 className="text-4xl text-highlights-grey capitalize">Reserve a table</h1>
       </section>
         <section className=" flex justify-center py-10 px-4">
          <form className=" flex flex-col gap-5 w-full px- md:w-1/4 text-primary-green">
          <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" className="border p-2   rounded-lg focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green h-11"/>
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time " className="border p-2 rounded-lg focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green h-11">
      {<option>{
        console.log(props.availableTimes)
      }</option>}
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" className="border p-2 rounded-lg focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green h-11"/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" className="border p-2 rounded-lg">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <button type="submit" className="capitalize bg-primary-yellow text-highlight-text  text-highlights-black rounded-[5px] h-[48px] px-8 py-3 w-full mt-4" value="Make Your reservation">Make Your reservation</button>
          </form>
      </section>
       </>
    );
}