
import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
     



{/* comes from react router dom */}
      <main className="min-h-screen">
       <Header/>

        {/* all routes are rendered from outlet */}
      <Outlet/>
      </main>
       {/* Footer */}
      {/* Footer */}
<footer className="bg-gray-900 text-gray-300 px-2 py-8 mt-10">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
    <p className="text-sm sm:text-base mb-4 sm:mb-0">
      &copy; {new Date().getFullYear()} Hirely. All rights reserved.
    </p>
    <div className="flex space-x-6 text-sm">
      <a
        href="#"
        className="hover:underline hover:text-blue-400 transition duration-200"
      >
        Privacy Policy
      </a>
      <a
        href="#"
        className="hover:underline hover:text-blue-400 transition duration-200"
      >
        Terms of Service
      </a>
      <a
        href="#"
        className="hover:underline hover:text-blue-400 transition duration-200"
      >
        Contact
      </a>
    </div>
  </div>
</footer>

      
    </div>
  )
}

export default AppLayout
