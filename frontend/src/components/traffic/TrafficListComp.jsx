import React from 'react';

const TrafficItem = ({ item }) => {
  return <p>출발역 : ${item.depplacename} == {item.arrplandtime}/ 도착역 : {item.arrplacename} ==> {item.depplandtime} 기차종류 : {item.traingradename}</p>
}


const TrafficListComp = ({ resultTrains }) => {
  console.log('resultTrains : ', resultTrains);
  const result = resultTrains?.response.body.items?.item;

  return (
    <div>
      {resultTrains && result && result.map((item) => <TrafficItem item={item} />)}
    </div>
  );
};

export default TrafficListComp;