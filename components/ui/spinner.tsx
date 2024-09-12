import React from 'react';

interface SpinnerProps {
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className = '' }) => {
  return (
    <div className={`inline-block w-8 h-8 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin ${className}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
