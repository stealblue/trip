import React, { useState } from 'react';
import TrafficListCntr from '../../containers/traffic/TrafficListCntr';

const TrafficListPage = () => {
  const [target, setTarget] = useState(null);
  const onClick = (e) => {
    console.log('target : ', e.target.value);
    setTarget(e.target.value);
  }
  return (
    <div>
      <button onClick={onClick} value="train">기차</button>
      <button onClick={onClick} value="bus">시외버스</button>
      <TrafficListCntr target={target} />
    </div>
  );
};

export default TrafficListPage;