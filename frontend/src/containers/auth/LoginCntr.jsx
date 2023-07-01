import { useEffect, useState } from "react";
import LoginComp from "../../components/auth/LoginComp";
import {
  changeValue,
  initializeLoginForm,
  login,
} from "../../modules/LoginMod";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginCntr = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { id, pwd, auth, authError } = useSelector(({ LoginMod }) => ({
    id: LoginMod.id,
    pwd: LoginMod.pwd,
    auth: LoginMod.auth,
    authError: LoginMod.authError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeValue({ value, key: name }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ id, pwd }));
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
      navigate("/");
      return;
    }
  }, [auth, authError, dispatch]);
  return <LoginComp error={error} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginCntr;
