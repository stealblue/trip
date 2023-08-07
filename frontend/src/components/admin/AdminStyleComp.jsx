import { css, styled } from "styled-components";
// import ThemeComp from "../common/ThemeComp";

const AdminBoardWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
`;

const BoardContainer = styled.div`
  // background: ${ThemeComp.smoke};
  background: ${(props) => props.theme.smoke};

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
  // background: ${ThemeComp.dark};
  background: ${(props) => props.theme.dark};

  font-size: 20px;
  padding: 10px 20px;
  span {
    // color: ${ThemeComp.smoke};
    color: ${(props) => props.theme.smoke};
    margin-left: 10px;
  }
`;

const BoardTag = styled.div`
  display: flex;
  justify-content: space-around;
  background: yellow;
  padding: 10px;
`;

const ButtonBox = styled.div`
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  // background: ${ThemeComp.lightblack};
  // color: ${ThemeComp.smoke};
  background: ${(props) => props.theme.lightblack};
  color: ${(props) => props.theme.smoke};
  cursor: pointer;
  padding: 7px 12px;
  margin: 10px;

  &:hover {
    // background: ${ThemeComp.softblack};
    background: ${(props) => props.theme.softblack};
  }
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0 10px;
`;

const AdminStyleComp = ({
  onChangeStyleMode,
  onSubmitStyle,
  adminStyle,
  selectedStyle,
}) => {
  return (
    <AdminBoardWrap>
      <BoardContainer>
        <BoardName>
          <div>스타일관리</div>
        </BoardName>
        <ButtonBox>
          <Label>
            <span>BASIC</span>
            {selectedStyle === null && adminStyle === "basic" ? (
              <input
                name="styleColor"
                value="basic"
                role="switch"
                type="radio"
                onClick={onChangeStyleMode}
                checked
              />
            ) : (
              <input
                name="styleColor"
                value="basic"
                role="switch"
                type="radio"
                onClick={onChangeStyleMode}
              />
            )}
          </Label>
          <Label>
            <span>DARK</span>
            {selectedStyle === null && adminStyle === "dark" ? (
              <input
                name="styleColor"
                value="dark"
                role="switch"
                type="radio"
                onClick={onChangeStyleMode}
                checked
              />
            ) : (
              <input
                name="styleColor"
                value="dark"
                role="switch"
                type="radio"
                onClick={onChangeStyleMode}
              />
            )}
          </Label>
          <Label>
            <span>GREEN</span>
            {selectedStyle === null && adminStyle === "green" ? (
              <input
                name="styleColor"
                value="green"
                role="switch"
                type="radio"
                onClick={onChangeStyleMode}
                checked
              />
            ) : (
              <input
                name="styleColor"
                value="green"
                role="switch"
                type="radio"
                onClick={onChangeStyleMode}
              />
            )}
          </Label>
        </ButtonBox>
        <Button onClick={onSubmitStyle}>적용</Button>
      </BoardContainer>
    </AdminBoardWrap>
  );
};

export default AdminStyleComp;
