import { styled } from "styled-components";
import ThemeComp from "../../common/ThemeComp";
import ReplyActionButtonsComp from "./ReplyActionButtonsComp";

const ReplyItemWarrap = styled.div`
  width: 50%;
  margin: 0 auto;
  background: ${ThemeComp.smoke};
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
`;

const ImageBox = styled.img`
  cursor: pointer;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 1px solid black;
`;

const ReplyItem = ({ reply, ReplyActionButtons, onRemove, onEdit, user, profile }) => {
  // console.log(profile.img);
  return (
    <ReplyItemWarrap>
      {/* <p>{profile?.img ? <ImageBox src={`/assets/${profile.img}`} alt="img" /> : <ImageBox src={"/assets/triplogo.png"} alt="img" />}</p> */}
      <div className="reply">
        <p className="id">{user?.nick}</p>
        <p>{reply.content}</p>
      </div>

      {/* {ReplyActionButtons} */}
      {user?.id === reply.id ? <ReplyActionButtonsComp onRemove={onRemove} onEdit={onEdit} reply={reply} /> : null}
    </ReplyItemWarrap>
  );
};

const ReplyReadComp = ({ content, replys, user, replyactionbuttons, onRemove, onEdit, profile }) => {
  // console.log("3434");
  // console.log("replies : ", replys);
  return (
    <div>
      {/* <div>{content}</div>
      <div>내용</div> */}
      {replys && replys.map((reply) => <ReplyItem reply={reply} key={reply.no} onRemove={onRemove} onEdit={onEdit} user={user} profile={profile} />)}
    </div>
  );
};

export default ReplyReadComp;
