import { useEffect, useState } from "react";
import AdminStyleComp from "../../components/admin/AdminStyleComp";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStyle,
  changeValue,
  getStyle,
} from "../../modules/admin/AdminStyleMod";
import { getMainStyle } from "../../modules/main/MainMod";

const AdminStyleCntr = () => {
  const dispatch = useDispatch();
  const { id, adminStyle } = useSelector(({ UserMod, AdminStyleMod }) => ({
    id: UserMod?.user?.id,
    adminStyle: AdminStyleMod?.adminStyle,
  }));
  const [selectedStyle, setSelectedStyle] = useState(null);

  const onChangeStyleMode = (e) => {
    const { value } = e.target;
    setSelectedStyle(value);
  };

  const onSubmitStyle = () => {
    dispatch(
      changeStyle({
        id,
        adminStyle: selectedStyle,
      })
    );
  };

  useEffect(() => {
    if (selectedStyle !== null) {
      dispatch(
        changeValue({
          selectedStyle: selectedStyle,
        })
      );
    }
  }, [selectedStyle]);

  useEffect(() => {
    if (adminStyle === null || adminStyle !== selectedStyle) {
      dispatch(
        getStyle({
          id,
        })
      );
    }
    dispatch(getMainStyle());
  }, [adminStyle]);

  return (
    <>
      <AdminStyleComp
        onChangeStyleMode={onChangeStyleMode}
        onSubmitStyle={onSubmitStyle}
        adminStyle={adminStyle}
        selectedStyle={selectedStyle}
      />
    </>
  );
};

export default AdminStyleCntr;
