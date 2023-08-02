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

  // const seatData = [
  //   [{name:'A1',vacancy:null}, {name:'A2',vacancy:null},{name:'A3',vacancy:null}, {name:'A4',vacancy:null}], 
  //   [{name:'B1',vacancy:null}, {name:'B2',vacancy:null},{name:'B3',vacancy:null}, {name:'B4',vacancy:null}],
  //   [{name:'C1',vacancy:null}, {name:'C2',vacancy:null},{name:'C3',vacancy:null}, {name:'C4',vacancy:null}],
  //   [{name:'D1',vacancy:null}, {name:'D2',vacancy:null},{name:'D3',vacancy:null}, {name:'D4',vacancy:null}], 
  //   [{name:'E1',vacancy:null}, {name:'E2',vacancy:null},{name:'E3',vacancy:null}, {name:'E4',vacancy:null}],
  //   [{name:'F1',vacancy:null}, {name:'F2',vacancy:null},{name:'F3',vacancy:null}, {name:'F4',vacancy:null}],
  //   [{name:'G1',vacancy:null}, {name:'G2',vacancy:null},{name:'G3',vacancy:null}, {name:'G4',vacancy:null}], 
  //   [{name:'H1',vacancy:null}, {name:'H2',vacancy:null},{name:'H3',vacancy:null}, {name:'H4',vacancy:null}],
  //   [{name:'I1',vacancy:null}, {name:'I2',vacancy:null},{name:'I3',vacancy:null}, {name:'I4',vacancy:null}]
  // ];


  const [selectedSeat, setSelectedSeat] = useState([
    [{ name: 'A1', vacancy: null }, { name: 'A2', vacancy: null }, { name: 'A3', vacancy: null }, { name: 'A4', vacancy: null }],
    [{ name: 'B1', vacancy: null }, { name: 'B2', vacancy: null }, { name: 'B3', vacancy: null }, { name: 'B4', vacancy: null }],
    [{ name: 'C1', vacancy: null }, { name: 'C2', vacancy: null }, { name: 'C3', vacancy: null }, { name: 'C4', vacancy: null }],
    [{ name: 'D1', vacancy: null }, { name: 'D2', vacancy: null }, { name: 'D3', vacancy: null }, { name: 'D4', vacancy: null }],
    [{ name: 'E1', vacancy: null }, { name: 'E2', vacancy: null }, { name: 'E3', vacancy: null }, { name: 'E4', vacancy: null }],
    [{ name: 'F1', vacancy: null }, { name: 'F2', vacancy: null }, { name: 'F3', vacancy: null }, { name: 'F4', vacancy: null }],
    [{ name: 'G1', vacancy: null }, { name: 'G2', vacancy: null }, { name: 'G3', vacancy: null }, { name: 'G4', vacancy: null }],
    [{ name: 'H1', vacancy: null }, { name: 'H2', vacancy: null }, { name: 'H3', vacancy: null }, { name: 'H4', vacancy: null }],
    [{ name: 'I1', vacancy: null }, { name: 'I2', vacancy: null }, { name: 'I3', vacancy: null }, { name: 'I4', vacancy: null }]
  ]);
  const [selectedCount, setSelectedCount] = useState(1);
  const [modal, setModal] = useState(false);

  const {
    resultTrains,
    resultBuses,
    pageNoTrain,
    pageNoBus,
    dateTrain,
    dateBus,
    startStation,
    startTerminal,
    endStation,
    endTerminal,
    user,
    loading
  } = useSelector(({ BusMod, TrainMod, LoadingMod, UserMod }) => ({
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
    user: UserMod.user,
    loading: LoadingMod
  }));

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
      // setSelectedSeat([]);
      setSelectedSeat([
        [{ name: 'A1', vacancy: null }, { name: 'A2', vacancy: null }, { name: 'A3', vacancy: null }, { name: 'A4', vacancy: null }],
        [{ name: 'B1', vacancy: null }, { name: 'B2', vacancy: null }, { name: 'B3', vacancy: null }, { name: 'B4', vacancy: null }],
        [{ name: 'C1', vacancy: null }, { name: 'C2', vacancy: null }, { name: 'C3', vacancy: null }, { name: 'C4', vacancy: null }],
        [{ name: 'D1', vacancy: null }, { name: 'D2', vacancy: null }, { name: 'D3', vacancy: null }, { name: 'D4', vacancy: null }],
        [{ name: 'E1', vacancy: null }, { name: 'E2', vacancy: null }, { name: 'E3', vacancy: null }, { name: 'E4', vacancy: null }],
        [{ name: 'F1', vacancy: null }, { name: 'F2', vacancy: null }, { name: 'F3', vacancy: null }, { name: 'F4', vacancy: null }],
        [{ name: 'G1', vacancy: null }, { name: 'G2', vacancy: null }, { name: 'G3', vacancy: null }, { name: 'G4', vacancy: null }],
        [{ name: 'H1', vacancy: null }, { name: 'H2', vacancy: null }, { name: 'H3', vacancy: null }, { name: 'H4', vacancy: null }],
        [{ name: 'I1', vacancy: null }, { name: 'I2', vacancy: null }, { name: 'I3', vacancy: null }, { name: 'I4', vacancy: null }]
      ]);
    }
  }
  const onSelectedSeat = (e) => {
    // console.log('target', e.target);
    if (e.target.className === 'items') {
      if (selectedSeat.length < selectedCount) {
        e.target.className = 'items clicked';
        const seat = e.target.value;
        const uno = user.no;
        setSelectedSeat((selectedSeat) => {
          return [...selectedSeat, { name: seat, vacancy: uno }]
        });
      }
      else if (selectedSeat.length >= selectedCount) {
        // Swal.fire({
        //   title: '좌석을 다 선택했어요!',
        //   icon: 'warning',
        //   toast: true,
        //   timer: 1500
        // });
        alert('포화상태');
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
      {modal && <TicketComp selectedCount={selectedCount} onSelectedSeat={onSelectedSeat} onCnt={onCnt} selectedSeat={selectedSeat} />}
    </div>
  );
};

export default TrafficListCntr;