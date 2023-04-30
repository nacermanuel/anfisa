import CardOrder from '../components/CardOrder'
import React from 'react'
import { fetchProducts } from '@/services/fetchProducts'
import { ModelProduct } from '@/models/ModelProduct'

interface ModelPedido extends ModelProduct{
    cartAmount: number;
}

const pedido = async ({ params }: any) => {
  const datos = params.query
  let urlPedido = datos.split('%3B').map((e:any)=> e.split('%2C'))
  
  const pedido: ModelPedido[] = []

 try{
    const dataProductos = await fetchProducts();

    urlPedido.forEach((e:any)=>{         
        if(e.length > 1){
            let iteracion = dataProductos.find((item:ModelProduct) => item.id == e[0])
            pedido.push({...iteracion, cartAmount: e[1]} )
        }
    }) 
 }catch(e){
    console.log(e);
 }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th>Cant.</th>
                    <th>Producto</th>
                    <th>Precio U.</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                    {
                        pedido.map((e: ModelPedido) => 
                            <CardOrder
                                key={e.id}
                                data={e}
                            />
                        )
                    }
                </tbody>
                {/* foot */}
                <tfoot>
                <tr>
                    <th></th>
                    <th></th>
                    <th>
                        Total Productos:
                    </th>
                    <th>$ 
                        { pedido.reduce((acu:number,item:ModelPedido) => {
                            if( typeof item.price === 'string'){
                                return acu + ( parseFloat(item.price) * item.cartAmount)
                            }else{
                                return  acu + ( item.price * item.cartAmount) 
                            }
                        },0).toFixed(2)}
                    </th>
                </tr>
                </tfoot>
                
            </table>
        </div>
    )
}

export default pedido