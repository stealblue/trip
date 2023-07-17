import TrafficSelectCntr from '../../containers/traffic/TrafficSelectCntr';
import TrafficListCntr from '../../containers/traffic/TrafficListCntr';

const TrafficListPage = () => {
  return (
    <div>
      <TrafficSelectCntr />
      <TrafficListCntr />
    </div>
  );
};

export default TrafficListPage;