// 代码生成时间: 2025-08-19 16:15:10
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the type for folder items
type FolderItemType = {
  name: string;
  children?: FolderItemType[];
};

// Define the propTypes for the component
const propTypes = {
  initialStructure: PropTypes.arrayOf(PropTypes.shape(FolderItemType)).isRequired,
};

// FolderStructureOrganizer React component
const FolderStructureOrganizer = ({ initialStructure }) => {
  // State to manage the folder structure
  const [folderStructure, setFolderStructure] = useState<FolderItemType[]>(initialStructure);

  // Function to add a new folder
  const addFolder = (parentName: string, folderName: string) => {
    // Find the parent folder and add a new child folder
    const updatedStructure = folderStructure.map(folder => {
      if (folder.name === parentName) {
        return {
          ...folder,
          children: folder.children ? [...folder.children, { name: folderName }] : [{ name: folderName }],
        };
      }
      return folder;
    });
    setFolderStructure(updatedStructure);
  };

  // Function to remove a folder
  const removeFolder = (folderName: string) => {
    const updatedStructure = folderStructure.filter(folder => folder.name !== folderName);
    setFolderStructure(updatedStructure);
  };

  // Render the folder structure
  const renderFolder = (folder: FolderItemType, parentName?: string) => {
    return (
      <div key={folder.name}>
        <div>{folder.name}</div>
        {folder.children && folder.children.length > 0 && (
          <div>
            {folder.children.map(child => renderFolder(child, folder.name))}
          </div>
        )}
        {parentName && (
          <button onClick={() => removeFolder(folder.name)}>Remove</button>
        )}
      </div>
    );
  };

  return (
    <div>
      {folderStructure.map(folder => renderFolder(folder))}
      <button onClick={() => addFolder('Root', 'New Folder')}>Add Folder</button>
    </div>
  );
};

FolderStructureOrganizer.propTypes = propTypes;

export default FolderStructureOrganizer;
