import RegisterFormComp from "../../components/auth/RegisterFormComp";


const RegisterCntr = () => {
    const onChange = (e) => {
        console.log("1111");
        const {value, name} = e.target;
        console.log(value, name, e);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("22222");
    };

    return (
        <>
            <RegisterFormComp onChange={onChange} onSubmit={onSubmit} />
        </>
    );
}

export default RegisterCntr;