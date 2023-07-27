import { styled } from "styled-components";
// import ReplyWriteActionButtonComp from "./ReplyWriteActionButtonComp";
import Button from "../../common/ButtonComp";

const ReplyWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
  p {
    font-size: 24px;
  }
  textarea {
    width: 70%;
    height: 40px;
    margin-top: 20px;
    padding: 10px;
  }
`;

const ReplyButton = styled(Button)`
  padding: 10px 20px;
  position: relative;
  top: -26px;
  left: 20px;
`;

const ReplyWriteComp = ({ onReset, onPublish, onChangeField, emptyReply }) => {
  return (
    <>
      <ReplyWrapper>
        <p>댓글</p>
        <textarea ref={emptyReply} name="content" placeholder="reply write comeon" onChange={onChangeField} />
        <ReplyButton onClick={onPublish}>댓글 등록</ReplyButton>
        {/* {post.map((item) => (
          <div key={item.index}>
            {item.id} " : " {item.content}
          </div>
        ))} */}
      </ReplyWrapper>
    </>
  );
};

export default ReplyWriteComp;
