import axios from 'axios'

import { IItunesItem } from '../../store/itunesSearchSlice'

interface IItunesResponse {
  artistName: string
  trackId: string
  trackName: string
  trackImageUrl: string
  trackPrice: number
  currency: string
  artworkUrl100: string
}

class ITunesSearchService {
  private base_url = 'http://itunes.apple.com'
  getItunesItem = async (term: string, offset = 0, limit = 10) => {
    return axios
      .get(
        `${this.base_url}/search?term=${term}&entity=musicVideo&offset=${offset}&limit=${limit}`
      )
      .then((response) => {
        const result: IItunesItem[] = response.data.results.map(
          (item: IItunesResponse) => ({
            artistName: item.artistName,
            trackId: item.trackId,
            trackName: item.trackName,
            trackImageUrl: item.artworkUrl100,
            trackPrice: item.trackPrice,
            currency: item.currency,
          })
        )
        return result
      })
  }
}

export default new ITunesSearchService()
