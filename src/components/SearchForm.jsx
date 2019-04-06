import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from './TextFieldGroup';

class SearchForm extends Component {
  render() {
    const { searchData, handleChange, handleSubmit } = this.props;
    return (
      <div className="search-form">
        <div className="div container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-5 text-center">Search for Carriers</h1>
              <p className="lead text center">
                Let's find some carriers in your area.
              </p>
              <form onSubmit={handleSubmit}>
                <TextFieldGroup
                  placeholder="Eg: Clear Lake MN, Brooklyn Park MN, New Hope MN"
                  name="searchData"
                  value={searchData}
                  onChange={handleChange}
                />
                <div className="mb-3">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  searchData: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
