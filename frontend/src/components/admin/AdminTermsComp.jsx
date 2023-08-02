import { styled } from "styled-components";
import ThemeComp from "../common/ThemeComp";

const AdminBoardWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
`;

const BoardContainer = styled.div`
  background: ${ThemeComp.smoke};

  &:first-child {
    width: 35%;
    /* height: 100%; */
    margin-left: 1%;
  }
  &:last-child {
    width: 62%;
    margin-left: 1%;
  }
`;

const BoardName = styled.div`
  background: ${ThemeComp.dark};

  font-size: 20px;
  padding: 10px 20px;
  span {
    color: ${ThemeComp.smoke};
    margin-left: 10px;
  }
`;

const BoardTag = styled.div`
  display: flex;
  justify-content: space-around;
  background: yellow;
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  background: ${ThemeComp.lightblack};
  color: ${ThemeComp.smoke};
  cursor: pointer;
  padding: 7px 12px;
  margin: 10px;

  &:hover {
    background: ${ThemeComp.softblack};
  }
`;

const BoardContent = styled.div`
  background: green;
`;

const ImgInput = styled.input`
  display: none;
`;

const ImageBox = styled.img`
  cursor: pointer;
  height: 150px;
  width: 150px;
  border-radius: 25px;
  border: 1px solid black;
`;

const AdminTermsComp = ({
  user,
  tableType,
  changeType,
  onChangeLogo,
  onUploadLogo,
}) => {
  return (
    <AdminBoardWrap>
      <BoardContainer>
        <BoardName>
          <span>약관관리</span>
        </BoardName>
        <BoardTag>
          <Button id="LOGO" onClick={changeType}>
            로고변경
          </Button>
          <Button id="INFORM" onClick={changeType}>
            정보변경
          </Button>
          <Button id="TERMS" onClick={changeType}>
            약관관리
          </Button>
        </BoardTag>
        {tableType === "LOGO" && (
          <BoardContent>
            <form encType="multipart/form-data">
              <label>
                {user?.img ? (
                  <ImageBox src={`/assets/${user.img}`} alt="img" />
                ) : (
                  <ImageBox src={"/assets/triplogo.png"} alt="img" />
                )}
                <ImgInput type="file" onChange={onUploadLogo} name="img" />
                <Button onClick={onChangeLogo}>로고변경</Button>
              </label>
            </form>
          </BoardContent>
        )}
        {tableType === "INFORM" && (
          <BoardContent>
            <span>
              상호 <input type="text" />
              <Button>수정</Button>
            </span>
            <span>
              주소 <input type="text" />
              <Button>수정</Button>
            </span>
            <span>
              개인정보관리책임자 <input type="text" />
              <Button>수정</Button>
            </span>
            <span>
              전화번호
              <input type="text" />
              <Button>수정</Button>
            </span>
          </BoardContent>
        )}
        {tableType === "TERMS" && (
          <BoardContent>
            <span>
              이용약관
              <input type="text" />
              <Button>수정</Button>
            </span>
            <span>
              개인정보처리방침
              <input type="text" />
              <Button>수정</Button>
            </span>
            <span>
              이용안내
              <input type="text" />
              <Button>수정</Button>
            </span>
          </BoardContent>
        )}
      </BoardContainer>
    </AdminBoardWrap>
  );
};

export default AdminTermsComp;

// <div className="logo">
//         <img src="/assets/triplogo8.png" alt="img" />
//       </div>
//       <div>
//         <ul className="footer-menu">
//           <li>이용약관</li>
//           <li>개인정보처리방침</li>
//           <li>이용안내</li>
//         </ul>

//         <div className="info">
//           <span>상호</span> TripperMaker <br />
//           <span>주소</span> 서대구로 7길 2 영남안재교육원
//           <br />
//           <span>개인정보관리책임자</span> TR MANGER
//           <br />
//         </div>

//         <div className="copyright">
//           <i>Copyright 2023.TripperMaker.All rights reserved.</i>
//         </div>
//       </div>
//       <div className="tel">
//         전화번호
//         <p>053-635-0505</p>
//       </div>
