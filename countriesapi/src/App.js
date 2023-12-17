// Importing necessary React hooks and the stylesheet.
import React, { useState, useEffect } from 'react';
import './App.css';

// The main App component definition.
function App() {
  // 'useState' hook to create a state variable 'countries'.
  // This will store the data fetched from the API.
  const [countries, setCountries] = useState([]);

  // 'useEffect' hook to perform side effects in the component.
  // In this case, it's used for fetching data from the API.
  useEffect(() => {
    // Fetching data from the API.
    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
      // Parsing the response as JSON.
      .then(response => response.json())
      // Updating the 'countries' state with the fetched data.
      .then(data => setCountries(data))
      // Catching and logging any errors that occur during fetching.
      .catch(error => console.error('Error:', error));
  }, []); // An empty dependency array means this effect runs once after the initial render.

  // The JSX for rendering the component.
  return (
    <div className="App">
      <header className="App-header">
        {/* Title for the list of countries */}
        <h1>Countries</h1>
        {/* Container for the list of countries */}
        <div className="countries-container">
          {/* Mapping over the 'countries' state array.
              Each country is represented as a 'div' element. */}
          {countries.map((country, index) => (
            // Unique 'key' is necessary for items in a list for React to track changes efficiently.
            <div key={index} className="country-card">
              {/* Displaying the country's flag. The 'alt' attribute provides an alternative text for the image. */}
              <img src={country.flags.png} alt={`${country.name.common} flag`} />
              {/* Displaying the country's name. */}
              <h2>{country.name.common}</h2>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

// Exporting the App component to be used in other parts of the application.
export default App;
