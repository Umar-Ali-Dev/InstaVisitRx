"use client";

import React, { useMemo, useState, useEffect } from "react";
import DataTableComponent from "react-data-table-component";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import fileTextIcon from "../../assets/icons/fileText.svg";
import userDoctorIcon from "../../assets/icons/userDoctor.svg";
import userDoctorFillIcon from "../../assets/icons/userDoctorFill.svg";

export interface QueueRequest {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  provider: string;
  status: "Waiting provider" | "Waiting Response" | "Provider Respond" | "Completed" | "Resend Prescription" | "Prescription Sent" | "Prescription Failed";
}

interface DataTableProps {
  data?: QueueRequest[];
  searchText?: string;
}

// Sample data
const sampleData: QueueRequest[] = [
  {
    id: 1,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 2,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Provider Respond",
  },
  {
    id: 3,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Completed",
  },
  {
    id: 4,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 5,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Resend Prescription",
  },
  {
    id: 6,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Prescription Sent",
  },
  {
    id: 7,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 8,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Prescription Failed",
  },
  {
    id: 9,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Provider Respond",
  },
  {
    id: 10,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 11,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Completed",
  },
  {
    id: 12,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Prescription Sent",
  },
  {
    id: 13,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 14,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Resend Prescription",
  },
  {
    id: 15,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Provider Respond",
  },
  {
    id: 16,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 17,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Prescription Failed",
  },
  {
    id: 18,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Completed",
  },
  {
    id: 19,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 20,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Prescription Sent",
  },
];

// Generate more data for realistic pagination (995 total)
const generateMoreData = (): QueueRequest[] => {
  const statuses: QueueRequest["status"][] = [
    "Waiting provider",
    "Provider Respond",
    "Completed",
    "Resend Prescription",
    "Prescription Sent",
    "Prescription Failed",
    "Waiting Response",
  ];
  const providers = ["---", "Dr. Alina Star", "Dr. John Smith", "Dr. Sarah Johnson"];
  
  const additionalData: QueueRequest[] = [];
  for (let i = 21; i <= 995; i++) {
    additionalData.push({
      id: i,
      fullName: `Patient ${i}`,
      email: `patient${i}@gmail.com`,
      phone: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100} ${Math.floor(Math.random() * 9000) + 1000}`,
      provider: providers[Math.floor(Math.random() * providers.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  return [...sampleData, ...additionalData];
};

const defaultData = generateMoreData();

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
          className={`p-2 rounded ${
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <FaChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && onChangePage(page)}
              className={`px-3 py-1 rounded text-sm font-medium ${
                page === currentPage
                  ? "bg-[#705295] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => onChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <FaChevronRight size={16} />
        </button>
      </div>

      {/* Center: Item count */}
      <div className="text-sm text-gray-600">
        {startRow} - {endRow} of {totalRows}
      </div>

      {/* Right: Rows per page */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Rows per page:</span>
        <select
          value={rowsPerPage}
          onChange={(e) => onChangeRowsPerPage(Number(e.target.value))}
          className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#705295]"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
};

const DataTable: React.FC<DataTableProps> = ({ 
  data, 
  searchText = "" 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Use provided data or default sample data
  const tableData = data || defaultData;

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
      },
    },
    rows: {
      style: {
        borderBottom: "1px solid #e5e7eb",
        minHeight: "48px",
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
    <>
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
    </>
  );
};

export default DataTable;
