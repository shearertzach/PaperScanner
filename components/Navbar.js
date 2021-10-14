import React from 'react'
import Sidebar from './Sidebar'

export default function Navbar() {
  return (
    <div className='p-4 py-6 border-b-2 border-gray-400 mb-6 flex justify-between items-center'>
      <p className='text-gray-500 text-3xl font-semibold'>Paper Scanner</p>
      <Sidebar />
    </div>
  )
}
