import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

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
    <Container className="mt-5" fluid>
      {carriers.length === 0 || carriers === undefined ? (
        <h4 className="mt-5 display-4 text-center">
          You'll see the results here.
        </h4>
      ) : (
        <Card className="shadow-sm col-md-10 m-auto">
          <Card.Body>
            <h4 className="mb-4 display-4 text-center">
              Here's what we found!
            </h4>
            <Table striped bordered hover>
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
            </Table>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

SearchResult.propTypes = {
  carriers: PropTypes.array.isRequired,
};

export default SearchResult;
