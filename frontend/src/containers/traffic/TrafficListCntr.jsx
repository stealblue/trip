import { useEffect } from 'react';
import TrafficListComp from '../../components/traffic/TrafficListComp'
import { useDispatch, useSelector } from "react-redux";
import { listTrains, selectPage } from '../../modules/traffic/TrainMod';

const TrafficListCntr = () => {
  const dispatch = useDispatch();
  const { resultTrains, pageNo, date, startStation, endStation, loading } = useSelector(({ BusMod, TrainMod, LoadingMod }) => ({
    resultTrains: TrainMod?.resultTrains,
    pageNo: TrainMod?.pageNo,
    date: TrainMod.date,
    startStation: TrainMod.startStation,
    endStation: TrainMod.endStation,
    loading: LoadingMod['train/LIST_TRAINS']
  }));

  useEffect(() => {
    if (startStation && endStation && date) {
      const startValue = startStation.stationId;
      const endValue = endStation.stationId;
      console.log('date : ', date);
      // dispatch(selectPage({ pageNo }));
      dispatch(listTrains({ startStation: startValue, endStation: endValue, date, pageNo }));
    }
  }, [dispatch, pageNo, startStation, endStation, date])

  return (
    <div>
      <TrafficListComp resultTrains={resultTrains} loading={loading} />
    </div>
  );
};

export default TrafficListCntr;