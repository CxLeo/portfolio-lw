import React from 'react'
import NavItem from './NavItem'

function NavBar() {
    const items = [
        {
            label:'Home',
            link:'/#home'
        },
        {
            label:'About',
            link:'/#about'
        },
        {
            label:'Experience',
            link:'/#experience'
        },
        {
            label:'Skills',
            link:'/#skills'
        },
        {
            label:'Projects',
            link:'/#projects'
        },
        {
            label:'Contact',
            link:'/#contact'
        }

    ]
  return (
    <>
        <nav className='sticky top-5 z-[15] flex bg-white lg:w-[37vw] mx-auto rounded-full py-5 px-10 shadow-lg border-[1px] justify-between max-h-[90px]'>
            {
                items.map((item,idx) => (
                    <div key={idx}>
                        <NavItem item={item}/>
                    </div>
                ))
            }
        </nav>
    </>
  )
}

export default NavBar