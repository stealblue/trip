import React, { useEffect, useState } from 'react';
import AdminTicketComp from '../../components/admin/AdminTicketComp';
import { useDispatch, useSelector } from 'react-redux';
import { listTickets } from '../../modules/traffic/TicketMod';
import OriginPageNavComp from '../../components/common/OriginPageNavComp';

const AdminTicketCntr = () => {
  const dispatch = useDispatch();
  const { tickets, error, loading } = useSelector(({ TicketMod, LoadingMod }) => ({
    tickets: TicketMod.tickets,
    error: TicketMod.error,
    loading: LoadingMod['ticket/LIST_TICKETS']
  }));
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(listTickets({ page }))
  }, [dispatch, page]);

  const onClickPage = (e) => {
    const changePage = e.target.value || e.target.dataset.page;
    // dispatch(listTickets(page));
    setPage(changePage);
  };

  return (
    <div>
      {!loading && tickets ? <AdminTicketComp tickets={tickets} /> : '로딩 중'}
      {!loading && tickets ? <OriginPageNavComp totalCount={tickets.count} pageNo={page} onPage={onClickPage} /> : '로딩 중'}
    </div>
  );
};

export default AdminTicketCntr;