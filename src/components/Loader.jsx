import React from 'react';
import spinner from './spinner.gif';

const Loader = () => (
  <div className="d-flex justify-content-center mt-5">
    <img src={spinner} alt="Loading..." />
  </div>
);

export default Loader;
