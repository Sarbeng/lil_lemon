import { useState } from "react";

export default function BookingPage (props) {
  
    return (
        <section>
          <form className=" flex flex-col gap-5 max-w-[200px]">
          <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date"/>
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time ">
      {<option>{
        console.log(props.availableTimes)
      }</option>}
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests"/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation" />
          </form>
      </section>
    );
}