
import { ModelProduct } from '@/models/ModelProduct';
import React from 'react'

interface ModelPedido extends ModelProduct{
    cartAmount: number;
}

interface Props {
    data: ModelPedido
}


const CardOrder = ({data}: Props) => {
  return (
    <tr>
        <td>
            <div className="badge">{data.cartAmount}</div>
        </td>
        <td>
        <div className="flex items-center space-x-3">
            <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
                <img src={data.image} alt="Avatar Tailwind CSS Component" />
            </div>
            </div>
            <div>
            <div className="font-bold">{data.name}</div>
            <div className="text-sm opacity-50">{data.brand}</div>
            </div>
        </div>
        </td>
        <td>${(typeof data.price === "string" ? (parseFloat(data.price)).toFixed(2) : (data.price).toFixed(2) )}</td>
        <td>${(typeof data.price === "string" ? (parseFloat(data.price) * data.cartAmount).toFixed(2) : (data.price * data.cartAmount).toFixed(2))}</td>
    </tr>
  )
}

export default CardOrder