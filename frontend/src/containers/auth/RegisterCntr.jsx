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
    dispatch(register({ value, key: name, form }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ value, key: name, form }));
  };
  useEffect(() => {
    dispatch(initializeRegisterForm());
  }, []);

  return (
    <>
      <RegisterFormComp form={form} onChange={onChange} onSubmit={onSubmit} />
    </>
  );
};

export default RegisterCntr;
