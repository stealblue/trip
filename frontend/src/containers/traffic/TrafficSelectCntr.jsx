import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTerminals } from "../../modules/traffic/BusMod";
import { listStations, startStations, selectStart, endStations, selectEnd, listTrains } from "../../modules/traffic/TrainMod";
import TrafficSelectComp from '../../components/traffic/TrafficSelectComp';
import Swal from 'sweetalert2';

const TrafficSelectCntr = () => {
  const [target, setTarget] = useState(null);
  const [date, setDate] = useState(null);

  const dispatch = useDispatch();


  const { terminals, stations, stationStartDetails, startStation, stationEndDetails, endStation } = useSelector(({ BusMod, TrainMod }) => ({
    terminals: BusMod?.terminals,
    stations: TrainMod?.stations,
    stationStartDetails: TrainMod?.stationStartDetails,
    startStation: TrainMod?.startStation,
    stationEndDetails: TrainMod?.stationEndDetails,
    endStation: TrainMod?.endStation
  }))

  const onClickArea = (e) => {
    const cityCode = e.target.value;
    if (e.target.dataset.type === 'start') {
      dispatch(startStations({ cityCode }));
    }
    else {
      dispatch(endStations({ cityCode }));
    }

  }

  const onClickPlace = (e) => {
    const stationId = e.target.dataset.value;
    if (e.target.dataset.type === 'start') {
      dispatch(selectStart({ stationId }));
    }
    else {
      dispatch(selectEnd({ stationId }));
    }
  }



  const onClickCategory = (e) => {
    console.log('기차 또는 버스');
    setTarget(e.target.value);
  }

  const onChangeDate = (e) => {
    const targetDate = e.target.value;
    const originDate = new Date(targetDate);
    setDate(originDate);
  }

  const onToggle = (e) => {
    console.log("e.target : ", e.target);
    // const targetList = document.querySelector('')
  }

  useEffect(() => {
    if (target === 'train') { dispatch(listStations()) }
    else if (target === 'bus') { dispatch(listTerminals()) }
    if (startStation && endStation && date) {
      const startValue = startStation.stationId;
      const endValue = endStation.stationId;
      console.log('date : ', date);
      dispatch(listTrains({ startStation: startValue, endStation: endValue, date }))
    }
  }, [dispatch, target, startStation, endStation, date])
  return (
    <div>
      {
        <TrafficSelectComp
          terminals={terminals}
          stations={stations}
          stationStartDetails={stationStartDetails}
          stationEndDetails={stationEndDetails}
          onClickCategory={onClickCategory}
          onClickArea={onClickArea}
          onClickPlace={onClickPlace}
          onChangeDate={onChangeDate}
          onToggle={onToggle}
        />
      }
    </div>
  );
};

export default TrafficSelectCntr;

