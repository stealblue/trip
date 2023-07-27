import { useEffect, useState } from "react";
import AdminBoardComp from "../../components/admin/AdminBoardComp";
import { useDispatch, useSelector } from "react-redux";
import {
  getBoardList,
  getBoardDetail,
  deleteBoard,
  getBoardAction,
} from "../../modules/admin/AdminBoardMod";

const AdminBoardCnrt = () => {
  const dispatch = useDispatch();
  const { boardList, totalBoard, board, deleteError } = useSelector(
    ({ AdminBoardMod }) => ({
      boardList: AdminBoardMod.boardList,
      totalBoard: AdminBoardMod.totalBoard,
      board: AdminBoardMod.board,
      deleteError: AdminBoardMod.deleteError,
    })
  );
  const [modal, setModal] = useState(false);

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

  //정보 확인중 갱신되면 곤란할테니 유저 리스트는 실시간 갱신 안할것임, 회원 탈퇴는 바로 갱신
  useEffect(() => {
    dispatch(getBoardList());
  }, [dispatch, deleteError]);

  useEffect(() => {
    dispatch(getBoardAction());
  }, [dispatch]);

  return (
    <div>
      <AdminBoardComp
        getBoardInform={getBoardInform}
        deleteBoardInform={deleteBoardInform}
        boardList={boardList}
        totalBoard={totalBoard}
        board={board}
        modal={modal}
        switchModal={switchModal}
      />
    </div>
  );
};

export default AdminBoardCnrt;
