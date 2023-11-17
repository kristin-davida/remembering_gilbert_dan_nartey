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

    // if(router.isFallback) {
    //     return <Loader />
    // }

    return (
        <div>
            <div>
                <Header />
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
