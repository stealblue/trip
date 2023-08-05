import { useEffect, useRef, useState } from "react";
import AdminTermsComp from "../../components/admin/AdminTermsComp";
import { useDispatch, useSelector } from "react-redux";
import { changePhoto } from "../../lib/api/admin/terms";
import {
  changeInform,
  changePhotoFailure,
  changePhotoSuccess,
  changeValue,
  getAdmin,
  getNewAdmin,
  initializeForm,
  inputAddress,
} from "../../modules/admin/AdminTermsMod";
import { check } from "../../modules/auth/UserMod";

const AdminTermsCntr = () => {
  const dispatch = useDispatch();
  const {
    id,
    user,
    admin,
    newAdmin,
    nick,
    phone,
    addr1,
    addr2,
    zipcode,
    changeInformError,
  } = useSelector(({ UserMod, AdminTermsMod }) => ({
    id: UserMod.user.id,
    admin: AdminTermsMod?.admin,
    newAdmin: AdminTermsMod?.newAdmin,
    nick: AdminTermsMod?.admin?.nick,
    phone: AdminTermsMod?.admin?.phone,
    addr1: AdminTermsMod?.admin?.addr1,
    addr2: AdminTermsMod?.admin?.addr2,
    zipcode: AdminTermsMod?.admin?.zipcode,
    changeInformError: AdminTermsMod.changeInformError,
  }));
  const [tableType, setTableType] = useState("LOGO");
  const [logo, setLogo] = useState();
  const [content, setContent] = useState();
  const [changeForm, setChangeForm] = useState(false);
  const [modal, setModal] = useState(false);
  const [address, setAddress] = useState({});
  const businessNameRef = useRef(null);
  const masterNameRef = useRef();
  const phoneNumberRef = useRef();
  const address1Ref = useRef();
  const address2Ref = useRef();
  const zipcodeRef = useRef();

  const changeType = (e) => {
    const type = e.target.id;
    setTableType(type);
    setChangeForm(false);
  };

  const onUploadLogo = (e) => {
    setContent(e.target.files[0]);
  };

  const onChangeLogo = async (e) => {
    e.preventDefault();
    if (!content) {
      return alert("사진을 먼저 선택해주세요.");
    }
    const formData = new FormData();
    formData.append("img", content);
    await changePhoto({
      id,
      formData,
    }).then((res) => {
      if (res.status === 200) {
        const { img } = res.data;
        setLogo(img);
        dispatch(
          changePhotoSuccess({
            img,
          })
        );
      } else {
        const { imgError } = res.data;
        dispatch(
          changePhotoFailure({
            imgError,
          })
        );
      }
    });
  };

  const onChangeForm = () => {
    setChangeForm(!changeForm);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeValue({
        form: "newAdmin",
        value,
        key: name,
      })
    );
  };

  const onChangeInform = () => {
    const { new_id, new_nick, new_phone, new_zipcode, new_addr1, new_addr2 } =
      newAdmin;
    dispatch(
      changeInform({
        id,
        businessName: new_id,
        nick: new_nick,
        phone: new_phone,
        zipcode: new_zipcode,
        addr1: new_addr1,
        addr2: new_addr2,
      })
    );
  };

  const openSearchAddress = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  const onCompletePost = (data) => {
    const { roadAddress, zonecode } = data;
    setAddress({ roadAddress, zonecode });
    setModal(!modal);
    dispatch(
      inputAddress({
        addr1: roadAddress,
        zipcode: zonecode,
      })
    );
    address1Ref.current.value = roadAddress;
    zipcodeRef.current.value = zonecode;
  };

  useEffect(() => {
    const BusinessName = admin?.id?.slice(
      admin?.id.indexOf("@") + 1,
      admin?.id.lastIndexOf(".")
    );

    if (changeForm) {
      businessNameRef.current.value = BusinessName;
      masterNameRef.current.value = nick;
      phoneNumberRef.current.value = phone;
      zipcodeRef.current.value = zipcode;
      address1Ref.current.value = addr1;
      address2Ref.current.value = addr2;

      dispatch(
        getNewAdmin({ id: BusinessName, nick, phone, zipcode, addr1, addr2 })
      );
    }

    if (!changeForm) {
      dispatch(initializeForm());
    }
  }, [changeForm]);

  //상호변경시 localStorage와 UserMod의 user를 갱신하여 로그아웃 없이 계속해서 정보 수정가능
  useEffect(() => {
    const USER_KEY = "USER";
    localStorage.setItem(USER_KEY, JSON.stringify(admin));
    dispatch(check());
  }, [admin]);

  useEffect(() => {
    if (changeInformError === false) {
      alert("수정완료");
      setChangeForm(false);
    }
  }, [changeInformError]);

  useEffect(() => {
    dispatch(
      getAdmin({
        id,
      })
    );
  }, [dispatch, logo]);

  return (
    <AdminTermsComp
      admin={admin}
      modal={modal}
      tableType={tableType}
      changeType={changeType}
      onChangeLogo={onChangeLogo}
      onUploadLogo={onUploadLogo}
      onChangeForm={onChangeForm}
      onChangeInform={onChangeInform}
      changeForm={changeForm}
      onChange={onChange}
      businessNameRef={businessNameRef}
      masterNameRef={masterNameRef}
      phoneNumberRef={phoneNumberRef}
      addr1={addr1}
      address1Ref={address1Ref}
      address2Ref={address2Ref}
      zipcodeRef={zipcodeRef}
      openSearchAddress={openSearchAddress}
      onCompletePost={onCompletePost}
    />
  );
};

export default AdminTermsCntr;
