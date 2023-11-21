import React, {useRef, useState} from "react";
import "styles/globals.css";
import {submitMessage} from "@/services";
import {Header} from "@/components";

const Home = () => {

    const [error, setError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({name: null, location: null, message: null});
    const nameEl = useRef();
    const locationEl = useRef();
    const messageEl = useRef()


    const onInputChange = (e) => {
        const {target} = e;
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

        const {value: name} = nameEl.current;
        const {value: location} = locationEl.current;
        const {value: message} = messageEl.current;

        if (!name || !location || !message) {
            setError(true);
            return;
        }
        const messageObj = {name, location, message};

        submitMessage(messageObj)
            .then((res) => {
                setShowSuccessMessage(true);

                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);

            });
    };

    function debounce(fn, ms) {
        let timer
        return _ => {
            clearTimeout(timer)
            timer = setTimeout(_ => {
                timer = null
                fn.apply(this, arguments)
            }, ms)
        };
    }

    function MyComponent() {
        const [dimensions, setDimensions] = React.useState({
            height: window.innerHeight,
            width: window.innerWidth
        })
        React.useEffect(() => {
            const debouncedHandleResize = debounce(function handleResize() {
                setDimensions({
                    height: window.innerHeight,
                    width: window.innerWidth
                })
            }, 1000)

            window.addEventListener('resize', debouncedHandleResize)

            return _ => {
                window.removeEventListener('resize', debouncedHandleResize)

            }
        })
    };
    return (
        <div>
            <Header/>

            <section className="text-gray-600 body-font">
                <div className="container px-8 py-16 mx-auto">
                    <div className="flex flex-wrap">
                        <div className="lg:w-1/2 md:w-full px-8 mb-16">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800 text-center">Write a
                                Message of
                                Condolence</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 text-center mb-8">Please share a
                                message of condolence
                                with the family in the box below.</p>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <input ref={nameEl}
                                               className="py-2 px-4  w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                                               placeholder="Name" name="name"/>
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <input ref={locationEl}
                                               className="py-2 px-4  w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                                               placeholder="Location" name="location"/>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <input ref={messageEl}
                                               className="py-32 px-4  w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                                               placeholder="Message" name="message"/>
                                    </div>
                                </div>
                            </div>
                            {error && <p className="text-xs text-red-500">All fields are required</p>}
                            <div className="p-2 w-full">
                                <br></br>
                                <button type="button" onClick={handleMessageSubmission}
                                        className="transition duration-500 ease flex mx-auto text-white bg-gray-400 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mb-8">Post
                                    Message
                                </button>
                                {showSuccessMessage &&
                                    <span className="text-lg inline-block:items-center font-semibold mt-3 text-white">Message submitted for review</span>}
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:w-full">
                            <div className="container">
                                <div className=" w-full text-center">
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-xl">Death Is
                                        Nothing At All</h2>
                                    <p className="text-gray-500">by Naa Dedei Crabbe</p>
                                    <span className="inline-block h-1 w-10 rounded bg-gray-500 mt-4 mb-2"></span>
                                    <p className="leading-relaxed text-sm">Death is nothing at all<br></br>I have only
                                        slipped away to the next room.<br></br>I am I and you are you.<br></br>Whatever
                                        you were to family.<br></br>Call me by my old familiar name.<br></br>Put no
                                        difference into your tone.<br></br>Wear no forced air of solemnity or
                                        sorrow.<br></br>Laugh as we always laughed.<br></br>At the little jokes you and Sammy
                                        enjoyed together.<br></br>Play, smile, think of the family<br></br>Let the name
                                        of Sammy be ever the household word<br></br>that it always be.<br></br>Let it be
                                        spoken without effect.<br></br>Without the trace of a shadow on it.<br></br>Life
                                        means all that is ever meant.<br></br>It is the same that it ever was.<br></br>There
                                        is absolute unbroken continuity<br></br>Why should the family be out of
                                        mind<br></br>because we are out of sight.<br></br>We the Crabbe family waiting
                                        for you.<br></br>For an interval.<br></br>Somewhere. Very near.<br></br>Just
                                        around the corner.<br></br>All is well.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
