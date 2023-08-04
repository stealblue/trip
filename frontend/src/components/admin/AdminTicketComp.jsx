import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
border-collapse: collapse;

th,td{
  border:1px solid whitesmoke;
  color: whitesmoke;
}
`;

const AdminTicketComp = () => {
  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th>번호</th>
            <th>카테고리</th>
            <th>예약자</th>
            <th>출발장소</th>
            <th>출발시간</th>
            <th>도착장소</th>
            <th>도착시간</th>
            <th>좌석</th>
            <th>종류</th>
            <th>구매시간</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </StyledTable>
    </div>
  );
};

export default AdminTicketComp;