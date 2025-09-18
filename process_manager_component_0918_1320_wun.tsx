// 代码生成时间: 2025-09-18 13:20:28
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of the process item.
const processItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
  start: PropTypes.func,
  stop: PropTypes.func,
};

// Define the shape of props for the component.
const propTypes = {
  processes: PropTypes.arrayOf(processItemShape).isRequired,
  onProcessChange: PropTypes.func.isRequired,
};

// Define the types for process and the props.
type ProcessType = {
  id: string;
  name: string;
  status?: string;
  start?: () => void;
  stop?: () => void;
};

type PropsType = {
  processes: ProcessType[];
  onProcessChange: (processId: string, action: 'start' | 'stop') => void;
};

const ProcessManagerComponent: React.FC<PropsType> = ({ processes, onProcessChange }) => {
  // State to manage the processes.
  const [processesState, setProcessesState] = useState<ProcessType[]>(processes);

  // A function to handle process status changes.
  const handleProcessChange = (id: string, action: 'start' | 'stop') => {
    setProcessesState((prevState) =>
      prevState.map((process) =>
        process.id === id ? { ...process, status: action } : process
      )
    );
    onProcessChange(id, action);
  };

  return (
    <div>
      {processesState.map((process) => (
        <div key={process.id} className={`process ${process.status || ''}`}>
          <h3>{process.name}</h3>
          {process.status ? <p>Status: {process.status}</p> : null}
          {process.start && !process.status && (
            <button onClick={() => handleProcessChange(process.id, 'start')}>Start</button>
          )}
          {process.stop && process.status && (
            <button onClick={() => handleProcessChange(process.id, 'stop')}>Stop</button>
          )}
        </div>
      ))}
    </div>
  );
};

ProcessManagerComponent.propTypes = propTypes;

export default ProcessManagerComponent;
