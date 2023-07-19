import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTerminals } from "../../modules/traffic/BusMod";
import { listStations, startStations, selectStart, endStations, selectEnd, selectDate } from "../../modules/traffic/TrainMod";
import TrafficSelectComp from '../../components/traffic/TrafficSelectComp';

const TrafficSelectCntr = () => {
  const [target, setTarget] = useState(null);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const dispatch = useDispatch();

  const { terminals, stations, stationStartDetails, stationEndDetails, loading } = useSelector(({ BusMod, TrainMod, LoadingMod }) => ({
    terminals: BusMod?.terminals,
    stations: TrainMod?.stations,
    stationStartDetails: TrainMod?.stationStartDetails,
    stationEndDetails: TrainMod?.stationEndDetails,
    loading: LoadingMod[`train/LIST_STATIONS`]
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
    const stationName = e.target.dataset.name;
    let container;
    if (e.target.dataset.type === 'start') {
      dispatch(selectStart({ stationId }));
      setStart(stationName);
      container = document.querySelector('#start-container');
    }
    else {
      dispatch(selectEnd({ stationId }));
      setEnd(stationName);
      container = document.querySelector('#end-container');
    }
    if (container.className === 'list') {
      container.classList.add('flag');
    } else {
      container.classList.remove('flag');
    }
  }



  const onClickCategory = (e) => {
    console.log('기차 또는 버스');
    setTarget(e.target.value);
  }

  const onChangeDate = (e) => {
    const targetDate = e.target.value;
    const date = targetDate.replace(/-/g, '');
    dispatch(selectDate({ date }));
  }

  const onToggle = (e) => {
    // console.log("e.target : ", e.target);
    // console.log(e.target.dataset.id);
    // const targetList = document.querySelector('')
    let container;
    if (e.target.dataset.id === 'start') {
      container = document.querySelector('#start-container');
    } else {
      container = document.querySelector('#end-container');
    }
    if (container.className === 'list') {
      container.classList.add('flag');
    } else {
      container.classList.remove('flag');
    }
  }

  useEffect(() => {
    if (target === 'train') {
      dispatch(listStations())
    } else {
      dispatch(listTerminals())
    }
    // if (startStation && endStation && date) {
    //   const startValue = startStation.stationId;
    //   const endValue = endStation.stationId;
    //   console.log('date : ', date);
    //   dispatch(listTrains({ startStation: startValue, endStation: endValue, date, pageNo }))
    // }
  }, [dispatch, target])
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
          start={start}
          end={end}
          loading={loading}
        />
      }
    </div>
  );
};

export default TrafficSelectCntr;

