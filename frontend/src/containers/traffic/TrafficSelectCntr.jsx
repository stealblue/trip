import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTerminals } from "../../modules/traffic/BusMod";
import { listStations, startStations, selectStart, endStations, selectEnd, listTrains } from "../../modules/traffic/TrainMod";
import TrafficListComp from '../../components/traffic/TrafficSelectComp';

const TrafficListCntr = ({ target, date }) => {
  const dispatch = useDispatch();
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
      dispatch(startStations({ cityCode }));
    }
    else {
      dispatch(endStations({ cityCode }));
    }

  }
  const onClick2 = (e) => {
    const stationId = e.target.dataset.value;
    if (e.target.dataset.type === 'start') {
      dispatch(selectStart({ stationId }));
    }
    else {
      dispatch(selectEnd({ stationId }));
    }
  }


  useEffect(() => {
    if (target === 'train') { dispatch(listStations()) }
    else { dispatch(listTerminals()) }
    console.log('cont')
    if (startStation && endStation && date) {
      console.log('메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수')
      const startValue = startStation.stationId;
      const endValue = endStation.stationId;
      console.log('date : ', date);
      dispatch(listTrains({ startStation: startValue, endStation: endValue, date }))
    }
  }, [dispatch, target, startStation, endStation, date])
  return (
    <div>
      {stations &&
        <TrafficListComp terminals={terminals} stations={stations} onClick={onClick} stationStartDetails={stationStartDetails} onClick2={onClick2} stationEndDetails={stationEndDetails} />
      }
    </div>
  );
};

export default TrafficListCntr;