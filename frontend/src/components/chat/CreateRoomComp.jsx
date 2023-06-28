import { styled } from "styled-components";
import CreateRoomButtonCntr from "../../containers/chat/CreateRoomButtonCntr";

const CreateRoomBlock = styled.div`
  padding-top: 100px;
`;

const CreateRoomComp = ({
  onSubmit,
  onChange,
  title,
  owner,
  password,
  max,
}) => {
  return (
    <CreateRoomBlock>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="title"
            onChange={onChange}
            placeholder="방 제목"
            value={title}
          />
        </div>
        <div>
          <input
            type="number"
            name="max"
            min="2"
            max="10"
            placeholder="2명이상 10명이하"
            onChange={onChange}
            value={max}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="비밀번호가 없으면 공개방"
            onChange={onChange}
            value={password}
          />
        </div>
        <div>
          <input type="hidden" name="owner" value={owner} />
        </div>
        <div>
          <CreateRoomButtonCntr />
        </div>
      </form>
    </CreateRoomBlock>
  );
};

export default CreateRoomComp;
