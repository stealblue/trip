import { useEffect } from "react";
import RegisterFormComp from "../../components/auth/RegisterFormComp";
import { useDispatch, useSelector } from "react-redux";
import { initializeRegisterForm, register } from "../../modules/RegisterMod";

const RegisterCntr = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ RegisterMod }) => ({
    form: RegisterMod,
  }));
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(register({ value, key: name }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ form }));
  };
  useEffect(() => {
    dispatch(initializeRegisterForm());
  }, [dispatch]);

  return (
    <RegisterFormComp onChange={onChange} onSubmit={onSubmit} form={form} />
  );
};

export default RegisterCntr;
