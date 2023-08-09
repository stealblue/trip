import { styled } from "styled-components";
import ReplyActionButtonsComp from "./ReplyActionButtonsComp";
import { makeCreatedAt } from "../../../lib/makeCreatedAt";

const ReplyItemWarrap = styled.div`
  width: 50%;
  margin: 0 auto;
  background: ${(props) => props.theme.smoke};
  margin-top: 10px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  position: relative;

  .id {
    font-weight: 600;
  }

  .reply {
    margin-left: 20px;
    line-height: 30px;
  }

  .createat {
    position: absolute;
    right: 3%;
    bottom: 7%;
    font-size: 13px;
    color: ${(props) => props.theme.lightblack};
  }
`;

const ImageBox = styled.img`
  cursor: pointer;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 1px solid black;
`;

const ReplyItem = ({
  reply,
  ReplyActionButtons,
  onRemove,
  onEdit,
  user,
  profile,
}) => {
  return (
    <ReplyItemWarrap>
      <div className="reply">
        <p className="id">{reply?.uno_user?.nick}</p>
        <p>{reply?.content}</p>
        <p className="createat">{makeCreatedAt(reply?.createAt)}</p>
      </div>
      {user?.nick === reply?.uno_user?.nick ? (
        <ReplyActionButtonsComp
          onRemove={onRemove}
          onEdit={onEdit}
          reply={reply}
        />
      ) : null}
    </ReplyItemWarrap>
  );
};

const ReplyReadComp = ({
  content,
  replys,
  user,
  replyactionbuttons,
  onRemove,
  onEdit,
  profile,
}) => {
  return (
    <div>
      {replys &&
        replys.map((reply) => (
          <ReplyItem
            reply={reply}
            key={reply?.no}
            onRemove={onRemove}
            onEdit={onEdit}
            user={user}
            profile={profile}
          />
        ))}
    </div>
  );
};

export default ReplyReadComp;
