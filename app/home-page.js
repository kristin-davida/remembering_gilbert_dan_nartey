import "../styles/globals.css";

import Link from "next/link";
import {Header} from "@/components";

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
        <Header />
        <div className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Gilbert Dan-Nartey</h1>
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

            <section className="text-gray-600 body-font">
              <div className="container px-5 mb-8 mx-auto flex flex-wrap">
                <div className="flex flex-wrap md:-m-2 -m-1">
                  <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-1/2">
                      <img alt="gallery" className="w-full object-cover h-full object-center block"
                           src="PHOTO-2023-10-30-10-03-32.jpg"/>
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                      <img alt="gallery" className="w-full object-cover h-full object-center block"
                           src="PHOTO-2023-10-28-07-15-25.jpg"/>
                    </div>
                    <div className="md:p-2 p-1 w-full">
                      <img alt="gallery" className="w-full h-full object-cover object-center block"
                           src="PHOTO-2023-11-07-10-49-51.jpg"/>
                    </div>
                  </div>
                  <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-full">
                      <img alt="gallery" className="w-full h-full object-cover object-center block"
                           src="PHOTO-2023-10-30-08-00-09.jpg"/>
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                      <img alt="gallery" className="w-full object-cover h-full object-center block"
                           src="PHOTO-2023-11-03-15-52-46.jpg"/>
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                      <img alt="gallery" className="w-full object-cover h-full object-center block"
                           src="PHOTO-2023-10-28-07-25-37.JPG"/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto mb-24">
              <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">Death Is Nothing At All</h2>
                <p className="text-gray-500">by Naa Dedei Crabbe</p>
                <span className="inline-block h-1 w-10 rounded bg-gray-500 mt-8 mb-6"></span>
                <p className="leading-relaxed text-lg">Death is nothing at all<br></br>I have only slipped away to the next room.<br></br>I am I and you are you.<br></br>Whatever you were to family.<br></br>Call me by my old familiar name.<br></br>Put no difference into your tone.<br></br>Wear no forced air of solemnity or sorry.<br></br>Laugh as we always laughed.<br></br>At the little jokes you Sammy enjoyed together.<br></br>Play, smile, think of the family<br></br>Let the name of Sammy be ever the household word<br></br>that it alway be.<br></br>Let it be spoken without effect.<br></br>Without the trace of a shadow on it.<br></br>Life means all that is ever meant.<br></br>It is the same that it ever was.<br></br>There is absolute unbroken continuity<br></br>Why should the family be out of mind<br></br>because we are out of sight.<br></br>We the Crabbe family waiting for you.<br></br>For an interval.<br></br>Somewhere. Very near.<br></br>Just around the corner.<br></br>All is well.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}

export default HomePage;