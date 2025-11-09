import React from 'react'
import Wrapper from '../assets/wrappers/SearchForm'
import { Form, useNavigation } from 'react-router-dom'

const SearchForm = ({searchTerm}) => {
  const navigation=useNavigation();
  const isSubmitting=navigation.state==='submitting'
  return (
    <Wrapper>
      <Form className='form'>
        <input type="search" name='search' defaultValue={searchTerm} className='form-input'/>
        <button className='btn' disabled={isSubmitting}>Submit</button>
      </Form>
    </Wrapper>
  )
}

export default SearchForm