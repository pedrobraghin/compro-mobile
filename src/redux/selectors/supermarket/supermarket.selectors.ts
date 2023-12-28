import { type RootState } from '../../store'

export const selectSupermarkets = (state: RootState) =>
  state.supermarket.supermarkets
