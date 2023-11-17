import "styles/globals.css";

import Link from "next/link";
import {Header} from "@/components";

// const Header = dynamic(() => import('../components/Header'), { ssr: false })

export default function HomePage() {
  return (
      <div>
        <Header />
        <div className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <img className="mx-auto my-auto lg:w-2/6 md:w-3/6 w-5/6 mb-10 text-center object-cover object-center rounded" alt="hero" src="gdn.jpg"/>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Gilbert Dan-Nartey</h1>
              <h2 className="text-xl mb-8 leading-relaxed">(1938-2023)</h2>
              <div className="flex justify-center">
                <Link href="/post-message">
                  <button className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                    Post a Message
                  </button>
                </Link>
                <Link href="/view-messages">
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    View all Messages
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}