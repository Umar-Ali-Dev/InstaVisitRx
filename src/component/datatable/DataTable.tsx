"use client";

import React, { useMemo, useState, useEffect } from "react";
import DataTableComponent from "react-data-table-component";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import fileTextIcon from "../../assets/icons/fileText.svg";
import userDoctorIcon from "../../assets/icons/userDoctor.svg";
import userDoctorFillIcon from "../../assets/icons/userDoctorFill.svg";
import { queueRequestsData, QueueRequest } from "../../data/queueRequestsData";

interface DataTableProps {
  data?: QueueRequest[];
  searchText?: string;
}

// Custom Pagination Component
const CustomPagination = ({ 
  currentPage, 
  totalPages, 
  totalRows, 
  rowsPerPage, 
  onChangePage, 
  onChangeRowsPerPage 
}: {
  currentPage: number;
  totalPages: number;
  totalRows: number;
  rowsPerPage: number;
  onChangePage: (page: number) => void;
  onChangeRowsPerPage: (rows: number) => void;
}) => {
  const startRow = (currentPage - 1) * rowsPerPage + 1;
  const endRow = Math.min(currentPage * rowsPerPage, totalRows);

  // Generate page numbers (show up to 8 pages)
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPages = 8;
    
    if (totalPages <= maxPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= maxPages; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 3) {
        for (let i = totalPages - maxPages + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 3; i <= currentPage + 4; i++) {
          pages.push(i);
        }
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-between mt-4 pt-4">
      {/* Left: Navigation arrows and page numbers */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 ${
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-400 hover:bg-gray-50"
          }`}
        >
          <FaArrowLeft size={14} />
        </button>

        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && onChangePage(page)}
              className={`px-3 py-1.5 rounded text-sm font-medium ${
                page === currentPage
                  ? "bg-[#705295] text-white"
                  : "text-[#271100]"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => onChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-900 hover:bg-gray-50"
          }`}
        >
          <FaArrowRight size={14} />
        </button>
      </div>

      {/* Center: Item count */}
      <div className="text-sm text-[#958070]">
        {startRow} - {endRow} of {totalRows}
      </div>

      {/* Right: Rows per page */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#958070]">Rows per page</span>
        <div className="relative">
          <select
            value={rowsPerPage}
            onChange={(e) => onChangeRowsPerPage(Number(e.target.value))}
            className="px-3 py-1.5 pr-8 bg-white border border-gray-300 rounded text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#705295] appearance-none cursor-pointer"
          >
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const DataTable: React.FC<DataTableProps> = ({ 
  data, 
  searchText = "" 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  // Use provided data or default sample data
  const tableData = data || queueRequestsData;

  // Filter data based on search
  const filteredData = useMemo(() => {
    if (!searchText) return tableData;
    return tableData.filter((item) =>
      item.fullName.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [tableData, searchText]);

  // Calculate pagination
  const totalRows = filteredData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredData.slice(start, end);
  }, [filteredData, currentPage, rowsPerPage]);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  // Define columns
  const columns = [
    {
      name: "Full Name",
      selector: (row: QueueRequest) => row.fullName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: QueueRequest) => row.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row: QueueRequest) => row.phone,
      sortable: true,
    },
    {
      name: "Provider",
      selector: (row: QueueRequest) => row.provider,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row: QueueRequest) => {
        const getStatusStyle = (status: string) => {
          switch (status) {
            case "Waiting provider":
              return "text-orange-600";
            case "Provider Respond":
              return "text-blue-600";
            case "Completed":
              return "text-green-600";
            case "Resend Prescription":
              return "text-orange-700";
            case "Prescription Sent":
              return "text-purple-600";
            case "Failed":
              return "text-red-600";
            case "Response":
              return "text-yellow-600";
            default:
              return "text-gray-600";
          }
        };
        return (
          <span className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(row.status)}`}>
            {row.status}
          </span>
        );
      },
      sortable: true,
    },
    {
      name: "Action",
      cell: (row: QueueRequest) => (
        <div className="flex gap-2">
          <button 
            className="p-1 hover:bg-gray-100 rounded"
          >
            <img 
              src={row.status === "Waiting provider" ? userDoctorFillIcon : userDoctorIcon} 
              alt="User Doctor" 
              className="w-4 h-4"
            />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <img 
              src={fileTextIcon} 
              alt="File Text" 
              className="w-4 h-4"
            />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  // Custom styles for the table
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#705295",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "600",
        minHeight: "48px",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "16px",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "600",
      },
    },
    cells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "16px",
        color: "#374151",
        fontSize: "14px",
        backgroundColor: "#FFFAF7",
      },
    },
    rows: {
      style: {
        borderBottom: "1px solid #e5e7eb",
        minHeight: "48px",
        backgroundColor: "#FFFAF7",
        "&:hover": {
          backgroundColor: "#f9fafb",
        },
      },
    },
    pagination: {
      style: {
        borderTop: "1px solid #e5e7eb",
        paddingTop: "12px",
      },
    },
  };

  return (
    <div className="bg-[#FFFAF7] rounded-lg overflow-hidden">
      <DataTableComponent
        columns={columns}
        data={paginatedData}
        customStyles={customStyles}
        pagination={false}
        highlightOnHover
        pointerOnHover
        noDataComponent="No queue requests found"
      />

      {/* Custom Pagination */}
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalRows={totalRows}
        rowsPerPage={rowsPerPage}
        onChangePage={setCurrentPage}
        onChangeRowsPerPage={(rows) => {
          setRowsPerPage(rows);
          setCurrentPage(1);
        }}
      />
    </div>
  );
};

export default DataTable;
