import React, { useState } from 'react'; 
import './App.css';
import SearchForm from './components/SearchForm'

const App = () => {
  const [addresses, setAddress] = useState([
    {
      addresses: ''
    }
  ])
  return (
    <div className="App">
      <h1 className='display-4'>Welcome to Carrier Search!</h1>
      <SearchForm />
    </div> 
  );
}

export default App;
