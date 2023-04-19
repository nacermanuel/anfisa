import { modelcategory } from '@/models/modelcategory'
import React from 'react'

interface Props{
  data: modelcategory
}

export const CardCategory = ( {data} : Props) => {
  return (
        <div className="carousel-item">
            <a href="">
                <img src={data.image} alt={data.name} className="rounded-box w-64"/>
            </a>
        </div>
  )
}
