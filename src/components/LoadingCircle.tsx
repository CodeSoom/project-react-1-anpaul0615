import React from 'react';

/* Component Props/State */
type Props = {};

/* Component */
const LoadingCircle: React.FC<Props> = () => {
  return (
    <div role="progressbar">
      loading...
    </div>
  );
};

export default LoadingCircle;
