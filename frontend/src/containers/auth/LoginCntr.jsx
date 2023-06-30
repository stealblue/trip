import { useEffect } from "react";
import LoginComp from "../../components/auth/LoginComp";
import { initializeLoginForm, login } from "../../modules/LoginMod";
import { useDispatch, useSelector } from "react-redux";

const LoginCntr = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ loginMod }) => ({
    form: loginMod,
  }));
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(login({ value, key: name }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("saga넣기");
  };

  useEffect(() => {
    dispatch(initializeLoginForm());
  }, [dispatch]);
  return <LoginComp form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginCntr;
