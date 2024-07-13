"use client"
import React, { useState } from 'react'

const page = () => {
    const[number,setnumber]=useState(0)
    function p() {
        setnumber(number+11)
    }
    function d() {
        setnumber(number-11)
    }
  return (
    <div className=" flex flex-col justify-center items-center gap-4 h-screen w-full bg-yellow-700">
        <div>{number}</div>
        <div className="flex gap-5">
        <div className="h-10 w-10 bg-emerald-800 " onClick={p}>+</div>
        <div className="h-10 w-10 bg-red-800 " onClick={d}>-</div>
        </div>
    </div>
  )
}

export default page