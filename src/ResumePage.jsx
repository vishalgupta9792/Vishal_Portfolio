import React from 'react'
import Navbar from './assets/Navbar'
import Footer from './assets/Footer'
import Resume from './assets/Resume'

export default function ResumePage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Resume />
      </main>
      <Footer />
    </div>
  )
}
