import { styled } from "styled-components";
import ThemeComp from "../../common/ThemeComp";

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

  .reply-option {
    display: flex;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 13px;
  }

  .reply-option span {
    margin-right: 5px;
    cursor: pointer;
    transition: 0.3s;
  }
  .reply-option span:hover {
    opacity: 0.7;
  }
`;

const ReplyItem = ({ reply, onEdit }) => {
  const onReplyModify = () => {
    alert("수정 할거야 !");
    console.log("수정 ㅠㅠ");
  };

  const onRemoveReply = ({}) => {
    alert("삭제되어랑");
  };
  return (
    <ReplyItemWarrap>
      <p className="id">{reply.id}</p>
      <p>{reply.content}</p>
      <div className="reply-option">
        <span onClick={onEdit}>수정</span>
        <span onClick={onRemoveReply}>삭제</span>
      </div>
    </ReplyItemWarrap>
  );
};

const ReplyReadComp = ({ content, replys, user }) => {
  // console.log("3434");
  // console.log("replies : ", replys);
  return (
    <div>
      {/* <div>{content}</div>
      <div>내용</div> */}
      {replys && replys.map((reply) => <ReplyItem reply={reply} key={reply.no} />)}
    </div>
  );
};

export default ReplyReadComp;
