import { useEffect } from 'react';
import TrafficListComp from '../../components/traffic/TrafficListComp'
import { useDispatch, useSelector } from "react-redux";
import { listTrains } from '../../modules/traffic/TrainMod';
import { listBuses } from '../../modules/traffic/BusMod';

const TrafficListCntr = () => {
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
      console.log('check======================================================')
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
      dispatch(listBuses({ startTerminal: startValue, endTerminal: endValue, dateBus, pageNoBus }))
    }
  }, [dispatch, startTerminal, endTerminal, dateBus, pageNoBus])

  return (
    <div>
      {pageNoTrain && startStation && endStation && dateTrain && <TrafficListComp resultTrains={resultTrains} loading={loading} />}
      {pageNoBus && startTerminal && endTerminal && dateBus && <TrafficListComp resultBuses={resultBuses} loading={loading} />}
    </div>
  );
};

export default TrafficListCntr;