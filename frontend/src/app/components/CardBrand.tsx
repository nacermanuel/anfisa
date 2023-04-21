import { modelbrand } from '@/models/modelbrand'
import React from 'react'

interface Props{
  data: modelbrand
}

export const CardBrand = ({data} : Props) => {
  return (
    <div className="card w-fit bg-base-100 shadow-xl">
        <a href="">
            <figure><img src={data.image} alt={data.name} className='w-48 h-auto'/></figure>
            <div className="card-body h-0">
                <div className="card-actions justify-center">
                <div className="badge badge-outline">{data.name}</div>
                </div>
            </div>
        </a>
    </div>
  )
}
