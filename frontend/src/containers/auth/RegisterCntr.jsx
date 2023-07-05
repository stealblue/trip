import { useEffect, useRef, useState } from "react";
import RegisterFormComp from "../../components/auth/RegisterFormComp";
import { useDispatch, useSelector } from "react-redux";
import {
  changeValue,
  initializeRegisterForm,
  nickChk,
  nickModify,
  pwdChk,
  register,
} from "../../modules/RegisterMod";

const RegisterCntr = () => {
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState(null);
  const [onPwdChk, setOnPwdChk] = useState("");
  const [onNickChk, setOnNickChk] = useState("empty");
  const dispatch = useDispatch();
  const { form, id, domain, pwd, pwdConfirm, nick, nickAuth, nickError } =
    useSelector(({ RegisterMod }) => ({
      form: RegisterMod,
      id: RegisterMod.user.id,
      domain: RegisterMod.user.domain,
      pwd: RegisterMod.user.pwd,
      pwdConfirm: RegisterMod.user.pwdConfirm,
      nick: RegisterMod.user.nick,
      nickAuth: RegisterMod.auth.nickAuth,
      nickError: RegisterMod.auth.nickError,
    }));

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

  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(register({ }));
  };

  const onCheck = (e) => {
    const { name } = e.target;

    if (name === "emailChk") {
      console.log("이메일체크");
    }

    if (name === "nickChk") {
      dispatch(
        nickChk({
          nick,
        })
      );
    }

    if (name === "phoneChk") {
      console.log("폰번호 체크 및 인증번호 발송");
    }

    if (name === "phoneAuthChk") {
      console.log("폰 인증번호 확인");
    }
  };

  useEffect(() => {
    dispatch(initializeRegisterForm());
  }, [dispatch]);

  useEffect(() => {
    if (pwd !== null && pwdConfirm !== null) {
      if (pwd !== pwdConfirm) {
        setOnPwdChk(false);
        dispatch(
          pwdChk({
            form: "auth",
            key: "pwdAuth",
            value: false,
          })
        );
      }
      if (pwd === pwdConfirm) {
        setOnPwdChk(true);
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

  useEffect(() => {
    if (id !== null || domain !== null) {
      setEmail(`${id}@${domain}`);
    }
    console.log("아이디", id, "도메인", domain);
  }, [id, domain]);
  console.log(email);
  return (
    <RegisterFormComp
      onChange={onChange}
      onSubmit={onSubmit}
      onCheck={onCheck}
      onPwdChk={onPwdChk}
      onNickChk={onNickChk}
    />
  );
};

export default RegisterCntr;
