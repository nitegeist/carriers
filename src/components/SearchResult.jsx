import React from 'react';
import PropTypes from 'prop-types';

const SearchResult = ({ carriers }) => {
  const results = carriers.map(carrier => (
    <tr key={carrier.id}>
      <td>{carrier.Name}</td>
      <td>{carrier.Address.Street}</td>
      <td>{carrier.Address.City}</td>
      <td>{carrier.Address.State}</td>
      <td>{carrier.Address.Zip}</td>
      <td>{carrier.Address.Phone}</td>
      <td>{carrier.Address.Email}</td>
      <td>{carrier.MCNum}</td>
    </tr>
  ));
  return (
    <div className="card shadow-sm col-md-10 m-auto">
      <div className="card-body">
        <h4 className="mb-4">Here's what we found!</h4>
        <table className="table table-striped table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Motor Carrier Number</th>
            </tr>
          </thead>
          <tbody>{results}</tbody>
        </table>
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  carriers: PropTypes.array.isRequired,
};

export default SearchResult;
