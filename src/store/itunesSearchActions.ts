import itunesSearchService from '../services/itunesSearchService'

import { AppThunk } from './index'

import {
  initialState,
  itunesSearchActions,
  ISearchState,
} from './itunesSearchSlice'

export const { setItemsRequest, setItems, setMoreItemsRequest, setMoreItems } =
  itunesSearchActions

export const fetchItems =
  (term: string): AppThunk =>
  (dispatch) => {
    dispatch(setItemsRequest(term))

    itunesSearchService
      .getItunesItem(term, 0, initialState.fetchItemSize)
      .then((response) => {
        dispatch(setItems(response))
      })
      .catch((err) => {
        dispatch(setItems([]))
      })
  }

export const fetchMoreItems =
  (state: ISearchState): AppThunk =>
  (dispatch) => {
    dispatch(setMoreItemsRequest())

    itunesSearchService
      .getItunesItem(state.term, state.fetchItemNumber + 1, state.fetchItemSize)
      .then((response) => {
        dispatch(setMoreItems(response))
      })
      .catch((err) => {
        dispatch(setItems([]))
      })
  }
