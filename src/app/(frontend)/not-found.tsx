import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-7 col-start-1 md:col-span-5 md:col-start-2">
        <h1 className="text-5xl text-center">404</h1>
        <p className="mt-4 text-center">This page could not be found.</p>
      </div>
    </div>
  )
}
