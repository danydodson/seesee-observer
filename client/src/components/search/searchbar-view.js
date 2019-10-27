import React from 'react'

const Search = ({ searchField, searchChange }) => {
  return (
    <form className=''>
      <input
        type='search'
        onChange={searchChange}
        // value={this.state.term}
        placeholder='What are you looking for ?' />
    </form>
  )
}

export default Search