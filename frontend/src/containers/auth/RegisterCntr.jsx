import { useEffect, useRef, useState } from "react";
import RegisterFormComp from "../../components/auth/RegisterFormComp";
import { useDispatch, useSelector } from "react-redux";
import {
  authNumChk,
  changeValue,
  idChk,
  idModify,
  initializeRegisterForm,
  nickChk,
  nickModify,
  phoneChk,
  pwdChk,
  register,
} from "../../modules/RegisterMod";

const RegisterCntr = () => {
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState(null);
  const [disabledDomain, setDisabledDomain] = useState("");
  const [onIdChk, setOnIdChk] = useState("empty");
  const [onPwdChk, setOnPwdChk] = useState("");
  const [onNickChk, setOnNickChk] = useState("empty");
  const dispatch = useDispatch();
  const {
    form,
    id,
    domain,
    idAuth,
    idError,
    pwd,
    pwdConfirm,
    nick,
    nickAuth,
    nickError,
    phone,
    phoneAuth,
    phoneError,
    authNum,
  } = useSelector(({ RegisterMod }) => ({
    form: RegisterMod,
    id: RegisterMod.user.id,
    domain: RegisterMod.user.domain,
    idAuth: RegisterMod.auth.idAuth,
    idError: RegisterMod.auth.idError,
    pwd: RegisterMod.user.pwd,
    pwdConfirm: RegisterMod.user.pwdConfirm,
    nick: RegisterMod.user.nick,
    nickAuth: RegisterMod.auth.nickAuth,
    nickError: RegisterMod.auth.nickError,
    phone: RegisterMod.user.phone,
    phoneAuth: RegisterMod.auth.phoneAuth,
    phoneError: RegisterMod.auth.phoneError,
    authNum: RegisterMod.auth.authNum,
  }));
  const chooseDomain = useRef();
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeValue({
        form: "user",
        value,
        key: name,
      })
    );
  };

  //회원가입 정보 제출
  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(register({ }));
  };

  //리팩토링해서 모듈로 뺄 수 있는지 확인
  const onCheck = (e) => {
    const { name } = e.target;

    if (name === "emailChk") {
      dispatch(
        idChk({
          id: email,
        })
      );
    }

    if (name === "nickChk") {
      dispatch(
        nickChk({
          nick,
        })
      );
    }

    if (name === "phoneChk") {
      dispatch(
        phoneChk({
          phone,
        })
      );
    }

    if (name === "phoneAuthChk") {
      dispatch(
        authNumChk({
          authNum,
        })
      );
    }
  };

  //domain 옵션 선택시 email 값 변경
  const changeDomain = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value !== "directInput") {
      chooseDomain.current.value = value; //useref로 직접 input에 접근하여 조작
      //dispatch하여 store내의 domain값 변경 후 setEmail에 넣어줌
      dispatch(
        changeValue({
          form: "user",
          value: value,
          key: "domain",
        })
      );
      setEmail(`${id}@${domain}`); //선택된 도메인 값 email에 적용
      setDisabledDomain(true); //도메인 선택 disabled 적용
    } else {
      setDisabledDomain(false); //도메인 선택 disabled 해제
      chooseDomain.current.value = ""; //도메인 선택 "직접입력"시 input 초기화
    }
  };

  useEffect(() => {
    dispatch(initializeRegisterForm());
  }, [dispatch]);
  //비밀번호, 비밀번호확인 체크
  useEffect(() => {
    if (pwd !== null && pwdConfirm !== null) {
      if (pwd !== pwdConfirm) {
        setOnPwdChk(false); //아래랑 리팩토링
        dispatch(
          pwdChk({
            form: "auth",
            key: "pwdAuth",
            value: false,
          })
        );
      }
      if (pwd === pwdConfirm) {
        setOnPwdChk(true); //여기랑 리팩토링
        dispatch(
          pwdChk({
            form: "auth",
            key: "pwdAuth",
            value: true,
          })
        );
      }
    }
  }, [pwd, pwdConfirm]);

  //닉네임 중복확인 후 값 변경시 다시 중복확인 해야함
  useEffect(() => {
    if (nickAuth || nickAuth === false) {
      dispatch(nickModify());
    }
  }, [nick]);
  //닉네임 중복확인 메세지 실시간 변경
  useEffect(() => {
    if (nickError === null) {
      setOnNickChk("empty");
    } else if (nickError) {
      setOnNickChk(false);
    } else {
      setOnNickChk(true);
    }
  }, [nickError]);
  //id + domain으로 이메일 만들기
  useEffect(() => {
    if (id !== null || domain !== null) {
      setEmail(`${id}@${domain}`);
    }
  }, [id, domain]);
  //id 또는 email 중복확인 후 값 변경시 다시 중복확인 해야함
  useEffect(() => {
    if (idAuth || idAuth === false) {
      dispatch(idModify());
    }
  }, [email]);
  //email 변경시 중복확인 메세지 실시간 변경
  useEffect(() => {
    if (idError === null) {
      setOnIdChk("empty");
    } else if (idError) {
      setOnIdChk(false);
    } else {
      setOnIdChk(true);
    }
  }, [idError]);

  return (
    <RegisterFormComp
      onChange={onChange}
      onSubmit={onSubmit}
      onCheck={onCheck}
      onIdChk={onIdChk}
      onPwdChk={onPwdChk}
      onNickChk={onNickChk}
      changeDomain={changeDomain}
      chooseDomain={chooseDomain}
      disabledDomain={disabledDomain}
    />
  );
};

export default RegisterCntr;
