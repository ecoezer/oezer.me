import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  if (submitted) {
    return (
      <main className="" id="Contact">
        <section className="mt-60 text-gray-700 body-font relative w-5/6 sm:w-5/6 md:w-5/6 lg:w-4/6 xl:w-4/6 2xl:w-4/6 3xl:w-3/6 flex mx-auto mb-40 4xl:w-3/6">
          <form action="/send-data-here" method="post">
            <div className="container px-5 py-7 mx-auto border-t-2 border-orange-50 rounded-3xl shadow-2xl">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Contact me
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Do you have a question, feedback or just want to say hello?
                  I&rsquo;d love to hear from you!
                </p>
              </div>
              <div className="lg:w-5/6 md:w-5/6 xl:w-5/6 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        name="name"
                        id="name"
                        required
                        minLength="5"
                        maxLength="20"
                        className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-pink-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600 "
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        id="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        name="email"
                        required
                        minLength="10"
                        maxLength="40"
                        className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-pink-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        name="message"
                        required
                        minLength="20"
                        maxLength="500"
                        className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-pink-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button type="submit" onClick={(e)=>{handleSubmit(e)}} className="flex m-auto justify-center  text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-violet-500 hover:rounded rounded-3xl text-lg transition-all duration-500 ease-linear">
                      Send
                    </button>
                  </div>
                  <h1 className='text-center flex mx-auto text-fuchsia-600'>May the code be with you! Your message has been received and is being processed!</h1>
                  <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <a className="text-indigo-500">hello@oezer.me</a>
                    <p className="leading-normal my-5">
                      <br />
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          
          </form>
         
        </section>
      </main>
    );
    
  }

  return (
    <main className="" id="Contact">
      <section className="mt-60 text-gray-700 body-font relative w-5/6 sm:w-5/6 md:w-5/6 lg:w-4/6 xl:w-4/6 2xl:w-4/6 3xl:w-3/6 flex mx-auto mb-40 4xl:w-3/6">
        <form action="/send-data-here" method="post">
          <div className="container px-5 py-7 mx-auto border-t-2 border-orange-50 rounded-3xl shadow-2xl">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Contact me
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Do you have a question, feedback or just want to say hello?
                I&rsquo;d love to hear from you!
              </p>
            </div>
            <div className="lg:w-5/6 md:w-5/6 xl:w-5/6 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      name="name"
                      id="name"
                      required
                      minLength="5"
                      maxLength="20"
                      className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-pink-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600 "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      id="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      name="email"
                      required
                      minLength="10"
                      maxLength="40"
                      className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-pink-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      name="message"
                      required
                      minLength="20"
                      maxLength="500"
                      className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-pink-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button type="submit" onClick={(e)=>{handleSubmit(e)}} className="flex m-auto justify-center  text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-violet-500 hover:rounded rounded-3xl text-lg transition-all duration-500 ease-linear">
                    Send
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-indigo-500">hello@oezer.me</a>
                  <p className="leading-normal my-5">
                    <br />
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};



