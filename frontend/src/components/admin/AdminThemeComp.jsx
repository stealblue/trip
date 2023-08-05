import React from 'react';
import { styled } from 'styled-components';
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




const AdminThemeComp = () => {
  return (
    <div>
      <div>
        <p>
          <button>추가</button>
        </p>
        <p>
          테마별<input type='checkbox' />
          <select>
            <option>상관없음</option>
          </select>
        </p>
        <p>
          지역별<input type='checkbox' />
          <select>
            <option>상관없음</option>
          </select>
        </p>
        <p>
          타입별<input type='checkbox' />
          <select>
            <option>상관없음</option>
          </select>
        </p>
      </div>
      <StyledTable>
        <thead>
          <tr>
            <th>번호</th>
            <th>테마</th>
            <th>장소이름</th>
            <th>지역</th>
            <th>타입</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </StyledTable>
    </div>
  );
};

export default AdminThemeComp;