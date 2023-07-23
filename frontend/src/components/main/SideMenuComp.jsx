import styled from "styled-components";
import ThemeComp from "../common/ThemeComp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCalendarDays, faUser, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import BoardListContainer from "../../containers/board/read/BoardListContainer";

const SideMenuBox = styled.div`
  width: 100px;
  height: 400px;
  background: #333;
  position: fixed;
  top: 200px;
  right: 0;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  .tri-box {
    width: 40px;
    height: 70px;
    background: #333;
    position: absolute;
    top: 50%;
    left: -40px;
    transform: translate(0, -50%);
    border: none;
    cursor: pointer;
  }

  div {
    height: 25%;
    width: 100%;
    border-bottom: 1px solid ${ThemeComp.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  div:last-child {
    border: none;
  }
  span {
    color: ${ThemeComp.white};
    padding: 5px 0;
  }
  p {
  }
`;

const SideMenuComp = () => {
  return (
    <>
      <SideMenuBox>
        <div class="tri-box">
          <FontAwesomeIcon icon={faCaretRight} size="xl" />
        </div>

        <div>
          <p>
            <FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#ffffff" }} />
          </p>
          <span>찜목록</span>
        </div>
        <div>
          <p>
            <FontAwesomeIcon className="icon" icon={faEye} size="2xl" style={{ color: "#000000" }} />
          </p>
          <span>최근 본 글</span>{" "}
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faUser} size="2xl" />
          </p>
          <span>마이페이지</span>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faCalendarDays} size="2xl" />
          </p>
          <span>일정관리</span>
        </div>
      </SideMenuBox>
    </>
  );
};

export default SideMenuComp;
