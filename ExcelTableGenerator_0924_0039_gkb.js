// 代码生成时间: 2025-09-24 00:39:38
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the ExcelTableGenerator component
const ExcelTableGenerator = ({ headers, data }) => {
  // State to manage the data of the table
  const [tableData, setTableData] = useState(data);

  // Function to handle adding a new row to the table
  const addRow = () => {
    const newRow = {
      ...headers.reduce((acc, header) => ({ ...acc, [header]: '' }), {}),
      id: Date.now(), // Unique row identifier
    };
    setTableData([...tableData, newRow]);
  };

  // Render the table
  return (
    <div>
      <h2>Excel Table Generator</h2>
      <button onClick={addRow}>Add Row</button>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
# 增强安全性
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={row.id}>
              {headers.map((header, headerIndex) => (
                <td key={headerIndex}>{row[header] || ''}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// PropTypes for the ExcelTableGenerator component
ExcelTableGenerator.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
# 改进用户体验
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// Export the ExcelTableGenerator component
export default ExcelTableGenerator;
