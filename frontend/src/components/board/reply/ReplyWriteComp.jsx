import { styled } from "styled-components";
// import ReplyWriteActionButtonComp from "./ReplyWriteActionButtonComp";

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
  button {
    padding: 10px 20px;
    position: relative;
    top: -34px;
    left: 20px;
  }
`;

const ReplyWriteComp = ({ onReset, onPublish, onChangeField, emptyReply }) => {
  return (
    <>
      <ReplyWrapper>
        <p>댓글</p>
        <textarea ref={emptyReply} name="content" placeholder="reply write comeon" onChange={onChangeField} />
        <button onClick={onPublish}>
          댓글
          <br />
          등록
        </button>
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
