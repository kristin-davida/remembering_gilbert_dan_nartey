import { getMessages } from "@/services";
import {PostCard, Header} from "@/components";
import {useRouter} from 'next/router'
import React, {useEffect, useState} from "react";
import "styles/globals.css";


export default function Home({}) {
    const [messages, setMessages] = useState([]);
    const router = useRouter();

    useEffect(() => {
        getMessages().then((result) => setMessages(result))
        console.log(messages)
    })

    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="flex flex-col text-center w-full mt-16 mb-8">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-800">Messages of
                    Condolence</h1>
            </div>
            <div className="h-96 overflow-hidden mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="content" className="object-cover object-center h-full w-full p-8"
                     src="14.jpg"/>
            </div>

            <div className='grid grid-cols-1 mb-16'>
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
