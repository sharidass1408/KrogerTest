import {Product} from "./product";

export interface ProductQuantity {
  productId: number
  quantity: number
}

export interface User {
  id: number
  userId: number
  date: string
  products: ProductQuantity[]
}
