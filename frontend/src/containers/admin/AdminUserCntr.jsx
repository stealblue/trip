import { useEffect, useState } from "react";
import AdminUserComp from "../../components/admin/AdminUserComp";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserList,
  getUserDetail,
  deleteUser,
} from "../../modules/admin/AdminUserMod";

const AdminUserCnrt = () => {
  const dispatch = useDispatch();
  const { userList, totalUser, user, deleteError } = useSelector(
    ({ AdminUserMod }) => ({
      userList: AdminUserMod.userList,
      totalUser: AdminUserMod.totalUser,
      user: AdminUserMod.user,
      deleteError: AdminUserMod.deleteError,
    })
  );
  const [modal, setModal] = useState(false);

  const switchModal = () => {
    setModal(!modal);
  };

  const getUserInform = (e) => {
    const { id } = e.currentTarget; //target을 보면, 자식 요소를 클릭할 경우 이벤트가 제대로 발생하지 않음. e.target과 차이가 있음.
    dispatch(getUserDetail({ id }));
    switchModal();
  };

  //회원 탈퇴시키기
  const deleteUserInform = (id) => {
    //confirm 결과 true면 탈퇴진행
    if (window.confirm(`${id} 회원을 정말 탈퇴시키겠습니까?`)) {
      dispatch(deleteUser({ id }));
    }
    return;
  };

  //정보 확인중 갱신되면 곤란할테니 유저 리스트는 실시간 갱신 안할것임, 회원 탈퇴는 바로 갱신
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch, deleteError]);

  return (
    <div>
      <AdminUserComp
        getUserInform={getUserInform}
        deleteUserInform={deleteUserInform}
        userList={userList}
        totalUser={totalUser}
        user={user}
        modal={modal}
        switchModal={switchModal}
      />
    </div>
  );
};

export default AdminUserCnrt;
