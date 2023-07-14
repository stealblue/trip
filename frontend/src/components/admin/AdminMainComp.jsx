import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faList } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";

const AdminContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #33495e;
  color: #fff;
`;

const AdminSideBar = styled.div`
  background: #1a2b3c;
  width: 250px;
  height: 100vh;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  .logo {
    font-size: 30px;
    color: #fff;
    line-height: 30px;
    text-align: center;
    padding: 3rem 0;
    font-weight: 600;

    p {
      font-size: 20px;
      background: #fff;
      width: 100px;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
`;

const AdminNav = styled.ul`
  display: inline-block;
  text-align: right;
  display: flex;
  flex-direction: column;

  li {
    color: #fff;
    padding: 15px 20px;
    font-size: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
    span {
      margin-left: 10px;
      color: #fff;
    }
  }

  li:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const AdminMainComp = () => {
  return (
    <>
      <AdminContainer>
        <AdminSideBar>
          <div className="logo">
            <Link to={"/"}>
              TRIPPER
              <br />
              MAKER
            </Link>
            <p>admin</p>
          </div>
          <AdminNav>
            <li>
              <Link to={"/admin/user"}>
                <FontAwesomeIcon
                  icon={faUser}
                  className="icon"
                  style={{ color: "white" }}
                />
                <span>회원관리</span>
              </Link>
            </li>
            <li>
              <Link to={"/admin/board"}>
                <FontAwesomeIcon icon={faList} style={{ color: "#fff" }} />
                <span>게시판관리</span>
              </Link>
            </li>
          </AdminNav>
        </AdminSideBar>
        <Outlet />
      </AdminContainer>
    </>
  );
};

export default AdminMainComp;
