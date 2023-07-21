import { useEffect, useState } from "react";
import LoginComp from "../../components/auth/LoginComp";
import {
  changeValue,
  initializeLoginForm,
  login,
  onSearchId,
  onSearchPwd,
} from "../../modules/auth/LoginMod";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { check } from "../../modules/auth/UserMod";

const LoginCntr = () => {
  const [modal, setModal] = useState(false);
  const [searchName, setSearchName] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {
    id,
    pwd,
    email,
    phone,
    auth,
    authError,
    user,
    searchId,
    searchPwd,
    searchIdError,
    searchPwdError,
  } = useSelector(({ LoginMod, UserMod }) => ({
    id: LoginMod.id,
    pwd: LoginMod.pwd,
    email: LoginMod.email,
    phone: LoginMod.phone,
    auth: LoginMod.auth,
    authError: LoginMod.authError,
    user: UserMod.user,
    searchId: LoginMod.searchId,
    searchPwd: LoginMod.searchPwd,
    searchIdError: LoginMod.searchIdError,
    searchPwdError: LoginMod.searchPwdError,
  }));
  const USER_KEY = "USER";

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeValue({ value, key: name }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ id, pwd }));
  };

  //모달창 toggle 하면서 state 정보 초기화
  const switchModal = () => {
    setModal(!modal);
    dispatch(initializeLoginForm());
  };

  const changeInform = (e) => {
    const name = e.target.getAttribute("name"); //e.target.name 으로 접근 안됨.
    setSearchName(name);
    switchModal();
  };

  const onFindId = (e) => {
    e.preventDefault();
    const valid = (phone) => {
      return /^[0-1]{3}[0-9]{4}[0-9]{4}$/.test(phone);
    };
    const phoneValid = valid(phone);

    if (!phoneValid) {
      alert("전화번호를 확인해주세요.");
    }
    dispatch(
      onSearchId({
        phone,
      })
    );
  };

  const onFindPwd = (e) => {
    e.preventDefault();
    const valid = (email) => {
      return /^[A-Za-z0-9.\-_]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/.test(email);
    };
    const emailValid = valid(email);

    if (!emailValid) {
      alert("이메일을 확인해주세요.");
    }
    dispatch(
      onSearchPwd({
        email,
        phone,
      })
    );
  };

  useEffect(() => {
    dispatch(initializeLoginForm());
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError(authError);
      return;
    }
    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigate("/");
      try {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [navigate, user]);

  useEffect(() => {
    if (searchPwd) {
      alert("해당 이메일로 비밀번호 변경 메일을 발송했습니다. 확인해주세요. ");
    }
  }, [searchPwd]);

  return (
    <LoginComp
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
      changeInform={changeInform}
      searchName={searchName}
      findId={searchId}
      onFindId={onFindId}
      onFindPwd={onFindPwd}
      modal={modal}
      switchModal={switchModal}
      searchIdError={searchIdError}
      searchPwdError={searchPwdError}
    />
  );
};

export default LoginCntr;
