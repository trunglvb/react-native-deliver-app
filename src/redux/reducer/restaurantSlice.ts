import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFeatured } from '../../types'

export interface IRestaurantState {
  restaurant: IFeatured
}

const initialState: IRestaurantState = {
  restaurant: {
    id: 0,
    imgUrl: '',
    title: '',
    rating: 0,
    genre: '',
    address: '',
    shortDescription: '',
    dishes: [],
    long: 0,
    lat: 0
  }
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<IFeatured>) => {
      state.restaurant = action.payload
    }
  }
})

export const { setRestaurant } = restaurantSlice.actions

const restaurantReducer = restaurantSlice.reducer
export default restaurantReducer
