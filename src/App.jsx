import React, { Component } from 'react';
import axios from 'axios';
import Token from './config/token';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carriers: [],
      searchData: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    const { searchData } = this.state;
    const data = searchData.split(',');
    const addresses = data;
    axios
      .post(
        'https://dev.avantmark.com/ArcherWebApi_Doc/api/carriers/QueryCarriersByAddress',
        {
          addresses,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${Token}`,
          },
        }
      )
      .then(res => {
        this.setState({ carriers: res.data });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ searchData: e.target.value });
  };

  render() {
    const { carriers } = this.state;
    return (
      <div className="App">
        <h1 className="display-4">Welcome to Carrier Search!</h1>
        <SearchForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <SearchResult carriers={carriers} />
      </div>
    );
  }
}

export default App;
