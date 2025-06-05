// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
// import Login from "./pages/Login"
// import SignUp from "./pages/SignUp"
// import Dashboard from "./pages/Dashboard"
// import People from "./pages/People"
// import Hiring from "./pages/Hiring"
// import Salary from "./pages/Salary"
// import Layout from "./components/Layout"

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Navigate to="/dashboard" replace />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="people" element={<People />} />
//           <Route path="hiring" element={<Hiring />} />
//           <Route path="salary" element={<Salary />} />
//         </Route>
//       </Routes>
//     </Router>
//   )
// }

// export default App








import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import People from "./pages/People"
import Hiring from "./pages/Hiring"
import Salary from "./pages/Salary"
import Layout from "./components/Layout"

function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Redirect root to SIGNUP */}
        <Route path="/" element={<Navigate to="/signup" replace />} />

        {/* 👇 Auth Pages */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* 👇 Dashboard Layout with nested routes */}
        <Route path="/app" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="people" element={<People />} />
          <Route path="hiring" element={<Hiring />} />
          <Route path="salary" element={<Salary />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

