export interface IFeatured {
  id?: number
  imgUrl: string
  title: string
  rating: number
  genre: string
  address: string
  shortDescription?: string
  dishes?: IDishes[]
  long?: number
  lat?: number
}

export type IDishes = {
  id: number
  name: string
  description: string
  price: number
  image: string
  quantity?: number
  totalPrice?: number
}
