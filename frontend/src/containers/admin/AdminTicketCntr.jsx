import React, { useEffect } from 'react';
import AdminTicketComp from '../../components/admin/AdminTicketComp';
import { useDispatch, useSelector } from 'react-redux';
import { listTickets } from '../../modules/traffic/TicketMod';
const AdminTicketCntr = () => {
  const dispatch = useDispatch();
  const { tickets, error, loading } = useSelector(({ TicketMod, LoadingMod }) => ({
    tickets: TicketMod.tickets,
    error: TicketMod.error,
    loading: LoadingMod['ticket/LIST_TICKETS']
  }));

  useEffect(() => {
    dispatch(listTickets({ page: 1 }))
  }, []);
  return (
    <div>
      {!loading && tickets ? <AdminTicketComp tickets={tickets} /> : '로딩 중'}
    </div>
  );
};

export default AdminTicketCntr;