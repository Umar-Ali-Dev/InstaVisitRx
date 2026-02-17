"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../../component/layout/Layout";
import DataTable from "../../component/datatable/DataTable";
import Heading from "../../component/ui/headings/Heading";
import InputField from "../../component/ui/inputs/InputField";
import searchIcon from "../../assets/icons/search.svg";

const Dashboard = () => {
  const searchForm = useForm({
    defaultValues: {
      search: "",
    },
  });

  // Watch the search field and sync with DataTable
  const searchText = searchForm.watch("search") || "";

  return (
    <Layout>
      <div className="space-y-6">
        <Heading 
          title="Welcome, Mr. Jhon" 
          textSize = "text-[22px]"
        />
        
        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Requests Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="w-12 h-12 bg-[#705295] rounded-lg flex items-center justify-center mb-3">
                  <span className="text-white text-xl">📄</span>
                </div>
                <p className="text-3xl font-bold text-[#0A1E25]">18</p>
                <p className="text-sm text-gray-600 mt-1">Total Requests</p>
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded"></div>
            </div>
          </div>

          {/* In Queue Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="w-12 h-12 bg-[#705295] rounded-lg flex items-center justify-center mb-3">
                  <span className="text-white text-xl">⏰</span>
                </div>
                <p className="text-3xl font-bold text-[#0A1E25]">12</p>
                <p className="text-sm text-gray-600 mt-1">In Queue</p>
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded"></div>
            </div>
          </div>

          {/* Completed Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="w-12 h-12 bg-[#705295] rounded-lg flex items-center justify-center mb-3">
                  <span className="text-white text-xl">❤️</span>
                </div>
                <p className="text-3xl font-bold text-[#0A1E25]">6</p>
                <p className="text-sm text-gray-600 mt-1">Completed</p>
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded"></div>
            </div>
          </div>

          {/* Total Income Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="w-12 h-12 bg-[#705295] rounded-lg flex items-center justify-center mb-3">
                  <span className="text-white text-xl">💰</span>
                </div>
                <p className="text-3xl font-bold text-[#0A1E25]">1,823</p>
                <p className="text-sm text-gray-600 mt-1">Total income</p>
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>

        {/* Queue Requests Section */}
        <div className="bg-[#FFFAF7] rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Heading 
              title="Queue Requests" 
              textSize = "text-[20px]"
            />
            <div className="relative w-auto min-w-[250px]">
              <div className="relative">
                <InputField
                  label=""
                  name="search"
                  type="text"
                  control={searchForm.control}
                  placeholder="Patient name"
                  className="!pt-0 [&_input]:pl-10"
                  hideStar
                />
                <div className="absolute left-4 top-[24px] pointer-events-none">
                  <img 
                    src={searchIcon} 
                    alt="Search" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* DataTable */}
          <DataTable searchText={searchText} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
