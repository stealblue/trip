import { useEffect, useState } from "react";
import AdminBoardComp from "../../components/admin/AdminBoardComp";
import { useDispatch, useSelector } from "react-redux";
import {
  getBoardList,
  getBoardDetail,
  deleteBoard,
  getBoardAction,
  createNotice
} from "../../modules/admin/AdminBoardMod";
import Swal from 'sweetalert2';
import axios from "axios";
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

const AdminBoardCnrt = () => {
  const dispatch = useDispatch();
  const { boardList, totalBoard, board, deleteError, user } = useSelector(
    ({ AdminBoardMod, UserMod }) => ({
      boardList: AdminBoardMod.boardList,
      totalBoard: AdminBoardMod.totalBoard,
      board: AdminBoardMod.board,
      deleteError: AdminBoardMod.deleteError,
      user: UserMod.user
    })
  );
  const [modal, setModal] = useState(false);
  // const [text, setText] = useState('');

  const switchModal = () => {
    setModal(!modal);
  };

  const getBoardInform = (e) => {
    const { id } = e.currentTarget; //자식 요소를 클릭할 경우 이벤트가 제대로 발생하지 않음. e.target과 차이가 있음.
    dispatch(getBoardDetail({ no: id }));
    switchModal();
  };

  //회원 탈퇴시키기
  const deleteBoardInform = (no) => {
    //confirm 결과 true면 탈퇴진행
    if (window.confirm(`no.${no} 게시물을 정말 삭제하시겠습니까?`)) {
      dispatch(deleteBoard({ no }));
    }
    return;
  };

  const onNotice = async () => {
    Swal.fire({
      title: '공지사항 제목',
      input: "text",
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "확인"
    })
      .then((titleRes) => {
        const title = titleRes.value;
        if (titleRes.isConfirmed && title.length > 0) {
          Swal.fire({
            title: `${title}`,
            input: "textarea",
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: "취소",
            confirmButtonText: "확인"
          })
            .then((contentRes) => {
              console.log('공지사항 보내기전1');
              if (contentRes.isConfirmed) {
                console.log('공지사항 보내기전2');
                const content = contentRes.value;
                // Swal.fire({
                //   title: `${title}`,
                //   text: `${content}`
                // })
                // await axios.post('192.168.10.102:4000/')
                const id = user.id;
                console.log('공지사항 보내기전3');
                console.log(`content : ${content} / title : ${title} / id : ${id}`)
                dispatch(createNotice({ content, title, id }));
                console.log('공지사항 보내기 후1');
              }
            })
        }
      })
      .catch((error) => {
        Swal.fire({
          title: `${error}`
        })
      })
  }

  //정보 확인중 갱신되면 곤란할테니 유저 리스트는 실시간 갱신 안할것임, 회원 탈퇴는 바로 갱신
  useEffect(() => {
    dispatch(getBoardList());
  }, [dispatch, deleteError]);

  useEffect(() => {
    dispatch(getBoardAction());
  }, [dispatch]);

  return (

    <AdminBoardComp
      getBoardInform={getBoardInform}
      deleteBoardInform={deleteBoardInform}
      boardList={boardList}
      totalBoard={totalBoard}
      board={board}
      modal={modal}
      switchModal={switchModal}
      onNotice={onNotice}
    />

  );
};

export default AdminBoardCnrt;
