import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SearchForm = ({
  radius,
  city,
  state,
  handleChange,
  handleSubmit,
  setLoading,
}) => (
  <Card className="shadow-sm col-md-4 m-auto p-4">
    <Card.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className="font-weight-bold">City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder="Clear Lake"
            value={city}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="font-weight-bold">State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            placeholder="MN"
            value={state}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="font-weight-bold">Radius</Form.Label>
          <Form.Control
            type="number"
            name="radius"
            placeholder="10"
            value={radius}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">in miles</Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          size="lg"
          type="submit"
          onClick={setLoading}
          block
        >
          Search Carriers
        </Button>
      </Form>
    </Card.Body>
  </Card>
);

SearchForm.propTypes = {
  city: PropTypes.string,
  state: PropTypes.string,
  radius: PropTypes.string,
  setLoading: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
