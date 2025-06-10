import React from 'react'
import Logo from './_components_/Logo';

const AuthLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <Logo />
       <div className="text-neutral-500 mb-5">Your World. Live.</div>
      {children}
    </div>
  )
}

export default AuthLayout;
