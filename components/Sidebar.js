import React, { useState } from 'react'

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false)
  const sidebarState = sidebar ? 'w-11/12' : 'w-0'

  return (
    <div>
      <div className='cursor-pointer p-1 hover:bg-gray-200 rounded-md transition-all' onClick={() => setSidebar(!sidebar)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      <div className={`bg-gray-600 max-w-sm w-11/12 absolute right-0 top-0 h-screen transition-all duration-300 delay-75 z-20 ${sidebarState}`}>
        
      </div>
      <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 z-10' hidden={!sidebar} onClick={() => setSidebar(!sidebar)} />
    </div>
  )
}
