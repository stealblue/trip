import styled from "styled-components";
import WrapperComp from "../common/WrapperComp";

const TravelList = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
`;

const TravelListTitle = styled.div`
  margin-top: 5rem;
`;
const TravelListItem = styled.div`
  width: 250px;
  height: 300px;
  background: #dff6b3;
`;

const MaincontentComp = () => {
  return (
    <WrapperComp>
      <TravelListTitle>
        <h2>
          <span>7월</span>에 떠나기 좋은 여행지
        </h2>
      </TravelListTitle>

      <TravelList>
        <TravelListItem />
        <TravelListItem />
        <TravelListItem />
        <TravelListItem />
        <TravelListItem />
      </TravelList>
    </WrapperComp>
  );
};

export default MaincontentComp;
