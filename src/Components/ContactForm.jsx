import React,{useRef} from "react";
import Emailjs from "@emailjs/browser"

const ContactForm = ({setNotification}) => {
    const formData = useRef("");

  const sendEmail = (e) => {
    e.preventDefault();

    Emailjs.sendForm("service_bg78ehs", "template_jqg91ix", formData.current, "9V7Wrws8DE0EvhPrP").then(
        ()=>{
          setNotification("message sent successfully..");
          setTimeout (()=> setNotification(''),3000);
          formData.current.reset();  
        },
        (error)=>{
            setNotification("Failed! to sent message...");
            setTimeout (()=> setNotification(''),3000);
            console.error(error.text);
        }
    );
  };
  return (
    <main className="bg-white p-7 w-600px border-1px border-zinc-300 rounded-lg shadow-lg">
      {/* from heading  */}
      <div className="text-center mb-8">
        <h1 className="text-4xl text-zinc-700 mb-2 font-bold">Let's Work Together</h1>
        <p className="text-md text-zinc-900">
          I'm always open to discussing new projects, creative ideas, or opportunities <br />to be part of your vision, Let's Connect !!
        </p>
      </div>
      {/* form */}
      <form autoComplete="off "  ref= {formData} onSubmit={sendEmail}>
        <div className="flex items-center gap-5">
          <div className="flex-1">
            <label htmlFor="user-name" className="text-zinc-800">
              Name:
            </label>
            <input
              type="text"
              name="user-name"
              id="user-name"
              placeholder="Full Name"
              required
              className="border-1px border-zinc-300 w-full bg-zinc-200 h-11 pl-3 mt-2 text-sm focus:outline-blue-600 rounded-lg"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="user-email" className="text-zinc-800">
              Email:
            </label>
            <input
              type="email"
              name="user-email"
              id="user-email"
              placeholder="Fill Email"
              className="border-1px border-zinc-300 w-full bg-zinc-200 h-11 pl-3 mt-2 text-sm focus:outline-blue-600 rounded-lg"
            />
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="user-subject" className="text-zinc-800">
            Subject
          </label>
          <input
            type="text"
            name="user-subject"
            id="user-subject"
            placeholder="Subject"
            required
            className="border-1px border-zinc-300 w-full bg-zinc-200 h-11 pl-3 mt-2 text-sm focus:outline-blue-600 rounded-lg"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="message" className="text-zinc-800">
            Message
          </label>

          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Type-Your-Message-Here..."
            required
            className="border-1px border-zinc-300 w-full bg-zinc-200  p-3 mt-2 text-sm focus:outline-blue-600 rounded-lg resize-none"
          ></textarea>
        </div>
        <div className="mt-8">
          <button
            type="Submit"
            className="w-full py-3 bg-blue-700  text-white rounded-lg active:bg-blue-700 "
          >
            {" "}
            send message
          </button>
        </div>
      </form>
    </main>
  );
};

export default ContactForm;
