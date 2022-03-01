import React, { Fragment } from 'react'
import SearchInput from '../../components/SearchInput'
import SearchResults from '../../components/SearchResults'

const SearchPage = () => {
  return (
    <Fragment>
      <SearchInput />
      <SearchResults />
    </Fragment>
  )
}

export default SearchPage
