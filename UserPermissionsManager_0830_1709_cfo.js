// 代码生成时间: 2025-08-30 17:09:38
 * Features:
 * - Functional component with Hooks
 * - State management
 * - PropTypes for type checking
 * - Adheres to React best practices
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of the props for type checking.
const propTypes = {
  defaultPermissions: PropTypes.arrayOf(PropTypes.string),
  onChangePermissions: PropTypes.func,
};

// Define the default props if none are provided.
const defaultProps = {
  defaultPermissions: [],
  onChangePermissions: () => {},
};

function UserPermissionsManager({ defaultPermissions, onChangePermissions }) {
  // State to manage the current permissions.
  const [permissions, setPermissions] = useState(defaultPermissions);

  // Function to handle the permission change.
  const handlePermissionChange = (permission) => {
    // Check if permission is already in the list.
    const index = permissions.indexOf(permission);
    if (index > -1) {
      // Remove the permission if it exists.
      setPermissions(permissions.filter((p) => p !== permission));
    } else {
      // Add the permission if it does not exist.
      setPermissions([...permissions, permission]);
    }
  };

  // Function to update parent component with new permissions.
  const updateParentPermissions = () => {
    onChangePermissions(permissions);
  };

  return (
    <div>
      <h1>User Permissions Manager</h1>
      <ul>
        {permissions.map((permission, index) => (
          <li key={index}>{permission} <button onClick={() => handlePermissionChange(permission)}>Remove</button></li>
        ))}
      </ul>
      <div>
        <button onClick={updateParentPermissions}>Update Permissions</button>
      </div>
    </div>
  );
}

// Set propTypes and defaultProps for the component.
UserPermissionsManager.propTypes = propTypes;
UserPermissionsManager.defaultProps = defaultProps;

export default UserPermissionsManager;