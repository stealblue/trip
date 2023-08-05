import React from 'react';
import styled from 'styled-components';
import { makeCreatedAt } from '../../lib/makeCreatedAt';

const StyledTable = styled.table`
border-collapse: collapse;

th,td{
  border:1px solid whitesmoke;
  color: whitesmoke;
  padding: 5px;
}
td{
  text-align: right;
}
`;

const TicketItem = ({ ticket }) => {

  return (
    <tr>
      <td>{ticket.no}</td>
      <td>{ticket.category}</td>
      <td>{ticket.uno}</td>
      <td>{ticket.startplace}</td>
      <td>{makeCreatedAt(ticket.startDate)}</td>
      <td>{ticket.endplace}</td>
      <td>{makeCreatedAt(ticket.endDate)}</td>
      <td>{ticket.seat}</td>
      <td>{ticket.type}</td>
      <td>{makeCreatedAt(ticket.createAt)}</td>
    </tr>
  )
}

const AdminTicketComp = ({ tickets }) => {
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
          {tickets.rows.map((ticket) => (
            <TicketItem ticket={ticket} key={ticket.no} />
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default AdminTicketComp;