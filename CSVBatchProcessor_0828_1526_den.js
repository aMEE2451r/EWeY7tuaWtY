// 代码生成时间: 2025-08-28 15:26:19
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Papa from 'papaparse'; // You need to install papaparse package

// Define TypeScript type for props, if you are using TypeScript uncomment the below line
// import type { FunctionComponent } from 'react';
// import type { CSVFile } from './types'; // Define your types in another file

const CSVBatchProcessor = ({ onProcessed }) => {
  // State to manage the CSV files
  const [files, setFiles] = useState([]);
  // State to manage the processing status
  const [processingStatus, setProcessingStatus] = useState('');

  // Handle file input change
  const handleFileInputChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const csvFiles = Array.from(selectedFiles).filter(file => file.type === 'text/csv');
      setFiles(csvFiles);
    }
  };

  // Process the selected CSV files
  const processCSVFiles = () => {
    if (files.length === 0) {
      setProcessingStatus('No CSV files selected.');
      return;
    }

    setProcessingStatus('Processing...');
    files.forEach(file => {
      const fileReader = new FileReader();
      // Read file content as text
      fileReader.readAsText(file);
      fileReader.onload = (e) => {
        const csvData = e.target.result;
        // Parse CSV data using PapaParse
        Papa.parse(csvData, {
          header: true,
          complete: (results) => {
            // Handle the result of the CSV parsing
            onProcessed(results.data);
            setProcessingStatus('Processing complete.');
          },
          error: (error) => {
            setProcessingStatus('Error processing CSV: ' + error.message);
          },
        });
      };
    });
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileInputChange} />
      <button onClick={processCSVFiles}>Process CSV Files</button>
      <p>{processingStatus}</p>
    </div>
  );
};

CSVBatchProcessor.propTypes = {
  onProcessed: PropTypes.func.isRequired,
};

export default CSVBatchProcessor;