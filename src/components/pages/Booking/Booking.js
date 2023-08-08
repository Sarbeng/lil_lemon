import { useState } from "react";

export default function BookingPage(availableTimes, dispatch, submitForm) {
  console.log(dispatch);

  const [formData, setFormData] = useState({
    date: "",
    time: "00:00",
    guestNo: 1,
    occasion: "Birthday",
  });

  const handleFormChange = (event) => {
    //
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    dispatch({ type: "UPDATE_TIMES", payload: value });
  };

  const handleFormSubmit = (event) => {
    //
    event.preventDefault();
    submitForm(formData);
  };
  const currentDate = new Date().toISOString().split("T")[0];
  const options = availableTimes.map(time => <option key={time}>{time}</option>)

  return (
    <>
      <section className="flex justify-center bg-primary-green py-8">
        <h1 className="text-4xl text-highlights-grey capitalize">
          Reserve a table
        </h1>
      </section>
      <section className=" flex justify-center py-10 px-4">
        <form
          className=" flex flex-col gap-5 w-full px- md:w-1/4 text-primary-green"
          onSubmit={handleFormSubmit}
        >
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            name="date"
            id="res-date"
            min={currentDate}
            className="border p-2   rounded-lg focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green h-11"
            value={formData.date}
            onChange={handleDateChange}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleFormChange}
            className="border p-2 rounded-lg focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green h-11"
          >
            {options}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            name="guestNo"
            min="1"
            max="10"
            id="guests"
            value={formData.guestNo}
            onChange={handleFormChange}
            className="border p-2 rounded-lg focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green h-11"
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            className="border p-2 rounded-lg focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green h-11"
            value={formData.occasion}
            onChange={handleFormChange}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <button
            type="submit"
            className="capitalize bg-primary-yellow text-highlight-text  text-highlights-black rounded-[5px] h-[48px] px-8 py-3 w-full mt-4"
            value="Make Your reservation"
            aria-label="submit button"
          >
            Make Your reservation
          </button>
        </form>
      </section>
    </>
  );
}
