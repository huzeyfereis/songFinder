import styled from 'styled-components'

export const Image = styled.img`
  display: block;
  border-radius: 5px;
`

export const Content = styled.div`
  margin-left: 16px;
  font-size: 16px;
  text-align: left;

  div {
    margin-bottom: 8px;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 12px;
  margin: 1rem auto;
  width: 30%;

  border: 1px solid #efecec;
  border-radius: 5px;
  box-shadow: 10px 10px 5px -9px #efecec;

  img {
    width: 150px;
    height: 125px;
    object-fit: fill;
  }
`
export const ArtistName = styled.div`
  font-weight: bold;
`
