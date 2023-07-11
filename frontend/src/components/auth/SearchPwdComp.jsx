const SearchPwdComp = ({ onSubmit, onChange, onPwdChk }) => {
  return (
    <div>
      비밀번호
      <input name="pwd" type="password" onChange={onChange} />
      비밀번호 확인
      <input name="pwdConfirm" type="password" onChange={onChange} />
      <button onClick={onSubmit}>확인</button>
      {onPwdChk === false && (
        <div>비밀번호가 일치하지 않습니다. 다시 입력해주세요.</div>
      )}
    </div>
  );
};

export default SearchPwdComp;
