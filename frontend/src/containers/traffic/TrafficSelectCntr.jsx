import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTerminals, startTerminals, selectStartTerminal, endTerminals, selectEndTerminal, selectDateBus, unloadBus } from "../../modules/traffic/BusMod";
import { listStations, startStations, selectStartStation, endStations, selectEndStation, selectDateTrain, unloadTrain } from "../../modules/traffic/TrainMod";
import TrafficSelectComp from '../../components/traffic/TrafficSelectComp';

const TrafficSelectCntr = () => {
  const [target, setTarget] = useState(null);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const dispatch = useDispatch();

  const { terminals, stations, stationStartDetails, stationEndDetails, terminalStartDetails, terminalEndDetails, loading } = useSelector(({ BusMod, TrainMod, LoadingMod }) => ({
    terminals: BusMod?.terminals,
    stations: TrainMod?.stations,
    stationStartDetails: TrainMod?.stationStartDetails,
    stationEndDetails: TrainMod?.stationEndDetails,
    terminalStartDetails: BusMod?.terminalStartDetails,
    terminalEndDetails: BusMod?.terminalEndDetails,
    loading: LoadingMod
  }))

  const onClickArea = (e) => {
    const cityCode = e.target.value;
    if (target === 'train') {
      if (e.target.dataset.type === 'start') {
        dispatch(startStations({ cityCode }));
      }
      else {
        dispatch(endStations({ cityCode }));
      }
    } else {
      if (e.target.dataset.type === 'start') {
        dispatch(startTerminals({ cityCode }));
      }
      else {
        dispatch(endTerminals({ cityCode }));
      }
    }
  }

  const onClickPlace = (e) => {
    const placeId = e.target.dataset.value;
    const placeName = e.target.dataset.name;
    let container;
    if (target === 'train') {
      if (e.target.dataset.type === 'start') {
        dispatch(selectStartStation({ stationId: placeId }));
        setStart(placeName);
        container = document.querySelector('#start-container');
      }
      else {
        dispatch(selectEndStation({ stationId: placeId }));
        setEnd(placeName);
        container = document.querySelector('#end-container');
      }
    } else {
      if (e.target.dataset.type === 'start') {
        dispatch(selectStartTerminal({ terminalId: placeId }));
        setStart(placeName);
        container = document.querySelector('#start-container');
      }
      else {
        dispatch(selectEndTerminal({ terminalId: placeId }));
        setEnd(placeName);
        container = document.querySelector('#end-container');
      }
    }
    if (container.className === 'list') {
      container.classList.add('flag');
    } else {
      container.classList.remove('flag');
    }
  }

  const onClickCategory = (e) => {
    setTarget(e.target.value);
  }

  const onChangeDate = (e) => {
    const targetDate = e.target.value;
    const date = targetDate.replace(/-/g, '');
    dispatch(selectDateTrain({ date }));
  }

  const onToggle = (e) => { // 출발지, 도착지를 보여주고 숨겨주기 위해 만든 function
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
      dispatch(unloadBus())
      dispatch(listStations())
    } else {
      dispatch(unloadTrain())
      dispatch(listTerminals())
    }
  }, [dispatch, target])

  return (
    <div>
      {
        <TrafficSelectComp
          terminals={terminals}
          stations={stations}
          stationStartDetails={stationStartDetails}
          stationEndDetails={stationEndDetails}
          terminalStartDetails={terminalStartDetails}
          terminalEndDetails={terminalEndDetails}
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

