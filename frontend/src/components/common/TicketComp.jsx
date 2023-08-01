import { styled } from "styled-components";

const Fullscreen = styled.div`
  position: fixed;
  z-index: 3000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  width: 40%;
  /* height: 120px; */
  background-color: #fff;
  /* padding: 2%; */
  border-radius: 4px;
  border: 1px solid #333;
  h2 {
    margin-bottom: 20px;
  }
  button{
    width: 24%;
    padding: auto;
    margin: 1px;
    text-align: center;
    display: inline-block;
    &.clicked{
      background-color: steelblue;
    }
  }
`;

const TicketComp = ({ selectedCount, setSelectedCount, seatData, generateTableHtml, checkBoxData, onSelectedSeat, onCnt }) => {

  return (
    <Fullscreen>
      <ModalBlock>
        티켓 예매
        {/* <p>인원 : <input type="range" min='1' max='5' value={selectedCount} onChange={(e) => setSelectedCount(e.target.value)} /></p> */}
        <p>
          인원 :
          <select onChange={onCnt} value={selectedCount}>
            <option name='cnt'></option>
            <option name='cnt'>1</option>
            <option name='cnt'>2</option>
            <option name='cnt'>3</option>
            <option name='cnt'>4</option>
            <option name='cnt'>5</option>
          </select>
        </p>
        <p>좌석선택</p>
        {seatData.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`}>
            {row.map((item, colIndex) => (
              <button key={`col-${colIndex}`} onClick={onSelectedSeat} className="items">{item}</button>
            ))}
          </div>
        ))}
      </ModalBlock>
    </Fullscreen>
  );
};

export default TicketComp;
