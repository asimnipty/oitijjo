import React from 'react';
import { TERipple } from "tw-elements-react";


const Footer = () => {
  return (
    <footer className="text-center text-white bg-blue-500">
            <div className="container p-6 mx-auto">
                <div className="">
                    <span className="flex items-center justify-center w-full">
                        <span className="mr-4">Best Life Style</span>
                        
                        <a href="https://www.facebook.com/shajunii?mibextid=ZbWKwL" target='_blank'>
                            <button
                                type="button"
                                className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium cursor-pointer">
                                Like US  
                            </button>
                         </a>   
                    
                    </span>
                </div>
            </div>

            {/* <!--Copyright section--> */}
            <div
                className="p-4 text-center bg-black bg-opacity-20">
                © 2023 Copyright:
                <a className="text-white" href="https://shajuni.com/"
                > Shajuni </a>
            </div>
        </footer>
  )
}

export default Footer