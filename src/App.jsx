import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { Token, apiUrl, apiKey } from './config';
import Loader from './components/Loader';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carriers: [],
      city: '',
      state: '',
      radius: '',
      loading: false,
    };
  }

  setLoading = () => {
    this.setState({ loading: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    const { city, state, radius } = this.state;
    let zipcode;
    let adminAreas;

    const getZipCode = async () => {
      try {
        const result = await axios.get(
          `https://bypasscors.herokuapp.com/api/?url=https://www.zipcodeapi.com/rest/${apiKey}/city-zips.json/${city}/${state}`
        );
        zipcode = result.data.zip_codes;
      } catch (err) {
        console.log(err);
      }
    };

    const getAddresses = async () => {
      try {
        await getZipCode();
        const result = await axios.get(
          `https://bypasscors.herokuapp.com/api/?url=https://www.zipcodeapi.com/rest/${apiKey}/radius.json/${
            zipcode[0]
          }/${radius}/mile`
        );
        adminAreas = result.data.zip_codes;
      } catch (err) {
        console.log(err);
      }
    };

    const getCarriers = async () => {
      try {
        await getAddresses();
        const addresses = adminAreas.map(area => `${area.city} ${area.state}`);
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
        this.setState({ loading: false });
        return result;
      } catch (err) {
        console.log(err);
      }
    };

    getCarriers();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { carriers, loading } = this.state;
    return (
      <Container fluid>
        <h1 className="display-3 mb-5 text-center">
          Welcome to Carrier Search!
        </h1>
        <SearchForm
          setLoading={this.setLoading}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {loading === true ? <Loader /> : <SearchResult carriers={carriers} />}
      </Container>
    );
  }
}

export default App;
