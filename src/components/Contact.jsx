import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Heading from "./Heading";

const Contact = ({ scrl }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_clu5ntt",
        "portfolio_site",
        form.current,
        "user_596t3dsMeOpG8cerl1t9V"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Heading
        title="Contact Me"
        description="If you've seen my potential or want to talk to me, don't hesitate to send me a message."
      />
      <div
        className="w-full sm:px-16 p-6 flex justify-center items-center"
        ref={scrl}>
        <form ref={form} className="sm:w-8/12" onSubmit={sendEmail}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-full-name">
                Full Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-900 text-white border-2 border-pink-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800 focus:border-yellow-500"
                id="grid-full-name"
                type="text"
                name="name"
                placeholder="Jane Doe"
                required
              />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-subject">
                Subject
              </label>
              <input
                className="appearance-none block w-full bg-gray-900 text-white border-2 border-pink-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-yellow-500"
                id="grid-subject"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-email">
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-900 text-white border-2 border-pink-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800 focus:border-yellow-500"
                id="grid-email"
                type="email"
                name="email"
                placeholder="example@domain.com"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-message">
                Your Message
              </label>
              <textarea
                rows="10"
                className="appearance-none block w-full bg-gray-900 text-white border-2 border-pink-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800 focus:border-yellow-500"
                name="message"
                placeholder="Your Message"></textarea>
            </div>
            <div className="flex justify-center w-full px-3">
              <button
                className="transition-all shadow bg-yellow-500 hover:bg-pink-600 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-6 rounded"
                type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
