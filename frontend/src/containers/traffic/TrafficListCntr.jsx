import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTerminals } from "../../modules/traffic/BusMod";
import { listStations, startStations, selectStart, endStations, selectEnd, listTrains } from "../../modules/traffic/TrainMod";
import TrafficListComp from '../../components/traffic/TrafficListComp';

const TrafficListCntr = ({ target }) => {
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
    if (startStation && endStation) {
      const startValue = startStation.stationId;
      const endValue = endStation.stationId;
      dispatch(listTrains({ startStation: startValue, endStation: endValue }))
    }
  }, [dispatch, target, startStation, endStation])
  return (
    <div>
      {stations &&
        <TrafficListComp terminals={terminals} stations={stations} onClick={onClick} stationStartDetails={stationStartDetails} onClick2={onClick2} stationEndDetails={stationEndDetails} />
      }
    </div>
  );
};

export default TrafficListCntr;