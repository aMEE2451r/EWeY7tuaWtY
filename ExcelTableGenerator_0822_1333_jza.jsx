// 代码生成时间: 2025-08-22 13:33:30
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const ExcelTableGenerator = ({ rows, columns }) => {
  // State to keep track of selected rows and columns
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);

  // useMemo to optimize re-renders
# 优化算法效率
  const tableData = useMemo(() => {
# TODO: 优化性能
    return rows.map((row, index) => (
      {
        id: index,
        data: row,
        selected: selectedRows.includes(index) || selectedColumns.some(colIndex => row[colIndex])
      }
    ));
  }, [rows, selectedRows, selectedColumns]);
# 添加错误处理

  // Handler to toggle row selection
# 优化算法效率
  const toggleRowSelect = index => {
# NOTE: 重要实现细节
    setSelectedRows(currentSelectedRows => {
      const newSelectedRows = [...currentSelectedRows];
      if (newSelectedRows.includes(index)) {
        newSelectedRows.splice(newSelectedRows.indexOf(index), 1);
      } else {
        newSelectedRows.push(index);
# NOTE: 重要实现细节
      }
      return newSelectedRows;
    });
  };

  // Handler to toggle column selection
  const toggleColumnSelect = index => {
    setSelectedColumns(currentSelectedColumns => {
      const newSelectedColumns = [...currentSelectedColumns];
      if (newSelectedColumns.includes(index)) {
        newSelectedColumns.splice(newSelectedColumns.indexOf(index), 1);
      } else {
        newSelectedColumns.push(index);
# 添加错误处理
      }
      return newSelectedColumns;
    });
  };

  return (
# NOTE: 重要实现细节
    <div>
      <table>
        <thead>
          <tr>
            {Array.from({ length: columns }, (_, index) => (
              <th key={index} onClick={() => toggleColumnSelect(index)}
              >{`Column ${index + 1}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
# 优化算法效率
          {tableData.map(rowData => (
            <tr key={rowData.id}>
              {rowData.data.map((cell, index) => (
                <td key={index}
                  onClick={() => toggleRowSelect(rowData.id)}
                  style={{ backgroundColor: rowData.selected ? 'lightblue' : 'white' }}
                >{cell}</td>
# 优化算法效率
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// PropTypes for type checking
ExcelTableGenerator.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.array).isRequired,
  columns: PropTypes.number.isRequired,
};

export default ExcelTableGenerator;
