"use client"

import { useState } from "react"
import { Search, Filter, ChevronDown, Plus, Download } from "lucide-react"
import { Link } from "react-router-dom"

const People = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const employees = [
    {
      id: 1,
      name: "Alicia Shankur",
      email: "alicia.shankur@gmail.com",
      jobTitle: "Software Engineer",
      department: "Engineering",
      salary: "$2,500",
      startDate: "Mar 16, 2023",
      lifeCycle: "Hired",
      status: "Active",
    },
    {
      id: 2,
      name: "James Oyinkan",
      email: "jamesoyinkan@gmail.com",
      jobTitle: "Visual Designer",
      department: "Design",
      salary: "$2,000",
      startDate: "Jan 16, 2023",
      lifeCycle: "Hired",
      status: "Active",
    },
    {
      id: 3,
      name: "Diti Shreyas",
      email: "ditishreyas@gmail.com",
      jobTitle: "Visual Designer",
      department: "Design",
      salary: "$2,000",
      startDate: "Dec 09, 2024",
      lifeCycle: "Employed",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Ishita Bhatgnar",
      email: "ishitaagir7@gmail.com",
      jobTitle: "UI/UX Designer",
      department: "Design",
      salary: "$1,500",
      startDate: "Jan 09, 2024",
      lifeCycle: "Employed",
      status: "Active",
    },
    {
      id: 5,
      name: "Kito Ashuth",
      email: "asthutor@gmail.com",
      jobTitle: "Content Writer",
      department: "Content",
      salary: "$1,000",
      startDate: "Jan 09, 2024",
      lifeCycle: "Hired",
      status: "Active",
    },
    {
      id: 6,
      name: "Dario Berik",
      email: "darioberik@yahoo.com",
      jobTitle: "Sales Manager",
      department: "Operation",
      salary: "$4,000",
      startDate: "Feb 21, 2022",
      lifeCycle: "Hired",
      status: "Active",
    },
    {
      id: 7,
      name: "Aresen Vlamadir",
      email: "darioberik@yahoo.com",
      jobTitle: "Mobile Assitant",
      department: "Product",
      salary: "$3,000",
      startDate: "Aug 07, 2022",
      lifeCycle: "Employed",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Debby Philade",
      email: "debbythegreat@gmail.com",
      jobTitle: "Product Manager",
      department: "Product",
      salary: "$4,500",
      startDate: "Apr 02, 2022",
      lifeCycle: "Hired",
      status: "Active",
    },
  ]

  const getStatusBadge = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
      : "bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">List of people</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800">
            <Download className="h-5 w-5 mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="h-5 w-5 mr-2" />
            Add new member
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 min-w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Type
          <ChevronDown className="h-4 w-4 ml-2" />
        </button>
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Role
          <ChevronDown className="h-4 w-4 ml-2" />
        </button>
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="h-4 w-4 mr-2" />
          Advanced Filter
          <ChevronDown className="h-4 w-4 ml-2" />
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Salary
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Life Cycle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                        {getInitials(employee.name)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                        <div className="text-sm text-gray-500">{employee.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.jobTitle}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.salary}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.lifeCycle}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getStatusBadge(employee.status)}>{employee.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-end">
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700">
                  1
                </button>
                <button className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  4
                </button>
                <button className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default People
