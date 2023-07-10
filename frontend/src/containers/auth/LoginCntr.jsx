import { useEffect, useState } from "react";
import LoginComp from "../../components/auth/LoginComp";
import {
  changeValue,
  initializeLoginForm,
  login,
} from "../../modules/LoginMod";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { check } from "../../modules/UserMod";

const LoginCntr = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { id, pwd, auth, authError, user } = useSelector(
    ({ LoginMod, UserMod }) => ({
      id: LoginMod.id,
      pwd: LoginMod.pwd,
      auth: LoginMod.auth,
      authError: LoginMod.authError,
      user: UserMod.user,
    })
  );
  const USER_KEY = "USER";

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

  return <LoginComp error={error} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginCntr;
