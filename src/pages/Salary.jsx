"use client"

import { useState } from "react"
import { Search, Filter, ChevronDown, ArrowRight } from "lucide-react"

const Salary = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null)

  const salaryData = [
    {
      id: 1,
      name: "Alicia Shankur",
      email: "alicia.shankur@gmail.com",
      jobTitle: "Software Engineer",
      department: "Engineering",
      netSalary: "$2,500",
      status: "Paid",
    },
    {
      id: 2,
      name: "James Oyinkan",
      email: "jamesoyinkan@gmail.com",
      jobTitle: "Visual Designer",
      department: "Design",
      netSalary: "$2,100",
      status: "Paid",
    },
    {
      id: 3,
      name: "Aresen Vlamadir",
      email: "darioberik@yahoo.com",
      jobTitle: "Sales Manager",
      department: "Product",
      netSalary: "$4,700",
      status: "Pending",
    },
    {
      id: 4,
      name: "Kito Ashuth",
      email: "asthutor@gmail.com",
      jobTitle: "Content Writer",
      department: "Content",
      netSalary: "$2,000",
      status: "Paid",
    },
    {
      id: 5,
      name: "Diti Shreyas",
      email: "ditishreyas@gmail.com",
      jobTitle: "Backend Engineer",
      department: "Engineering",
      netSalary: "$2,500",
      status: "Paid",
    },
    {
      id: 6,
      name: "Alicia Shankur",
      email: "alicia.shankur@gmail.com",
      jobTitle: "Product Manager",
      department: "Product",
      netSalary: "$4,00",
      status: "Pending",
    },
    {
      id: 7,
      name: "Dario Berik",
      email: "darioberik@yahoo.com",
      jobTitle: "Software Engineer",
      department: "Engineering",
      netSalary: "$1,900",
      status: "Paid",
    },
  ]

  const employeeDetails = {
    name: "Elizabeth James",
    position: "UI lead",
    department: "Design",
    status: "Active",
    basicSalary: "$3500",
    bonusOvertime: "$500",
    deduction: "$0.00",
    nextSalary: "$3500",
    bankDetails: "234567890",
    bankName: "Polaris Bank",
    currency: "$USD",
  }

  const getStatusBadge = (status) => {
    return status === "Paid"
      ? "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
      : "bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Salary Table */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Salary Activities</h1>
            <div className="flex items-center">
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>May 2025</option>
                <option>April 2025</option>
                <option>March 2025</option>
              </select>
              <ChevronDown className="h-4 w-4 ml-2 text-gray-400" />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>

          {/* Monthly Salary Display */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-medium text-gray-900">Monthly Salary -</span>
            <span className="text-2xl font-bold text-gray-900">$3500</span>
          </div>

          {/* Salary Table */}
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Job Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Net Salary
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {salaryData.map((employee) => (
                    <tr
                      key={employee.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedEmployee(employee)}
                    >
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.netSalary}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={getStatusBadge(employee.status)}>{employee.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column - Employee Details */}
        <div className="bg-white rounded-lg shadow-sm border p-6 h-fit">
          <div className="text-center mb-6">
            <div className="h-24 w-24 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <img
                src="/placeholder.svg?height=96&width=96"
                alt="Employee"
                className="h-20 w-20 rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{employeeDetails.name}</h3>
            <p className="text-gray-600">{employeeDetails.position}</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Position</span>
              <span className="font-medium text-gray-900">{employeeDetails.position}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Department</span>
              <span className="font-medium text-gray-900">{employeeDetails.department}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status</span>
              <span className="font-medium text-gray-900">{employeeDetails.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Basic Salary</span>
              <span className="font-medium text-gray-900">{employeeDetails.basicSalary}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Bonus & Overtime</span>
              <span className="font-medium text-gray-900">{employeeDetails.bonusOvertime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Deduction</span>
              <span className="font-medium text-gray-900">{employeeDetails.deduction}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Next Salary</span>
              <span className="font-medium text-gray-900">{employeeDetails.nextSalary}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Bank Details</span>
              <div className="text-right">
                <div className="font-medium text-gray-900">{employeeDetails.bankDetails}</div>
                <div className="text-sm text-gray-600">{employeeDetails.bankName}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Currency</span>
              <span className="font-medium text-gray-900">{employeeDetails.currency}</span>
            </div>
          </div>

          <button className="w-full mt-6 flex items-center justify-center text-blue-600 hover:text-blue-700">
            View Payroll History
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Salary
