import { ICategory, IFeatured } from './../types/category.type'
import http from '../utils/http'

export const getCategoryList = () => http.get<ICategory[]>('category')
export const getFeaturedList = () => http.get<IFeatured[]>('featured')
