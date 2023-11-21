import "../styles/globals.css";

import Link from "next/link";
import {HomeHeader} from "@/components";
import React from "react";

const HomePage = () => {

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

  } return (
      <div>
        <HomeHeader />
        <div className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 mb-0 mt-4 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-800">Gilbert Dan-Nartey</h1>
              <h2 className="text-xl mb-8 leading-relaxed">(1938-2023)</h2>
              <div className="flex justify-center mb-16">
                <Link href="/post-message">
                  <button className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                    Post Message
                  </button>
                </Link>
                <Link href="/view-messages">
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    View Messages
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <br/>
        </div>
        <div>
          <div className="container px-5 mb-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 sm:w-1/3 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="object-center"
                       src="11.jpg"/>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/3 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="object-center"
                       src="PHOTO-2023-11-07-10-49-51.jpg"/>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/3 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="object-center"
                       src="PHOTO-2023-10-28-07-09-29.jpg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HomePage;