import React from 'react'

export const Header = () => {
  return (
    <div className="flex w-screen h-auto items-center justify-between mb-3">
        <div className="ml-4 flex items-center"> 
            <img src="/assets/logo.jpg" alt="logo" className='h-28 w-28 -rotate-6'/>
            <div className="text-3xl font-bold">
            <h1>TV<span className='text-[red]'>MAZE</span></h1>
        </div>
        </div>
    </div>
  )
}

