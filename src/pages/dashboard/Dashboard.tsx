"use client";

import React from "react";
import Layout from "../../component/layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#0A1E25]">Welcome, Mr. Jhon</h2>
        
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
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-[#0A1E25]">Queue Requests</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Patient name"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#705295]"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#705295] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Full Name</th>
                  <th className="px-4 py-3 text-left font-semibold">Email</th>
                  <th className="px-4 py-3 text-left font-semibold">Phone</th>
                  <th className="px-4 py-3 text-left font-semibold">Provider</th>
                  <th className="px-4 py-3 text-left font-semibold">Status</th>
                  <th className="px-4 py-3 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 text-gray-700">Jospan Franklin</td>
                  <td className="px-4 py-3 text-gray-700">Jospan@gmail.com</td>
                  <td className="px-4 py-3 text-gray-700">(987) 876 8768</td>
                  <td className="px-4 py-3 text-gray-700">---</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                      Waiting provider
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">👥</button>
                      <button className="p-1 hover:bg-gray-100 rounded">📄</button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 text-gray-700">Jospan Franklin</td>
                  <td className="px-4 py-3 text-gray-700">Jospan@gmail.com</td>
                  <td className="px-4 py-3 text-gray-700">(987) 876 8768</td>
                  <td className="px-4 py-3 text-gray-700">Dr. Alina Star</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                      Waiting Response
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">👥</button>
                      <button className="p-1 hover:bg-gray-100 rounded">📄</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
