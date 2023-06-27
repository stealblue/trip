import { styled } from "styled-components";
import ButtonComp from "../common/ButtonComp";

const CreateRoomBlock = styled.div`
  padding-top: 100px;
`;

const users = ["testAdmin1", "testAdmin2", "testAdmin3"];

const CreateRoomComp = ({ onClick, onSubmit, onChange }) => {
  return (
    <CreateRoomBlock>
      <form onSubmit={onSubmit}>
        <div>
          <input name="title" onChange={onChange} placeholder="방 제목" />
        </div>
        <div>
          <input
            type="number"
            name="max"
            min="2"
            max="10"
            placeholder="2명이상 10명이하"
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="비밀번호가 없으면 공개방"
            onChange={onChange}
          />
        </div>
        <div>
          <input type="hidden" name="owner" value={users[0]} />
        </div>
        <div>
          <ButtonComp>생성</ButtonComp>
        </div>
      </form>
    </CreateRoomBlock>
  );
};

export default CreateRoomComp;
