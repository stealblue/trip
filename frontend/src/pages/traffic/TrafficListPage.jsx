import React, { useState } from 'react';
import TrafficListCntr from '../../containers/traffic/TrafficSelectCntr';

const TrafficListPage = () => {
  const [target, setTarget] = useState(null);
  const [date, setDate] = useState(null);
  const onClick = (e) => {
    console.log('target : ', e.target.value);
    setTarget(e.target.value);
  }
  const onChange = (e) => {
    console.log('value : ', e.target.value);
    const targetDate = e.target.value;
    const originDate = new Date(targetDate);
    // const year = originDate.getFullYear();
    // const month = originDate.getMonth();
    // const dat = originDate.getDate();
    // console.log(`${year}${month}${dat}`);
    setDate(originDate);

  }

  return (
    <div>
      <button onClick={onClick} value="train">기차</button>
      <button onClick={onClick} value="bus">시외버스</button>
      <input type='date' onChange={onChange} />
      <TrafficListCntr target={target} date={date} />
    </div>
  );
};

export default TrafficListPage;