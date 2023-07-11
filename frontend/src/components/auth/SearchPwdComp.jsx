import { useParams } from "react-router-dom";

const SearchPwdComp = ({ onClick }) => {
  const { id } = useParams();
  return (
    <div>
      비밀번호
      <input />
      비밀번호 확인
      <input />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default SearchPwdComp;
