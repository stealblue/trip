import { useEffect, useState } from 'react';
import TrafficListComp from '../../components/traffic/TrafficListComp'
import { useDispatch, useSelector } from "react-redux";
import { listTrains } from '../../modules/traffic/TrainMod';
import { listBuses } from '../../modules/traffic/BusMod';
import LoadingComp from '../../components/common/LoadingComp';
import Swal from 'sweetalert2';
import TicketComp from '../../components/common/TicketComp';

const TrafficListCntr = () => {

  const dispatch = useDispatch();

  const seatData = [
    ['A1', 'A2', 'A3', 'A4'], ['B1', 'B2', 'B3', 'B4'], ['C1', 'C2', 'C3', "C4"],
    ['D1', 'D2', 'D3', 'D4'], ['E1', 'E2', 'E3', 'E4'], ['F1', 'F2', 'F3', "F4"],
    ['G1', 'G2', 'G3', 'G4'], ['H1', 'H2', 'H3', 'H4'], ['I1', 'I2', 'I3', "I4"]
  ];
  const checkBoxData = seatData.map((row) => row.map((item) => ({ input: 'checkbox', title: item })));

  const [selectedSeat, setSelectedSeat] = useState([]);
  const [selectedCount, setSelectedCount] = useState(1);
  const [modal, setModal] = useState(false);

  const { resultTrains, resultBuses, pageNoTrain, pageNoBus, dateTrain, dateBus, startStation, startTerminal, endStation, endTerminal, loading } = useSelector(({ BusMod, TrainMod, LoadingMod }) => ({
    resultTrains: TrainMod?.resultTrains,
    resultBuses: BusMod?.resultBuses,
    pageNoTrain: TrainMod?.pageNoTrain,
    pageNoBus: BusMod?.pageNoBus,
    dateTrain: TrainMod.dateTrain,
    dateBus: BusMod.dateBus,
    startStation: TrainMod.startStation,
    startTerminal: BusMod.startTerminal,
    endStation: TrainMod.endStation,
    endTerminal: BusMod.endTerminal,
    loading: LoadingMod
  }));

  const generateTableHtml = (data) => {
    let html = '<table>';
    data.forEach((row, rowIndex) => {
      html += '<tr>';
      row.forEach((checkbox, colIndex) => {
        html += `<td><label><input id="swal-checkbox-${rowIndex}-${colIndex}" type="checkbox" class="seat-check">${checkbox.title}</label></td>`;
      });
      html += '</tr>';
    });
    html += '</table>';
    return html;
  }
  const onTicketing = (e) => {
    const item = e.currentTarget.dataset.item;
    const jsonItem = JSON.parse(item);
    console.log('item : ', jsonItem);
    setModal(true);
  }

  const onCnt = (e) => {
    if (e.target.value !== '') {
      const cnt = parseInt(e.target.value);
      setSelectedCount(cnt);

    }
  }
  const onSelectedSeat = (e) => {
    console.log('target', e.target);
    if (e.target.className === 'items') {
      if (selectedSeat.length < selectedCount) {
        e.target.className = 'items clicked';
        const seat = e.target.value;
        setSelectedSeat((selectedSeat) => {
          return [...selectedSeat, seat]
        });
      }
      else if (selectedSeat.length >= selectedCount) {
        Swal.fire({
          title: '좌석을 다 선택했어요!',
          icon: 'warning',
          toast: true,
          timer: 1500
        });
      }
    }
    else {
      setSelectedSeat(selectedSeat.filter(seat => seat !== e.target.value))
      e.target.className = 'items';
    }
    console.log('target', e.target);
  }

  useEffect(() => {
    if (startStation && endStation && (dateTrain !== '' && dateTrain)) {
      const startValue = startStation.stationId;
      const endValue = endStation.stationId;
      const date = dateTrain.dateTrain;
      dispatch(listTrains({ startStation: startValue, endStation: endValue, dateTrain: date, pageNoTrain }));
    }

  }, [dispatch, pageNoTrain, startStation, endStation, dateTrain])

  useEffect(() => {
    if (startTerminal && endTerminal && (dateBus !== '' && dateBus)) {
      const startValue = startTerminal.terminalId;
      const endValue = endTerminal.terminalId;
      const date = dateBus.dateBus;
      dispatch(listBuses({ startTerminal: startValue, endTerminal: endValue, dateBus: date, pageNoBus }))
    }
  }, [dispatch, startTerminal, endTerminal, dateBus, pageNoBus])

  if (loading && (!resultTrains && !resultBuses)) {
    // return <LoadingComp />
    return <div></div>;
  }

  return (
    <div>
      {pageNoTrain && startStation && endStation && dateTrain && <TrafficListComp resultTrains={resultTrains} loading={loading} onTicketing={onTicketing} />}
      {pageNoBus && startTerminal && endTerminal && dateBus && <TrafficListComp resultBuses={resultBuses} loading={loading} onTicketing={onTicketing} />}
      {modal && <TicketComp selectedCount={selectedCount} setSelectedCount={setSelectedCount} seatData={seatData} generateTableHtml={generateTableHtml} checkBoxData={checkBoxData} onSelectedSeat={onSelectedSeat} onCnt={onCnt} />}
    </div>
  );
};

export default TrafficListCntr;