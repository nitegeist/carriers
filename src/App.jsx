import React, { Component } from 'react';
import axios from 'axios';
import { Token, apiUrl } from './config';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carriers: [],
      location: '',
      radius: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    const { location, radius } = this.state;
    const getAddresses = async () => {
      const data = location.split(',');
      try {
        const result = await axios.post('/QueryAddresses', { data, radius });
        return result;
      } catch (err) {
        if (err) {
          return data;
        }
      }
    };

    const getCarriers = async () => {
      const addressData = await getAddresses();
      const addresses = addressData;
      const result = await axios
        .post(
          apiUrl,
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
        .then(res => this.setState({ carriers: res.data }))
        .catch(err => console.log(err));
      return result;
    };

    getCarriers();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
