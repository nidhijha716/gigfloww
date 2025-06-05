// import { Link, useLocation } from "react-router-dom"
// import { Settings, Bell } from "lucide-react"

// const Navbar = () => {
//   const location = useLocation()

//   const navItems = [
//     { name: "Dashboard", path: "/dashboard" },
//     { name: "People", path: "/people" },
//     { name: "Hiring", path: "/hiring" },
//     { name: "Salary", path: "/salary" },
//     { name: "Reviews", path: "/reviews" },
//   ]

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0 flex items-center">
//               <div className="text-white font-bold text-xl">
//                 <span className="text-2xl">⚡</span> GIGFLOWW
//               </div>
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                     location.pathname === item.path
//                       ? "bg-white text-blue-600 shadow-md"
//                       : "text-white hover:bg-white/20"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Right side icons */}
//           <div className="flex items-center space-x-4">
//             <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
//               <Settings className="h-5 w-5" />
//             </button>
//             <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors relative">
//               <Bell className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
//                 3
//               </span>
//             </button>
//             <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
//               <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="h-8 w-8 rounded-full" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar















import { Link, useLocation } from "react-router-dom"
import { Settings, Bell } from "lucide-react"

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { name: "Dashboard", path: "/app/dashboard" },
    { name: "People", path: "/app/people" },
    { name: "Hiring", path: "/app/hiring" },
    { name: "Salary", path: "/app/salary" },
    { name: "Reviews", path: "/app/reviews" },
  ]

  return (
    <nav className="w-full px-4 py-3  flex justify-center bg-transparent">
      <div className="w-full max-w-6xl flex items-center justify-between px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-1000 ">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Gigfloww Logo" className="w-70 h-10" />
         
        </div>

        {/* Middle - Nav Items */}
        <div className="flex gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-white text-blue-500"
                  : "text-white hover:bg-white/30"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right - Icons & Avatar */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-white/30 hover:bg-white/40 transition">
            <Settings className="w-5 h-5 text-blue-800" />
          </button>

          <button className="relative p-2 rounded-full bg-white/30 hover:bg-white/40 transition">
            <Bell className="w-5 h-5 text-blue-800" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              4
            </span>
          </button>

          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

