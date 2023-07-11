import SearchPwdComp from "../../components/auth/SearchPwdComp";

const SearchPwdCntr = () => {
  const onClick = (e) => {
    e.preventDefault();
    console.log("비밀번호 변경");
  };
  return <SearchPwdComp onClick={onClick} />;
};

export default SearchPwdCntr;
