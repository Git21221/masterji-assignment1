import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { courseList as data } from "../../util/courseList";
import { height } from "@mui/system";
import "./CourseList.css";
import Pagination from "../../components/course-list/Pagination";
import Heading from "../../components/course-list/Heading";
import Search from "../../components/course-list/Search";

function CourseList() {
  const [rowData, setRowData] = useState(data);
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);

  const columnDefs = [
    {
      headerName: "Title",
      field: "title",
      cellRenderer: (params) => (
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <img
            src={params.data.image}
            alt={params.data.title}
            style={{
              width: 106,
              height: 60,
              borderRadius: 8,
              marginRight: 10,
              boxShadow: "1px 1px 1px 0px rgba(0, 0, 0, 0.25)",
            }} // Ensure image fits properly
          />
          {params.value}
        </div>
      ),
      flex: 3,
    },
    {
      headerName: "Start Date",
      field: "startDate",
      flex: 1,
      cellRenderer: (params) => (
        <span className="flex items-center h-full">{params.value}</span>
      ),
    },
    {
      headerName: "End Date",
      field: "endDate",
      flex: 1,
      cellRenderer: (params) => (
        <span className="flex items-center h-full">{params.value}</span>
      ),
    },
    {
      headerName: "Price",
      field: "price",
      flex: 1,
      cellRenderer: (params) => (
        <span className="flex items-center h-full">{params.value}</span>
      ),
    },
    {
      headerName: "Validity/Expiry",
      field: "validity",
      flex: 1.1,
      cellRenderer: (params) => (
        <span className="flex items-center h-full">{params.value}</span>
      ),
    },
    {
      headerName: "Status",
      field: "status",
      cellRenderer: (params) => (
        <div className="h-full flex items-center">
          <span
            className={`text-[#4B4747] text-[14px] font-medium leading-[16.94px] px-2 py-1 rounded ${
              params.value === "Published"
                ? "bg-[#DEFFDE] border border-[#4ED04B]"
                : "bg-[#F3F3F3] border border-[#A4A4A4]"
            }`}
          >
            {params.value}
          </span>
        </div>
      ),
      flex: 1,
    },
  ];

  useEffect(() => {
    setRowData(data.slice(0, pageSize));
  }, []);

  const changePageSize = (size) => {
    setPageSize(size);
    setPageIndex(0);
    setRowData(data.slice(0, size ? size : pageSize));
  };

  const gridOptions = {
    rowHeight: 100,
  };

  const leftArrowClick = () => {
    const newIndex = pageIndex - 1;
    if (newIndex < 0) return;
    setPageIndex(newIndex);
    setRowData(data.slice(newIndex * pageSize, (newIndex + 1) * pageSize));
  };

  const rightArrowClick = () => {
    const newIndex = pageIndex + 1;
    if (newIndex * pageSize >= data.length) return;
    setPageIndex(newIndex);
    setRowData(data.slice(newIndex * pageSize, (newIndex + 1) * pageSize));
  };

  return (
    <div className="max-w-[1223px] mx-auto rounded-[18px] shadow-[2px 2px 3px 0px rgba(0, 0, 0, 0.25)] bg-[#F9F7F7] px-[35px] py-[39px]">
      <Heading />
      <Search />
      <div className="ag-theme-alpine mt-[40px]  w-full h-[450px]">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          // domLayout="autoHeight"
          gridOptions={gridOptions} // Apply grid options
        />
      </div>
      <Pagination
        onPageSizeChange={changePageSize}
        leftArrowClick={leftArrowClick}
        rightArrowClick={rightArrowClick}
        isPageFirst={pageIndex === 0}
        isPageLast={pageSize * (pageIndex + 1) >= data.length}
      />
    </div>
  );
}

export default CourseList;
