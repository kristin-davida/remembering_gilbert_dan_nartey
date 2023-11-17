"use client";
import React from 'react'


const PostCard = ({message}) => {
    // const [messages, setMessages] = useState([]);
    //
    // useEffect(() => {
    //     getMessages().then((result) => setMessages(result))
    // })



    return (
        // <>
        //     {messages.map((message) => (
        //         // eslint-disable-next-line react/jsx-key
                <div className="px-60 py-4 w-full align-center justify-center">
                    <div className="h-full bg-gray-600 p-8 rounded">
                        <a className="inline-flex items-center">
                            <span className="flex-grow flex flex-col pl-4">
                              <span className="title-font font-medium text-white">{message.name}</span>
                              <span className="text-gray-300 text-sm">{message.location}</span>
                                <br></br>
                                <span className="text-white text-lg">{message.message}</span>
                            </span>
                        </a>
                    </div>
                </div>
        //     ))}
        // </>
    )
}
export default PostCard