import React from 'react';

const Overview = (props) => {
  const { tasks } = props;

  return tasks.map((task, index) => {
    return (
      <p>
        {index + 1} {task}
      </p>
    );
  });
};

export default Overview;
