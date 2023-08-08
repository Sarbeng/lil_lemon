import {MdOutlineCheck, MdCheck} from "react-icons/md"

const ConfirmedBooking = () => {
  return (
    <section className="flex gap-4 flex-col justify-center items-center h-96 text-primary-green">
      <section className="flex  bg-primary-green w-16 h-16 rounded-full items-center justify-center">
      <span className="text-4xl text-white"><MdOutlineCheck/></span>
      </section>
      <section className="text-center">
      <h2 className="text-2xl font-semibold">Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
      </section>
    </section>
  );
};

export default ConfirmedBooking;
