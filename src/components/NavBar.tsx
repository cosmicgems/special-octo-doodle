import React from 'react'

const NavBar = () => {
  return (
    <header className='absolute'>
      <div className='flex flex-row p-4 static '>
        <div className='grow-0' style={{fontFamily: 'kodchasan'}}>
          MD
        </div>
        <div className='grow'>

        </div>
        <div className='grow-0'>
          menu
        </div>
      </div>
    </header>

  )
}

export default NavBar