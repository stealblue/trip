import AdminMainComp from "../../components/admin/main";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <>
      <AdminMainComp />
      {Outlet}
    </>
  );
};

export default AdminPage;
