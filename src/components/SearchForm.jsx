import React from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from './TextFieldGroup';

const SearchForm = ({ radius, location, handleChange, handleSubmit }) => (
  <div className="search-form">
    <div className="div container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <p className="lead text center">
            Let's find some carriers in your location.
          </p>
          <div className="card shadow-sm mb-5 mt-5">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <TextFieldGroup
                  placeholder="Start Searching..."
                  name="location"
                  id="location"
                  value={location}
                  onChange={handleChange}
                  // required
                />
                <TextFieldGroup
                  type="number"
                  name="radius"
                  placeholder="50"
                  value={radius}
                  onChange={handleChange}
                />
                <div className="mb-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-info btn-block mt-4"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SearchForm.propTypes = {
  location: PropTypes.string,
  radius: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
