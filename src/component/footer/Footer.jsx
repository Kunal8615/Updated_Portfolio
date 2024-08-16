import React from "react";

function Footer(){
return(
    <>
    <div className="  sm:p-5 border-t-2 border-white sm:p-5 lg:p-10 flex-col  bg-black text-white  pt-16   lg:max-w-full  ">
  <div className="grid gap-10 sm:p-5  row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="   text-white sm:col-span-2">
      <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
        <svg className="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" stroke="currentColor" fill="none">
          <rect x="3" y="1" width="7" height="12"></rect>
          <rect x="3" y="17" width="7" height="6"></rect>
          <rect x="14" y="1" width="7" height="6"></rect>
          <rect x="14" y="11" width="7" height="12"></rect>
        </svg>
        <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase"> Kunal.In</span>
      </a>
      <div className="mt-6 lg:max-w-sm">
        <p className="text-sm text-white">
            Thanks for Your Visit !
        </p>
        
      </div>
    </div>
    <div className="space-y-2 text-sm">
      <p className="text-base font-bold tracking-wide text-white">Contacts</p>
      <div className="flex">
        <p className="mr-1 text-white">Phone:</p>
        <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">9625661737</a>
      </div>
      <div className="flex">
        <p className="mr-1 text-white">Email:</p>
        <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">kk811464@gmail.com</a>
      </div>
      <div className="flex">
        <p className="mr-1 text-white">Address:</p>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
         Palam ,New Delhi
        </a>
      </div>
    </div>
    <div>
      <span className="text-base font-bold tracking-wide text-white">Social</span>
      <div className="flex items-center mt-1 space-x-3">
        <a href="https://x.com/kk811464" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path
              d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
            ></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/kunal_8615/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
            <circle cx="15" cy="15" r="4"></circle>
            <path
              d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
            ></path>
          </svg>
        </a>
        
      </div>
      <p className="mt-4 text-sm text-blue-400">
       Connect Here !!
      </p>
    </div>
  </div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
    <p className="text-sm text-white">
      © Copyright 2024 Kunal.in. All rights reserved.
    </p>
   
  </div>
</div>
    </>
)
}

export default Footer;