import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IItunesItem {
  artistName: string
  trackId: string
  trackName: string
  trackImageUrl: string
  trackPrice: number
  currency: string
}

export interface ISearchState {
  items: Readonly<IItunesItem>[]
  term: string
  isLoading: boolean
  isFetched: boolean
  fetchItemNumber: number
  fetchItemSize: number
}

export const initialState: ISearchState = {
  items: [],
  term: '',
  isLoading: false,
  isFetched: false,
  fetchItemNumber: 0,
  fetchItemSize: 10,
}

const itunesSearchSlice = createSlice({
  name: 'itunesSearch',
  initialState,
  reducers: {
    setItemsRequest: (state: ISearchState, action: PayloadAction<string>) => {
      state.term = action.payload
      state.isLoading = true
      state.isFetched = true
    },

    setItems: (state: ISearchState, action: PayloadAction<IItunesItem[]>) => {
      state.items = action.payload
      state.isLoading = false
    },
    setMoreItemsRequest: (state: ISearchState) => {
      state.isLoading = true
      state.fetchItemNumber = state.fetchItemNumber + 1
    },
    setMoreItems: (state: ISearchState, action: PayloadAction<IItunesItem[]>) => {
      state.items = [...state.items, ...action.payload]
      state.isLoading = false
    }
  }
})

export const itunesSearchActions = itunesSearchSlice.actions

export default itunesSearchSlice