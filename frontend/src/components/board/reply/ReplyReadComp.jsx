const ReplyItem = ({ reply }) => {
  return (
    <div>
      아이디 : {reply.id}
      내용 : {reply.content}
    </div>
  );
};

const ReplyReadComp = ({ content, replys, user }) => {
  console.log("3434");
  console.log("replies : ", replys);
  return (
    <div>
      {/* <div>{content}</div>
      <div>내용</div> */}
      {replys && replys.map((reply) => <ReplyItem reply={reply} key={reply.no} />)}
    </div>
  );
};

export default ReplyReadComp;
