import { useEffect, useState } from "react";
import AdminTermsComp from "../../components/admin/AdminTermsComp";
import { useDispatch, useSelector } from "react-redux";
import { changePhoto } from "../../lib/api/admin/terms";
import {
  changePhotoFailure,
  changePhotoSuccess,
  getAdmin,
} from "../../modules/admin/AdminTermsMod";

const AdminTermsCntr = () => {
  const dispatch = useDispatch();
  const { id, admin } = useSelector(({ UserMod, AdminTermsMod }) => ({
    id: UserMod.user.id,
    admin: AdminTermsMod.admin,
  }));
  const [tableType, setTableType] = useState("LOGO");
  const [logo, setLogo] = useState();
  const [content, setContent] = useState();

  const changeType = (e) => {
    const type = e.target.id;
    setTableType(type);
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
      logo={logo}
      tableType={tableType}
      changeType={changeType}
      onChangeLogo={onChangeLogo}
      onUploadLogo={onUploadLogo}
    />
  );
};

export default AdminTermsCntr;
