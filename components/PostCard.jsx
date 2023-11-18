"use client";
import React from 'react'

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

const PostCard = ({message}) => {
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
        });

    return (
        <div className="px-8 py-4 w-full align-center justify-center">
            <div className="max-w-full bg-gray-100 p-8 rounded">
                <a className="inline-flex items-center">
                    <span className="flex-wrap flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">{message.name}</span>
                      <span className="text-gray-500 text-sm">{message.location}</span>
                        <br></br>
                        <span className="text-gray-600 text-lg">{message.message}</span>
                    </span>
                </a>
            </div>
        </div>
    )
}
export default PostCard