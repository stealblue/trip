import { styled } from "styled-components";
import ThemeComp from "../common/ThemeComp";
import { changePhotoFailure } from "../../modules/profile/ProfileMod";

const FooterComp = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${ThemeComp.smoke};
  border-top: 2px solid ${ThemeComp.lightblack};
  text-align: center;
  padding: 50px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;

  .footer-menu {
    display: flex;
    justify-content: center;
    li {
      margin-left: 20px;
      color: ${ThemeComp.black};
      cursor: pointer;
      transition: 0.3s;
    }
    li:hover {
      opacity: 0.3;
    }
  }
  .copyright {
    margin-top: 20px;
    i {
      color: ${ThemeComp.black};
      font-size: 18px;
    }
  }

  .logo {
    margin-top: 20px;
    img {
      width: 300px;
    }
  }

  .info {
    color: ${ThemeComp.black};
    margin-top: 20px;
    span {
      color: ${ThemeComp.black};
      font-weight: 600;
    }
  }

  .tel {
    color: ${ThemeComp.black};
    font-weight: 600;
    font-size: 24px;
    p {
      color: ${ThemeComp.black};
      font-size: 20px;
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 300px;
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    .tel {
      display: none;
    }
  }
`;

const Footer = () => {
  return (
    <FooterComp>
      <div className="logo">
        <img src="/assets/triplogo8.png" alt="img" />
      </div>
      <div>
        <ul className="footer-menu">
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>이용안내</li>
        </ul>

        <div className="info">
          <span>상호</span> TripperMaker <br />
          <span>주소</span> 서대구로 7길 2 영남안재교육원
          <br />
          <span>개인정보관리책임자</span> ㅎㅎㅎㅎ
          <br />
        </div>

        <div className="copyright">
          <i>Copyright 2023.YiTripperMaker.All rights reserved.</i>
        </div>
      </div>
      <div className="tel">
        전화번호
        <p>053-635-0505</p>
      </div>
    </FooterComp>
  );
};

export default Footer;
