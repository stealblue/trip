import TrafficListComp from '../../components/traffic/TrafficListComp'
import { useSelector } from "react-redux";

const TrafficListCntr = () => {
  const { resultTrains } = useSelector(({ BusMod, TrainMod }) => ({
    resultTrains: TrainMod?.resultTrains
  }))

  return (
    <div>
      <TrafficListComp resultTrains={resultTrains} />
    </div>
  );
};

export default TrafficListCntr;