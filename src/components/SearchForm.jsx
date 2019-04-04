import React, { Component } from 'react'
import axios from 'axios'
import Token from '../config/token'
import TextFieldGroup from './TextFieldGroup'

class SearchForm extends Component {

  handleSubmit = e => {
    e.preventDefault()
    e.target.reset()
    const data = this.state.addresses
    let addresses = data.split(',')
    axios.post('https://dev.avantmark.com/ArcherWebApi_Doc/api/carriers/QueryCarriersByAddress', {
      addresses
    },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Token
      }
    }).then(res => {
        console.log(res.data)
      }
    ).catch(err => 
      console.log(err)
    )
    // this.setState(this.baseState)
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const {addresses} = this.context
    return (
      <div className='search-form'>
        <div className="div container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-5 text-center">
                Search for Carriers
              </h1>
              <p className='lead text center'>
                Let's find some carriers in your area.
              </p>
              <form onSubmit={this.handleSubmit}>
                <TextFieldGroup
                  placeholder='Eg: Clear Lake MN, Brooklyn Park MN, New Hope MN'
                  name='addresses'
                  value={addresses}
                  onChange={this.handleChange}
                />
                <div className='mb-3'>
                  <input type='submit' value='Submit' className='btn btn-info btn-block mt-4' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchForm