import React from 'react'
import Sidebar from './Sidebar'

export default function Navbar() {
  return (
    <div className='px-8 py-5 border-b-2 border-gray-400 mb-6 flex justify-between items-center'>
      <p className='text-gray-500 text-3xl font-semibold'>Paper Scanner</p>
      <Sidebar />
    </div>
  )
}
