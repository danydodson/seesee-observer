import React from 'react'
import { Input, SearchForm, Magnifier } from './searchbar-styles'

const Search = ({ searchField, searchChange }) => {
  return (
    <SearchForm>
      <Input
        type='search'
        onChange={searchChange}
        // value={this.state.term}
        placeholder='What are you looking for ?' />
      <Magnifier size='30px' />
    </SearchForm>
  )
}

export default Search