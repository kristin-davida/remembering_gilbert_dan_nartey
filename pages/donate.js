import "styles/globals.css";

import Link from "next/link";
import {Header} from "@/components";

// const Header = dynamic(() => import('../components/Header'), { ssr: false })

export default function Home() {
  return (
      <div>
        <Header />
          <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-col text-center w-full mb-12">
                      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Tribute and Memorial Donation</h1>
                      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">*impact statement*</p>
                  </div>
                  <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                      <div className="sm:w-1/2 mb-10 px-4">
                          <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Donate to the Family</h2>
                          <p className="leading-relaxed text-base">The Dan-Nartey Family thank you for your kind donation. Your kind sympathy and support is greatly appreciated.</p>
                          <button
                              className="flex mx-auto mt-6 text-white bg-gray-500 border-0 py-2 px-5 focus:outline-none hover:bg-gray-600 rounded">Donate
                          </button>
                      </div>
                      <div className="sm:w-1/2 mb-10 px-4">
                          <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Donate to Charity</h2>
                          <p className="leading-relaxed text-base">The Dan-Nartey Family have chosen to support the *insert charity* in loving memory of Gilbert. Any donations made are greatly appreciated and will contribute to making a difference in the lives of others.</p>
                          <button
                              className="flex mx-auto mt-6 text-white bg-gray-500 border-0 py-2 px-5 focus:outline-none hover:bg-gray-600 rounded">Donate
                          </button>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}