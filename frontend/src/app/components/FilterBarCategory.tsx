import React from 'react'
import { CardCategory } from './CardCategory'

export const FilterBarCategory = () => {
  return (
    <>
        <div className="carousel carousel-center max-w-fit p-4 space-x-4 rounded-box">
            <CardCategory/>
            <CardCategory/>
            <CardCategory/>
            <CardCategory/>
            <CardCategory/>
            <CardCategory/>
        </div>
    </>
  )
}
