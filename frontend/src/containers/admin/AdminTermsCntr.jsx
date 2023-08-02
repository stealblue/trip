import { useState } from "react";
import AdminTermsComp from "../../components/admin/AdminTermsComp";
import { useDispatch, useSelector } from "react-redux";
import { changePhoto } from "../../lib/api/admin/terms";

const AdminTermsCntr = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(({ UserMod }) => ({ id: UserMod.user.id }));
  const [tableType, setTableType] = useState("LOGO");
  const [userImg, setUserImg] = useState();
  const [content, setContent] = useState();

  const changeType = (e) => {
    const type = e.target.className;
    setTableType(type);
  };

  const onUploadPhoto = (e) => {
    setContent(e.target.files[0]);
  };

  const onChangePhoto = async (e) => {
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
        setUserImg(img);
        // dispatch(
        //   changePhotoSuccess({
        //     img,
        //   })
        // );
      } else {
        const { imgError } = res.data;
        // dispatch(
        //   changePhotoFailure({
        //     imgError,
        //   })
        // );
      }
    });
  };

  return (
    <AdminTermsComp
      tableType={tableType}
      changeType={changeType}
      onChangePhoto={onChangePhoto}
      onUploadPhoto={onUploadPhoto}
    />
  );
};

export default AdminTermsCntr;
