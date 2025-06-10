import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="logo-container">
        <div className="circle upper"></div>
        <div className="small-circle upper"></div>
        <div className="ripple ripple1"></div>
        <div className="oval"></div>
        <div className="ripple ripple2"></div>
        <div className="small-circle lower"></div>
        <div className="circle lower"></div>
      </div>
       <div className="text-5xl text-[#ff7f9f]">Pixelatia</div>
    </div>
  )
}

export default Logo;
