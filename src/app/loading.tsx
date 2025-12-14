import React from 'react'

export default function loading() {
  return (
    <div className=' fixed inset-0 flex justify-center items-center bg-gray-600 z-50'>
      <span className="loader"></span>
    </div>
  )
}
