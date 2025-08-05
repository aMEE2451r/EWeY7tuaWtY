// 代码生成时间: 2025-08-06 05:04:27
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件的PropType
const propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onSearch: PropTypes.func,
};

// 定义组件的默认属性
const defaultProps = {
  onSearch: () => {
    console.log('Search triggered');
  },
};

function SearchComponent({ initialData, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  // 搜索算法优化实现
  const handleSearch = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = initialData.filter(item => item.name.toLowerCase().includes(lowerSearchTerm));
    setFilteredData(filtered);
    onSearch(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {filteredData.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

SearchComponent.propTypes = propTypes;
SearchComponent.defaultProps = defaultProps;

export default SearchComponent;
