import React from 'react';

const Results = (props) => {
  const { allTheTabs, currentTabIndex } = props;

  return (
    <div className="results">
      { allTheTabs[currentTabIndex].content }
    </div>
  )
}

export default Results;