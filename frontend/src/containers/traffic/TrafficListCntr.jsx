import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTerminals } from "../../modules/traffic/BusMod";
import { listStations, startStations, selectStart, endStations, selectEnd } from "../../modules/traffic/TrainMod";
import TrafficListComp from '../../components/traffic/TrafficListComp';

const TrafficListCntr = ({ target }) => {
  console.log('TrafficListCntr : ', target);
  const dispatch = useDispatch();
  // const [stationId, setStationId] = useState(null);
  const { terminals, stations, stationStartDetails, startStation, stationEndDetails, endStation } = useSelector(({ BusMod, TrainMod }) => ({
    terminals: BusMod?.terminals,
    stations: TrainMod?.stations,
    stationStartDetails: TrainMod?.stationStartDetails,
    startStation: TrainMod?.startStation,
    stationEndDetails: TrainMod?.stationEndDetails,
    endStation: TrainMod?.endStation
  }))

  const onClick = (e) => {
    console.log('click Target : ', e.target);
    const cityCode = e.target.value;
    if (e.target.dataset.type === 'start') {
      console.log('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
      dispatch(startStations({ cityCode }));
    }
    else {
      console.log('22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222');
      dispatch(endStations({ cityCode }));
    }

  }
  const onClick2 = (e) => {
    console.log('=====> ', e.target);
    const stationId = e.target.dataset.value;
    // setStationId(e.target.value);
    console.log('stationId =================================> ', stationId);
    console.log('dataset!!!!!!!!!!!!!!!!!!!!!======> ', e.target.dataset.type);
    if (e.target.dataset.type === 'start') {
      dispatch(selectStart({ stationId }));
    }
    else {
      dispatch(selectEnd({ stationId }));
    }
  }


  useEffect(() => {
    if (target === 'train') {
      console.log('train에 들어왔나')
      dispatch(listStations())
    }
    else {
      dispatch(listTerminals())
    }
  }, [dispatch, target])
  return (
    <div>
      {stations &&
        <TrafficListComp terminals={terminals} stations={stations} onClick={onClick} stationStartDetails={stationStartDetails} onClick2={onClick2} stationEndDetails={stationEndDetails} />
      }
    </div>
  );
};

export default TrafficListCntr;