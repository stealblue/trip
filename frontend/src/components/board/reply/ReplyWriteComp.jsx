import { styled } from "styled-components";

const ReplyWrapper = styled.div`
  margin-top: 20px;
  width: 100%;

  p {
    font-size: 24px;
  }
  textarea {
    width: 80%;
    height: 40px;
    margin-top: 20px;
    padding: 10px;
  }
  button {
    margin-left: 20px;
    padding: 10px 20px;
    display: inline-block;
    position: relative;
    bottom: 35px;
  }
`;

const ReplyWriteComp = () => {
  return (
    <>
      <ReplyWrapper>
        <p>댓글</p>
        <textarea placeholder="reply write comeon" />
        <button>
          댓글
          <br />
          쓰기
        </button>
      </ReplyWrapper>
    </>
  );
};

export default ReplyWriteComp;
