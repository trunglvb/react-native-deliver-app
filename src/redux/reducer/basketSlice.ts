import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IDishes } from '../../types'

type IBasketItem = IDishes

export interface IBasketState {
  items: IBasketItem[]
}

const initialState: IBasketState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IDishes>) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload)

      const newBasket = [...state.items]
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn('can not remove')
      }
      state.items = newBasket
    },
    resetBasketState: () => initialState
  }
})

export const { addToBasket, removeFromBasket, resetBasketState } = basketSlice.actions

const basketReducer = basketSlice.reducer
export default basketReducer
