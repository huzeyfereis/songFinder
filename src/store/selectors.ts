import { createSelector } from "reselect";

import { RootState } from ".";

const searchStateSelector = (state: RootState) => state

export const selectSearchState = (state: RootState) => state.itunesSearch

export const searchSelector = createSelector(
  searchStateSelector,
  state => state.itunesSearch,
)

export const searchLoadingSelector = createSelector(
  searchStateSelector,
  state => state.itunesSearch.isLoading,
)
