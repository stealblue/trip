import { useEffect } from 'react';
import TrafficListComp from '../../components/traffic/TrafficListComp'
import { useDispatch, useSelector } from "react-redux";
import { listTrains } from '../../modules/traffic/TrainMod';
import { listBuses } from '../../modules/traffic/BusMod';

const TrafficListCntr = () => {
  const dispatch = useDispatch();
  const { resultTrains, resultBuses, pageNoTrain, pageNoBus, dateTrain, dateBus, startStation, startTerminal, endStation, endTerminal, loadingTrain, loadingBus } = useSelector(({ BusMod, TrainMod, LoadingMod }) => ({
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
    loadingTrain: LoadingMod['train/LIST_TRAINS'],
    loadingBus: LoadingMod['bus/LIST_BUSES']
  }));

  useEffect(() => {
    if (!loadingTrain && startStation && endStation && dateTrain) {
      const startValue = startStation.stationId;
      const endValue = endStation.stationId;
      dispatch(listTrains({ startStation: startValue, endStation: endValue, dateTrain, pageNoTrain }));
    }
    else if (!loadingBus && startTerminal && endTerminal && dateBus) {
      const startValue = startTerminal.terminalId;
      const endValue = endTerminal.terminalId;
      dispatch(listBuses({ startTerminal: startValue, endTerminal: endValue, dateBus, pageNoBus }))
    }
  }, [dispatch, pageNoTrain, startStation, endStation, dateTrain, pageNoBus, startTerminal, endTerminal, dateBus, loadingBus, loadingTrain])

  return (
    <div>
      <TrafficListComp resultTrains={resultTrains} loadingTrain={loadingTrain} resultBuses={resultBuses} loadingBus={loadingBus} />
    </div>
  );
};

export default TrafficListCntr;