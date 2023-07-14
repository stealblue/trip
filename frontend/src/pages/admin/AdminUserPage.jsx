import styled from "styled-components";
import AdminUserCnrt from "../../containers/admin/AdminUserCntr";

const AdminUserBlock = styled.div`
  margin: 0 auto;
  color: red;
  font-size: 100px;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const AdminUserPage = () => {
  return (
    <>
      <AdminUserCnrt />
    </>
  );
};

export default AdminUserPage;
