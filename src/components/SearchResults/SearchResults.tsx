import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { searchLoadingSelector, searchSelector } from '../../store/selectors'

import NotFound from '../NotFound'
import Loading from '../Loading'

import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import { fetchMoreItems } from '../../store/itunesSearchActions'

import { Card, Image, Content, ArtistName } from './SearchResults.styled'

const SearchResults = () => {
  const dispatch = useDispatch()
  const searchState = useSelector(searchSelector)
  const isLoading = useSelector(searchLoadingSelector)

  useInfiniteScroll(() => {
    dispatch(fetchMoreItems(searchState))
  })

  const notFound =
    searchState.isFetched && !searchState.isLoading && !searchState.items.length

  return (
    <div>
      {isLoading && <Loading />}
      {searchState.items.map((item, index) => (
        <Card key={item.trackId}>
          <Image src={item.trackImageUrl} alt={item.trackName} />
          <Content>
            <ArtistName>{`${index + 1}) ${item.artistName}`}</ArtistName>
            <div>{item.trackName}</div>
            <div>
              {item.trackPrice} {item.currency}
            </div>
          </Content>
        </Card>
      ))}

      {notFound && (
        <Card>
          <NotFound />
        </Card>
      )}
    </div>
  )
}

export default SearchResults
