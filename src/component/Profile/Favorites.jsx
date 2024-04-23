import React from 'react'
import { StoreCard } from "../Store/StoreCard"

export const Favorites = () => {
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>My favorites</h1>
      <div className='flex flex-wrap gap-2 justify-center'>
        {
          [1,1,1].map((item) => <StoreCard/>)
        }
      </div>
    </div>
  )
}
