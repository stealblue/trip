import { useEffect, useRef, useState } from "react";
import RegisterFormComp from "../../components/auth/RegisterFormComp";
import { useDispatch, useSelector } from "react-redux";
import {
  changeValue,
  initializeRegisterForm,
  register,
} from "../../modules/RegisterMod";

const RegisterCntr = () => {
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { form, id, domain, pwd, pwdConfirm } = useSelector(
    ({ RegisterMod }) => ({
      form: RegisterMod,
      id: RegisterMod.user.id,
      domain: RegisterMod.user.domain,
      pwd: RegisterMod.user.pwd,
      pwdConfirm: RegisterMod.user.pwdConfirm,
    })
  );

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
      console.log("닉네임체크");
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
    if (pwd !== "" && pwdConfirm !== "") {
      if (pwd !== pwdConfirm) {
        console.log("비밀번호 불일치");
      }
      if (pwd === pwdConfirm) {
        console.log("비밀번호 일치");
      }
    }
  }, [pwd, pwdConfirm]);

  return (
    <RegisterFormComp
      onChange={onChange}
      onSubmit={onSubmit}
      onCheck={onCheck}
    />
  );
};

export default RegisterCntr;
