import React, { Component } from 'react'

export default class SearchBar extends Component {
  // create controlled object to ensure you write within react and not the dom using state
  state = {term: ''}

  handleChange = e => {
    this.setState ({term: e.target.value});
  }

  handleFormSubmit = e => {
    e.preventDefault();
    // ensure we call the callback from parent component without refreshing
    this.props.onTermSubmit(this.state.term)
  }

  render() {
    return (
      <div className='search_bar ui segment'>
        <form onSubmit={this.handleFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input 
            type='text'
            value={this.state.term}
            onChange={this.handleChange}/>
          </div>
        </form>
      </div>
    )
  }
}
