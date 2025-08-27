// 代码生成时间: 2025-08-27 21:42:30
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define the type for the network status.
type NetworkStatus = 'online' | 'offline';

// Network Connection Checker functional component.
const NetworkConnectionChecker = () => {
  // State to hold the network status.
  const [status, setStatus] = useState<NetworkStatus>('unknown');

  useEffect(() => {
    // Event listener for the online event.
    const handleOnline = () => setStatus('online');

    // Event listener for the offline event.
    const handleOffline = () => setStatus('offline');

    // Attach event listeners.
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up the event listeners on component unmount.
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts.

  // Render the network status.
  return (
    <div>
      <p>Network Status: {status}</p>
    </div>
  );
};

// Prop types for the component.
NetworkConnectionChecker.propTypes = {
  // No props expected, this component does not accept any.
};

export default NetworkConnectionChecker;
