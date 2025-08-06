// 代码生成时间: 2025-08-07 03:48:43
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FolderStructureOrganizer({ folders, onFolderClick }) {
  // State to keep track of expanded folders
  const [expandedFolders, setExpandedFolders] = useState({});

  const handleFolderClick = (folderName) => {
    setExpandedFolders((prevExpandedFolders) => {
      return {
        ...prevExpandedFolders,
        [folderName]: !prevExpandedFolders[folderName],
      };
    });
  };

  return (
    <div>
      {folders.map((folder) => (
        <div key={folder.name} style={{ marginLeft: folder.depth * 20 }}
          onClick={() => onFolderClick(folder.name) && handleFolderClick(folder.name)}>
          {folder.name}
          {expandedFolders[folder.name] && folder.subFolders && (
            <FolderStructureOrganizer
              folders={folder.subFolders}
              onFolderClick={onFolderClick}
            />
          )}
        </div>
      ))}
    </div>
  );
}

FolderStructureOrganizer.propTypes = {
  folders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      subFolders: PropTypes.array,
      depth: PropTypes.number,
    }),
  ).isRequired,
  onFolderClick: PropTypes.func.isRequired,
};

export default FolderStructureOrganizer;
