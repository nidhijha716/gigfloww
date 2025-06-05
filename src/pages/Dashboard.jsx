


import {
  Calendar,
  Users,
  Briefcase,
  FolderOpen,
  ArrowRight,
  Filter,
} from "lucide-react"

const Dashboard = () => {
  const stats = [
    {
      title: "Employees",
      value: "24",
      icon: Users,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Hiring",
      value: "5",
      icon: Briefcase,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Projects",
      value: "1",
      icon: FolderOpen,
      color: "bg-green-100 text-green-600",
    },
  ]

  const upcomingActions = [
    {
      time: "03:30 pm",
      type: "Internal Meeting",
      title: "Internal Meeting with Jade Sapphire- UI designer",
    },
    {
      time: "05:00 pm",
      type: "Internal Meeting",
      title: "Internal Meeting with Content team",
    },
    {
      time: "07:00 pm",
      type: "Interview",
      title: "Interview with Achuyut - UI intern",
    },
    {
      time: "05:00 pm",
      type: "Internal Meeting",
      title: "Internal Meeting with Content team",
    },
    {
      time: "05:00 pm",
      type: "Internal Meeting",
      title: "Internal Meeting with Content team",
    },
  ]

  const applications = [
    {
      name: "Elizabeth Filade",
      experience: "3 years in Software Development",
      company: "Tucker Inc",
      period: "12 Dec 2024 - 10 May 2025",
    },
    {
      name: "Andre Suares",
      experience: "3 years in Software Development",
      company: "Tucker Inc",
      period: "12 Dec 2024 - 10 May 2025",
    },
    {
      name: "Ishita Ashuth",
      experience: "3 years in Software Development",
      company: "Tucker Inc",
      period: "12 Dec 2024 - 10 May 2025",
    },
    {
      name: "Ishita Ashuth",
      experience: "3 years in Software Development",
      company: "Tucker Inc",
      period: "12 Dec 2024 - 10 May 2025",
    },
  ]

  return (
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4">

      {/* Header Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex items-center">
        <div className="bg-blue-600 rounded-full p-2 mr-4">
          <span className="text-white text-sm">⚡</span>
        </div>
        <p className="text-blue-800">
          Optimize your experience on Gigfloww- track your job post, manage teams and
          streamline hr operations effortlessly today!
        </p>
      </div>

      {/* Welcome Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back, Nuraj group</h1>
        <div className="flex items-center text-gray-600">
          <Calendar className="h-5 w-5 mr-2" />
          <span>Wed 23, May 2025</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <button className="flex items-center text-blue-600 text-sm mt-4 hover:text-blue-700">
                  View Details <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>

          {/* Performance Report */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Performance Report</h2>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
            <div className="h-64 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-end justify-center relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-400 to-blue-300 opacity-60 rounded-lg"></div>
              <div className="absolute bottom-0 left-1/4 right-1/4 h-24 bg-gradient-to-t from-blue-500 to-blue-400 opacity-60 rounded-lg"></div>
              <div className="absolute bottom-0 left-1/2 right-1/3 h-40 bg-gradient-to-t from-blue-600 to-blue-500 opacity-60 rounded-lg"></div>
              <div className="relative z-10 flex justify-between w-full px-4 pb-4 text-xs text-gray-600">
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
                <span>Saturday</span>
                <span>Sunday</span>
              </div>
            </div>
          </div>

          {/* Incoming Applications */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Incoming Application</h2>
                <p className="text-gray-600 text-sm">
                  Manage application for your job posting
                </p>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                  See all
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold mr-3">
                      {app.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{app.name}</h3>
                      <p className="text-sm text-gray-600">{app.experience}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    <p>
                      <strong>Latest Experience</strong>
                    </p>
                    <div className="flex items-center mt-1">
                      <div className="h-6 w-6 bg-red-500 rounded mr-2"></div>
                      <span>{app.company}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{app.period}</p>
                  </div>
                  <button className="flex items-center text-blue-600 text-sm hover:text-blue-700">
                    View Resume <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Upcoming Actions */}
        <div className="bg-white rounded-lg shadow-sm border p-6 h-fit">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Actions</h2>
          <div className="space-y-4">
            {upcomingActions.map((action, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-semibold text-gray-900">{action.time}</span>
                  <span className="text-xs text-gray-500">{action.type}</span>
                </div>
                <p className="text-sm text-gray-600">{action.title}</p>
                <span className="text-xs text-gray-400">05:30 pm</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
