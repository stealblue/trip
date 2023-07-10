import { styled } from "styled-components";
import ThemeComp from "../../common/ThemeComp";
import ReplyActionButtonsComp from "./ReplyActionButtonsComp";

const ReplyItemWarrap = styled.div`
  width: 40%;
  margin: 0 auto;
  background: ${ThemeComp.smoke};
  margin-top: 10px;
  border-radius: 10px;
  padding: 20px;
  position: relative;

  .id {
    font-weight: 600;
  }
`;

const ReplyItem = ({ reply, ReplyActionButtons, onRemove, onEdit }) => {
  return (
    <ReplyItemWarrap>
      <p className="id">{reply.id}</p>
      <p>{reply.content}</p>
      {/* {ReplyActionButtons} */}
      <ReplyActionButtonsComp onRemove={onRemove} onEdit={onEdit} reply={reply} />
    </ReplyItemWarrap>
  );
};

const ReplyReadComp = ({ content, replys, user, replyactionbuttons, onRemove, onEdit }) => {
  // console.log("3434");
  // console.log("replies : ", replys);
  return (
    <div>
      {/* <div>{content}</div>
      <div>내용</div> */}
      {replys && replys.map((reply) => <ReplyItem reply={reply} key={reply.no} onRemove={onRemove} onEdit={onEdit} />)}
    </div>
  );
};

export default ReplyReadComp;
