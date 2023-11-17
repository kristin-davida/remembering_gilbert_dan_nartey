import Head from 'next/head'
import React, {useRef, useState} from "react";
import "styles/globals.css";
import {submitMessage} from "@/services";
import {Header} from "@/components";

const Home = () => {

    const [error, setError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({ name: null, location: null, message: null});
    const nameEl = useRef();
    const locationEl = useRef();
    const messageEl = useRef()


    const onInputChange = (e) => {
        const { target } = e;
        if (target.type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                [target.name]: target.checked,
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [target.name]: target.value,
            }));
        }
    };

    const handleMessageSubmission = () => {
        setError(false);

        const {value:name} = nameEl.current;
        const {value:location} = locationEl.current;
        const {value:message} = messageEl.current;

        if (!name || !location || !message) {
            setError(true);
            return;
        }
        const messageObj = { name, location, message };

        submitMessage(messageObj)
            .then((res) => {
                setShowSuccessMessage(true);

                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);

            });
    };

  return (
      <div className="message">
        <div>
            <Header />
        </div>

          <div className=" text-gray-600 message-font relative" >
              <div className="message container px-5 py-24 mx-auto">
                  <div>
                      <div className="flex flex-col text-center w-full mb-12">
                          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Message of
                              Condolence</h1>
                          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Please share a message of condolence
                              with the family in the box below.</p>
                      </div>
                      <div className="lg:w-1/2 md:w-2/3 mx-auto">
                          <div className="flex flex-wrap -m-2">
                              <div className="p-2 w-1/2">
                                  <div className="relative">
                                      <input ref={nameEl} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name" name="name" />
                                  </div>
                              </div>
                              <div className="p-2 w-1/2">
                                  <div className="relative">
                                      <input ref={locationEl} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Location" name="location" />
                                  </div>
                              </div>
                              <div className="p-2 w-full">
                                  <div className="relative">
                                      <input ref={messageEl} className="py-32 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Message" name="message" />
                                  </div>
                              </div>
                          </div>
                          {error && <p className="text-xs text-red-500">All fields are required</p>}
                          <div className="p-2 w-full">
                              <button type="button" onClick={handleMessageSubmission} className="transition duration-500 ease flex mx-auto text-white bg-gray-400 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">Post Message</button>
                              {showSuccessMessage && <span className="text-lg float-right font-semibold mt-3 text-gray-500">Message submitted for review</span>}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Home