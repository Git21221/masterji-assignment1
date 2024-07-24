import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";

const DropdownPagination = ({
  onPageSizeChange,
  leftArrowClick,
  rightArrowClick,
  isPageFirst,
  isPageLast,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageSize, setPageSize] = useState(10);

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    onPageSizeChange(size);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-end mt-[23px] space-x-[25px]">
      <span className="text-gray-700">Rows per page</span>
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="inline-flex justify-between w-16 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {pageSize}
          {isOpen ? (
            <FaChevronUp className="ml-2 -mr-1 h-5 w-5" />
          ) : (
            <FaChevronDown className="ml-2 -mr-1 h-5 w-5" />
          )}
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-16 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {[3, 5, 10].map((size) => (
                <button
                  key={size}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => handlePageSizeChange(size)}
                  role="menuitem"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="arrow flex gap-[31px]">
        <LeftArrow
          color={isPageFirst ? "gray" : "black"}
          onClick={() => {
            if (!isPageFirst) {
              leftArrowClick();
            }
          }}
          className={isPageFirst ? "cursor-not-allowed" : "cursor-pointer"}
        />
        <RightArrow
          color={isPageLast ? "gray" : "black"}
          onClick={() => {
            if (!isPageLast) {
              rightArrowClick();
            }
          }}
          className={isPageLast ? "cursor-not-allowed" : "cursor-pointer"}
        />
      </div>
    </div>
  );
};

export default DropdownPagination;
