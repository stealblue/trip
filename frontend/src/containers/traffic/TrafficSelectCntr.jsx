<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTerminals } from "../../modules/traffic/BusMod";
import { listStations, startStations, selectStart, endStations, selectEnd, listTrains } from "../../modules/traffic/TrainMod";
import TrafficSelectComp from '../../components/traffic/TrafficSelectComp';

const TrafficSelectCntr = () => {
  const [target, setTarget] = useState(null);
  const [date, setDate] = useState(null);

  const dispatch = useDispatch();

=======
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTerminals } from "../../modules/traffic/BusMod";
import { listStations, startStations, selectStart, endStations, selectEnd, listTrains } from "../../modules/traffic/TrainMod";
import TrafficListComp from '../../components/traffic/TrafficSelectComp';

const TrafficListCntr = ({ target, date }) => {
  const dispatch = useDispatch();
>>>>>>> 7a40b0e3ee5446cb77350a5c498ecbca589abcff
  const { terminals, stations, stationStartDetails, startStation, stationEndDetails, endStation } = useSelector(({ BusMod, TrainMod }) => ({
    terminals: BusMod?.terminals,
    stations: TrainMod?.stations,
    stationStartDetails: TrainMod?.stationStartDetails,
    startStation: TrainMod?.startStation,
    stationEndDetails: TrainMod?.stationEndDetails,
    endStation: TrainMod?.endStation
  }))

<<<<<<< HEAD
  const onClickArea = (e) => {
=======
  const onClick = (e) => {
>>>>>>> 7a40b0e3ee5446cb77350a5c498ecbca589abcff
    console.log('click Target : ', e.target);
    const cityCode = e.target.value;
    if (e.target.dataset.type === 'start') {
      dispatch(startStations({ cityCode }));
    }
    else {
      dispatch(endStations({ cityCode }));
    }

  }
<<<<<<< HEAD
  const onClickPlace = (e) => {
=======
  const onClick2 = (e) => {
>>>>>>> 7a40b0e3ee5446cb77350a5c498ecbca589abcff
    const stationId = e.target.dataset.value;
    if (e.target.dataset.type === 'start') {
      dispatch(selectStart({ stationId }));
    }
    else {
      dispatch(selectEnd({ stationId }));
    }
  }


<<<<<<< HEAD
  const onClickCategory = (e) => {
    console.log('기차 또는 버스');
    setTarget(e.target.value);
  }

  const onChangeDate = (e) => {
    const targetDate = e.target.value;
    const originDate = new Date(targetDate);
    setDate(originDate);
  }

  useEffect(() => {
    if (target === 'train') { dispatch(listStations()) }
    else if (target === 'bus') { dispatch(listTerminals()) }
    else { }
    if (startStation && endStation && date) {
=======
  useEffect(() => {
    if (target === 'train') { dispatch(listStations()) }
    else { dispatch(listTerminals()) }
    console.log('cont')
    if (startStation && endStation && date) {
      console.log('메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수메밀국수')
>>>>>>> 7a40b0e3ee5446cb77350a5c498ecbca589abcff
      const startValue = startStation.stationId;
      const endValue = endStation.stationId;
      console.log('date : ', date);
      dispatch(listTrains({ startStation: startValue, endStation: endValue, date }))
    }
  }, [dispatch, target, startStation, endStation, date])
  return (
    <div>
<<<<<<< HEAD
      {
        <TrafficSelectComp
          terminals={terminals}
          stations={stations}
          stationStartDetails={stationStartDetails}
          stationEndDetails={stationEndDetails}
          onClickCategory={onClickCategory}
          onClickArea={onClickArea}
          onClickPlace={onClickPlace}
          onChangeDate={onChangeDate} />
=======
      {stations &&
        <TrafficListComp terminals={terminals} stations={stations} onClick={onClick} stationStartDetails={stationStartDetails} onClick2={onClick2} stationEndDetails={stationEndDetails} />
>>>>>>> 7a40b0e3ee5446cb77350a5c498ecbca589abcff
      }
    </div>
  );
};

<<<<<<< HEAD
export default TrafficSelectCntr;
=======
export default TrafficListCntr;
>>>>>>> 7a40b0e3ee5446cb77350a5c498ecbca589abcff
