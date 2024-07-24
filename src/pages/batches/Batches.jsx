import React, { useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { batches } from "../../util/batches";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineDragIndicator } from "react-icons/md";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Delete from "../../components/Delete";

const ItemType = "BATCH";

const DraggableBatch = ({
  batch,
  index,
  moveBatch,
  moveToTop,
  moveToBottom,
  deleteBatch,
}) => {
  const [optionOpen, setOptionOpen] = useState(false);
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveBatch(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { type: ItemType, id: batch.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="batch-card flex items-center justify-between px-5 py-[9px] rounded-lg max-w-[1025px]"
      style={{
        boxShadow: "1px 1px 8px 0px rgba(0, 0, 0, 0.25)",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <div className="batch-details flex items-center gap-4">
        <span>
          <MdOutlineDragIndicator className="text-[40px] text-[#7F7F7F]" />
        </span>
        <img
          className="batch-image w-[133px] h-[75px] rounded-lg"
          src={batch.imageUrl}
          alt={batch.name}
        />
        <span className="batch-description font-medium text-xl leading-[24.2px]">
          {batch.description}
        </span>
      </div>
      <div className="rightPart w-[226px] flex justify-between gap-5">
        <span className="batch-price text-lg leading-[21.78px] font-normal w-max text-left">
          {batch.price ? `Rs. ${batch.price}/-` : "Free"}
        </span>
        <div className="flex items-center gap-5">
          <span className="batch-tag bg-[#DBFFCE] border border-[#b4b4b4] rounded-[4px] text-sm w-[82px] text-center leading-[16.94px]">
            {batch.tag}
          </span>
          <span
            onClick={() => {
              setOptionOpen(!optionOpen);
            }}
          >
            <BsThreeDotsVertical className="text-xl text-black" />
            {optionOpen && (
              <Option
                optionOpen={optionOpen}
                setOptionOpen={setOptionOpen}
                moveToTop={() => moveToTop(index)}
                moveToBottom={() => moveToBottom(index)}
                deleteBatch={() => deleteBatch(index)}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

const Option = ({ optionOpen, setOptionOpen, moveToTop, moveToBottom, deleteBatch }) => {
  const optionRef = React.useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (optionRef.current && !optionRef.current.contains(e.target)) {
        setOptionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [optionOpen]);
  return (
    <div
      ref={optionRef}
      className="option absolute rounded-lg pt-5 pr-3 pb-5 pl-5 flex flex-col justify-center gap-4 bg-[#F7F7F7]"
      style={{ boxShadow: "1px 1px 8px 0px rgba(0,0,0,0.25)" }}
    >
      <span
        className="option-item flex items-center gap-2 leading-[19.36px] text-nowrap text-[16px] font-normal"
        onClick={() => {
          moveToTop();
        }}
      >
        <FaArrowUp />
        Move To Top
      </span>
      <span
        className="option-item flex items-center gap-2 leading-[19.36px] text-nowrap text-[16px] font-normal"
        onClick={() => {
          moveToBottom();
        }}
      >
        <FaArrowDown />
        Move To Bottom
      </span>
      <span className="option-item flex items-center gap-2 leading-[19.36px] text-nowrap text-red-500 text-[16px] font-normal" onClick={() => {
        deleteBatch();
      }}>
        <Delete />
        Remove
      </span>
    </div>
  );
};

function Batches() {
  const [batchItems, setBatchItems] = useState(batches);
  console.log(batchItems);

  const moveBatch = (fromIndex, toIndex) => {
    const updatedItems = [...batchItems];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setBatchItems(updatedItems);
  };

  const moveToTop = (index) => {
    moveBatch(index, 0);
  };

  const moveToBottom = (index) => {
    moveBatch(index, batchItems.length - 1);
  };

  const deleteBatch = (index) => {
    setBatchItems(batchItems.filter((_, i) => i !== index));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="bg-[#F9F7F7] max-h-[785px] max-w-[1223px] rounded-[18px] mx-auto"
        style={{ boxShadow: "2px 2px 3px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="px-[39px] py-[35px]">
          <div className="text flex flex-col gap-[10px]">
            <span className="font-bold text-[40px] leading-[48.41px]">
              Manage Bundle
            </span>
            <span className="font-normal text-[20px] leading-[24.2px] text-[#4B4747]">
              Change orders of the products based on priority
            </span>
          </div>
          <div className="batch flex flex-col gap-3 mt-[31px]">
            {batchItems.map((batch, index) => (
              <DraggableBatch
                key={batch.id}
                batch={batch}
                index={index}
                moveBatch={moveBatch}
                moveToTop={moveToTop}
                moveToBottom={moveToBottom}
                deleteBatch={deleteBatch}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default Batches;
