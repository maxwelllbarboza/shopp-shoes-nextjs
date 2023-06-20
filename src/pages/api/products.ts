import { ProductsType } from '@/types/ProductsTypes'
import type { NextApiRequest, NextApiResponse } from 'next'

const products: ProductsType[] = [
  {
    id: 1,
    name: "Produto 1",
    price: 100,
    active: false
  },
  {
    id: 2,
    name: "Produto 2",
    price: 10,
    active: false
  },
  {
    id: 3,
    name: "Produto 3",
    price: 111,
    active: true
  },
  {
    id: 4,
    name: "Produto 4",
    price: 3,
    active: true
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductsType[]>
) {

  const {method, body} = req;

  switch(method){
    case 'POST':
      break;
    case 'PUT':
      break; 
    default:
      res.status(200).json([...products]);
      break;     

  }
  res.status(200).json([...products])
}
