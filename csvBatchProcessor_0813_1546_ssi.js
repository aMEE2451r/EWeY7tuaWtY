// 代码生成时间: 2025-08-13 15:46:07
import React, { useState } from 'react';
import { parse } from 'papaparse';
import PropTypes from 'prop-types';

// Define PropTypes for the component
const propTypes = {
  csvData: PropTypes.string.isRequired,
  processData: PropTypes.func.isRequired
};

// Define TypeScript interface (if using TypeScript)
// interface CSVBatchProcessorProps {
//   csvData: string;
//   processData: (data: any[]) => void;
// }

// CSV Batch Processor component
const CSVBatchProcessor = ({ csvData, processData }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Parse CSV file data and process it
  const handleCSVData = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      setError(null);

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          parse(event.target.result, {
            header: true,
            complete: (results) => {
              processData(results.data);
              setIsLoading(false);
            },
            error: (err) => {
              setError(err.message);
              setIsLoading(false);
            },
          });
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type='file' onChange={handleCSVData} accept='.csv' />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

CSVBatchProcessor.propTypes = propTypes;

export default CSVBatchProcessor;