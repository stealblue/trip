import { useEffect, useState } from "react";
import AdminUserComp from "../../components/admin/AdminUserComp";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../../modules/admin/adminUserMod";

const AdminUserCnrt = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector(({ adminUserMod }) => ({
    userList: adminUserMod.userList,
  }));
  const [modal, setModal] = useState(false);

  const getUserDetail = (e) => {
    e.preventDefault();
    console.log(e.target);
    setModal(!modal);
  };

  const deleteUser = (e) => {
    e.preventDefault();
    console.log("유저 탈퇴시키기");
  };

  //정보 확인중 갱신되면 곤란할테니 유저 리스트는 실시간 갱신 안할것임.
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <div>
      <AdminUserComp
        getUserDetail={getUserDetail}
        deleteUser={deleteUser}
        userList={userList}
      />
    </div>
  );
};

export default AdminUserCnrt;
