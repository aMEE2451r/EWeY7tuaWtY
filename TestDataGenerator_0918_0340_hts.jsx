// 代码生成时间: 2025-09-18 03:40:59
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the structure of the test data as a TypeScript interface.
// Alternatively, if you're using TypeScript, you can uncomment the next lines and use them.
// interface TestData {
//   id: number;
//   name: string;
//   email: string;
// }

// Define propTypes for the component
const testDataPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

// TestDataGenerator component
const TestDataGenerator = () => {
  // State to store test data
  const [data, setData] = useState([]);
  
  // Function to generate a new test data
  const generateData = () => {
    const newId = data.length + 1;
    const newData = {
      id: newId,
      name: `Test User ${newId}`,
      email: `testuser${newId}@example.com`,
    };
    setData([...data, newData]);
  };

  // Render the component
  return (
    <div>
      <h1>Test Data Generator</h1>
      <button onClick={generateData}>Add Test Data</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            Name: {item.name}, Email: {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

// PropTypes
TestDataGenerator.propTypes = {
  // testData: testDataPropType,
};

export default TestDataGenerator;