import TrafficSelectCntr from "../../containers/traffic/TrafficSelectCntr";
import TrafficListCntr from "../../containers/traffic/TrafficListCntr";

import { styled } from "styled-components";

const TrafficListPageWrapper = styled.div`
  width: 100%;
  min-height: 550px;
`;

const TrafficListPage = () => {
  return (
    <TrafficListPageWrapper>
      <TrafficSelectCntr />
      <TrafficListCntr />
    </TrafficListPageWrapper>
  );
};

export default TrafficListPage;
