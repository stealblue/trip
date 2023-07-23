import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { css, styled } from "styled-components";
import { changeProcedure } from "../../modules/schedule/ScheduleMod";
import { useDispatch } from "react-redux";

const StyledRight = styled.div`
  background: red;
  zindex: 0;

  ${(props) =>
    props.somedragging &&
    css`
      opacity: 0.5;
      zindex: 30;
    `}
`;
const StyledLeft = styled.div`
  background: yellow;
  zindex: 0;

  ${(props) =>
    props.somedragging &&
    css`
      opacity: 0.5;
      zindex: 30;
    `}
`;

const WishComp = ({
  id,
  index,
  userId,
  scheduleList,
  someDragging,
  setSomeDragging,
}) => {
  const [order, setOrder] = useState(scheduleList);
  const dispatch = useDispatch();

  const ItemTypes = {
    WISH: "wish",
  };

  const moveWish = (wishId, toIndex) => {
    const index = order.indexOf(wishId);
    let newOrder = [...order];
    newOrder.splice(index, 1);
    newOrder.splice(toIndex, 0, wishId);
    setOrder(newOrder);
    console.log(wishId, toIndex); /////////
    console.log("order: ", newOrder); ///////////
  };

  const [{ isDragging }, dragRef, previewRef] = useDrag(
    () => ({
      type: ItemTypes.WISH,
      item: { id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: originId, index: originIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveWish(originId, originIndex);
        }
      },
    }),
    [id, index, moveWish]
  );

  const [, dropLeft] = useDrop(
    () => ({
      accept: ItemTypes.WISH,
      canDrop: () => false,
      hover({ id: draggedId, index: orgIndex }) {
        if (draggedId !== id) {
          moveWish(draggedId, index);
        }
      },
    }),
    [moveWish]
  );

  const [, dropRight] = useDrop(
    () => ({
      accept: ItemTypes.WISH,
      canDrop: () => false,
      hover({ id: draggedId, index: orgIndex }) {
        if (draggedId !== id) {
          orgIndex !== index + 1 && moveWish(draggedId, index + 1);
        }
      },
    }),
    [moveWish]
  );

  useEffect(() => {
    isDragging ? setSomeDragging(true) : setSomeDragging(false);
  }, [isDragging, setSomeDragging]);

  useEffect(() => {
    // if (!isDragging && userId && order) {
    // dispatch(
    //   changeProcedure({
    //     id: userId,
    //     scheduleList: order,
    //   })
    // );
    // }
  }, [isDragging]);

  return (
    <div ref={previewRef} style={{ opacity: isDragging ? "0.3" : "1" }}>
      <>
        <div
          ref={dragRef}
          title="다른 카드 옆으로 드래그해서 위치를 변경합니다."
        >
          {id}
        </div>
        {/* <div className={styles.imgs} /> */}
        <StyledLeft
          ref={dropLeft}
          // somedragging
          // className={`${styles.drop} ${styles.left}`}
          // style={{ zIndex: someDragging ? 30 : 0 }}
        ></StyledLeft>
        <StyledRight
          ref={dropRight}
          // somedragging
          // className={`${styles.drop} ${styles.right}`}
          // style={{ zIndex: someDragging ? 30 : 0 }}
        ></StyledRight>
      </>
    </div>
  );
};

export default WishComp;
