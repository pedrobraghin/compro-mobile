import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ISupermarketSlice } from './types'

const initialState: ISupermarketSlice = {
  supermarkets: []
}

const supermarketSlice = createSlice({
  name: 'supermarket',
  initialState,
  reducers: {
    updateSupermarkets(
      storeState,
      { payload: { supermarkets } }: PayloadAction<ISupermarketSlice>
    ) {
      storeState.supermarkets = supermarkets
    }
  }
})

export default supermarketSlice
export const { updateSupermarkets } = supermarketSlice.actions
