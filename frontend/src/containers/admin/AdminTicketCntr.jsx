import React from 'react';
import AdminTicketComp from '../../components/admin/AdminTicketComp';
import { useSelector } from 'react-redux';

const AdminTicketCntr = () => {
  const {
    id,
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
  return (
    <div>
      <AdminTicketComp />
    </div>
  );
};

export default AdminTicketCntr;