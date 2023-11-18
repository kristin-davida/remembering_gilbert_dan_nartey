import Head from 'next/head'
import { getMessages } from "@/services";
import {PostCard, Loader, Header} from "@/components";
import {useRouter} from 'next/router'
import React, {useEffect, useState} from "react";
import "styles/globals.css";


// const Header = dynamic(() => import('../../components/Header'), { ssr: false })

export default function Home({}) {
    const [messages, setMessages] = useState([]);
    const router = useRouter();

    useEffect(() => {
        getMessages().then((result) => setMessages(result))
        console.log(messages)
    })

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
            <div>
                <Header />
            </div>

            <div className="flex flex-col text-center w-full mb-12 py-16">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-800">Messages of
                    Condolence</h1>
            </div>

            <div className='grid grid-cols-1'>
                <div className="lg:col-span-8 col-span-1">
                    {messages.map((message) => <PostCard message={message.node} key={message.name} />)}
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const messages = (await getMessages()) || [];

    return {
        props: { messages }
    }
}
