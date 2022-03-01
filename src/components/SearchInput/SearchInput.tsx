import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Box, TextField } from '@mui/material'
import { Button } from '@mui/material'

import { fetchItems } from '../../store/itunesSearchActions'

import { Image } from './SearchInput.styled'

const SearchInput = () => {
  const dispatch = useDispatch()
  const [term, setTerm] = useState('')

  const handleChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }

  const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && term.length) {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    dispatch(fetchItems(term))
  }

  return (
    <Fragment>
      <Image src='/itunes-logo.svg' alt='logo' />
      <Box
        component='form'
        sx={{
          '& > :not(style)': { mt: 2, width: '25ch' },
        }}
        noValidate
        autoComplete='off'>
        <TextField
          id='searchInput'
          label='Search'
          variant='outlined'
          value={term}
          onChange={handleChangeTerm}
          inputProps={{ 'data-testid': 'search-input' }}
          onKeyPress={handlePressEnter}
          helperText='Please enter artist, song or album'
        />
      </Box>
      <Button onClick={handleSubmit} sx={{ ml: 2, mb: 4 }} variant='contained'>
        Search
      </Button>
    </Fragment>
  )
}

export default SearchInput
