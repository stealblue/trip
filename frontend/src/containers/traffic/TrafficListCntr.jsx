import { useEffect } from 'react';
import TrafficListComp from '../../components/traffic/TrafficListComp'
import { useDispatch, useSelector } from "react-redux";
import { listTrains } from '../../modules/traffic/TrainMod';
import { listBuses } from '../../modules/traffic/BusMod';
import LoadingComp from '../../components/common/LoadingComp';

const TrafficListCntr = () => {
  const onTicketing = (e) => {
    console.log('currentTarget : ', e.currentTarget);
    console.log('Target : ', e.target);
    console.log('data-item : ', e.currentTarget.dataset.item);
    const item = (e.currentTarget.dataset.item);
    console.log('item -------: ', item);
    // for (let i in item) {
    //   console.log('item : ', item[i]);
    // }
  }

  const dispatch = useDispatch();
  const { resultTrains, resultBuses, pageNoTrain, pageNoBus, dateTrain, dateBus, startStation, startTerminal, endStation, endTerminal, loading } = useSelector(({ BusMod, TrainMod, LoadingMod }) => ({
    resultTrains: TrainMod?.resultTrains,
    resultBuses: BusMod?.resultBuses,
    pageNoTrain: TrainMod?.pageNoTrain,
    pageNoBus: BusMod?.pageNoBus,
    dateTrain: TrainMod.dateTrain,
    dateBus: BusMod.dateBus,
    startStation: TrainMod.startStation,
    startTerminal: BusMod.startTerminal,
    endStation: TrainMod.endStation,
    endTerminal: BusMod.endTerminal,
    loading: LoadingMod
  }));

  useEffect(() => {
    if (startStation && endStation && (dateTrain !== '' && dateTrain)) {
      const startValue = startStation.stationId;
      const endValue = endStation.stationId;
      const date = dateTrain.dateTrain;
      dispatch(listTrains({ startStation: startValue, endStation: endValue, dateTrain: date, pageNoTrain }));
    }

  }, [dispatch, pageNoTrain, startStation, endStation, dateTrain])

  useEffect(() => {
    if (startTerminal && endTerminal && (dateBus !== '' && dateBus)) {
      const startValue = startTerminal.terminalId;
      const endValue = endTerminal.terminalId;
      const date = dateBus.dateBus;
      dispatch(listBuses({ startTerminal: startValue, endTerminal: endValue, dateBus: date, pageNoBus }))
    }
  }, [dispatch, startTerminal, endTerminal, dateBus, pageNoBus])

  if (loading && (!resultTrains && !resultBuses)) {
    // return <LoadingComp />
    return <div></div>;
  }

  return (
    <div>
      {pageNoTrain && startStation && endStation && dateTrain && <TrafficListComp resultTrains={resultTrains} loading={loading} onTicketing={onTicketing} />}
      {pageNoBus && startTerminal && endTerminal && dateBus && <TrafficListComp resultBuses={resultBuses} loading={loading} />}
    </div>
  );
};

export default TrafficListCntr;