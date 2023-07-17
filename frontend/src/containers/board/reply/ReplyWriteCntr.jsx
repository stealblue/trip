import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, replywritePost, initialize } from "../../../modules/board/ReplyWriteMod";
import { useNavigate, useParams } from "react-router-dom";
import ReplyWriteComp from "../../../components/board/reply/ReplyWriteComp";
import Swal from 'sweetalert2';

const ReplyWriteCntr = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { readNo } = useParams();
  const emptyReply = useRef();
  const { id, content, reply, originreplyId } = useSelector(({ UserMod, ReplyWriteMod }) => ({
    id: UserMod.user?.id,
    content: ReplyWriteMod.content,
    reply: ReplyWriteMod.reply,
  }));

  // console.log(content);
  const onChangeField = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      })
    );
  };

  const onPublish = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(
        replywritePost({
          bno: readNo,
          id: id,
          content: content,
        })
      );
    } else {
      Swal.fire({
        text: '로그인해주세요'
      });
      // navigate('/auth/login');
    }
  };

  //댓글 등록시 input 초기화
  const onReset = () => {
    emptyReply.current.value = "";
  };

  useEffect(() => {
    dispatch(initialize());
    onReset();
  }, [reply]);

  return (
    <>
      <ReplyWriteComp onReset={onReset} onPublish={onPublish} onChangeField={onChangeField} emptyReply={emptyReply} isEdit={!!originreplyId} />
    </>
  );
};

export default ReplyWriteCntr;
