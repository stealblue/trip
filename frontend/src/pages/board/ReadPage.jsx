import ReadContainer from "../../containers/board/read/ReadContainer";
import ReplyReadCntr from "../../containers/board/reply/ReplyReadCntr";
import ReplyWriteCntr from "../../containers/board/reply/ReplyWriteCntr";

const ReadPage = () => {
  return (
    <div>
      <ReadContainer />
      <ReplyWriteCntr />
      <ReplyReadCntr />
    </div>
  );
};

export default ReadPage;
