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

export interface IDishes {
  id: number
  name: string
  description: string
  price: string
  image: string
}
