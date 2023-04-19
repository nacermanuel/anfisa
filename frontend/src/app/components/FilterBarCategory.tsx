import React from 'react'
import { CardCategory } from './CardCategory'
import { mockCategories } from '@/mock/mockcategories'
import { modelcategory } from '@/models/modelcategory'

export const FilterBarCategory = () => {
  return (
    <>
        <div className="carousel carousel-center max-w-fit p-4 space-x-4 rounded-box">
            
            { mockCategories.map((e: modelcategory)=> {
              return <CardCategory key={e.id} data={e} />
            })}
        </div>
    </>
  )
}
