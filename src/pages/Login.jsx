

// "use client"

// import React, { useState } from "react"
// import { Eye, EyeOff } from "lucide-react"
// import { Link } from "react-router-dom"

// const Login = ({ onSwitchToSignup }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   })
//   const [showPassword, setShowPassword] = useState(false)

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   return (
//     <div className="min-h-screen flex font-sans text-base">
//       {/* Left Side Image */}
//       <div className="hidden lg:flex w-[50%] relative h-screen">
//         <img
//           src="/pic3.jpg"
//           alt="Team Collaboration"
//           className="w-full h-full object-cover"
//         />
//        {/* Fade Overlay */}
//   <div className="absolute inset-0 bg-black bg-opacity-50" />
// </div>

//       {/* Right Side Form */}
//       <div className="w-full lg:w-[50%] bg-white h-screen flex items-center justify-center px-6 relative overflow-hidden">
//         {/* Decorative Circles */}
//         <div className="absolute top-0 right-0 w-96 h-96 border border-blue-200 rounded-full opacity-20 transform translate-x-48 -translate-y-48" />
//         <div className="absolute bottom-0 right-0 w-64 h-64 border border-blue-200 rounded-full opacity-20 transform translate-x-32 translate-y-32" />

//         {/* Form Container */}
//         <div className="w-full max-w-[420px] mx-auto pt-16 text-left z-10">
//           {/* Logo and Title */}
//           <div className="flex items-center justify-center gap-1 mb-6  mt-[-20px]">
//   <img src="/image.png" alt="Gigfloww Logo" className="w-8 h-10 object-contain" />
//   <span className="text-[#3B5F7D] font-semibold text-xl tracking-wide font-poppins">GIGFLOWW</span>
// </div>


//          {/* Welcome Text */}
// <h1 className="text-2xl font-semibold text-black mb-1 text-center">
//   Welcome to Gigfloww
// </h1>
// <p className="text-sm text-gray-600 leading-snug mb-6 text-center">
//   Seamless HR operations start now!
//   <br />
//   Sign in
// </p>


//          {/* Form */}
// <form className="space-y-5">
//   <div>
//     <label className="block text-sm font-medium text-black mb-1">Name</label>
//     <input
//       type="text"
//       placeholder="Your Full Name"
//       value={formData.name}
//       onChange={(e) => handleInputChange("name", e.target.value)}
//       className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
//     />
//   </div>







//             {/* Work Email */}
//             <div>
//               <label className="block text-sm font-medium text-black mb-1">Work Email</label>
//               <input
//                 type="email"
//                 placeholder="Your Work Email Address"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange("email", e.target.value)}
//                 className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-black mb-1">Password</label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Your Password"
//                   value={formData.password}
//                   onChange={(e) => handleInputChange("password", e.target.value)}
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//             </div>

//              {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full py-3 rounded-md bg-gradient-to-r from-[#2784B8] to-[#113B52] text-white font-semibold hover:opacity-90 transition"
//             >
//               Sign in
//             </button>
//           </form>

//           {/* Footer Links */}
//           <p className="text-sm text-center text-gray-600 mt-6">
//             Not registered on Gigfloww?{" "}
//             <Link to="/SignUp" className="text-blue-600 hover:underline font-medium">
//                         SignUp
//                       </Link>

//           </p>



          






//           <p className="text-center text-sm text-gray-500 mt-3">
//             By clicking on Sign in, you agree to our{" "}
//             <span className="underline text-gray-600 cursor-pointer">Terms and Conditions</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login
















"use client"

import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const Login = ({ onSwitchToSignup }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Optional: Validate here
    // if (formData.email === "" || formData.password === "") return;

    // Redirect after login
    navigate("/app/Dashboard")
  }

  return (
    <div className="min-h-screen flex font-sans text-base">
      {/* Left Side Image */}
      <div className="hidden lg:flex w-[50%] relative h-screen">
        <img
          src="/pic3.jpg"
          alt="Team Collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-[50%] bg-white h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 border border-blue-200 rounded-full opacity-20 transform translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border border-blue-200 rounded-full opacity-20 transform translate-x-32 translate-y-32" />

        <div className="w-full max-w-[420px] mx-auto pt-16 text-left z-10">
          {/* Logo */}
          <div className="flex items-center justify-center gap-1 mb-6 mt-[-20px]">
            <img src="/image.png" alt="Gigfloww Logo" className="w-8 h-10 object-contain" />
            <span className="text-[#3B5F7D] font-semibold text-xl tracking-wide font-poppins">
              GIGFLOWW
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-semibold text-black mb-1 text-center">
            Welcome to Gigfloww
          </h1>
          <p className="text-sm text-gray-600 leading-snug mb-6 text-center">
            Seamless HR operations start now!
            <br />
            Sign in
          </p>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Work Email</label>
              <input
                type="email"
                placeholder="Your Work Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-gradient-to-r from-[#2784B8] to-[#113B52] text-white font-semibold hover:opacity-90 transition"
            >
              Sign in
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-center text-gray-600 mt-6">
            Not registered on Gigfloww?{" "}
            <Link to="/SignUp" className="text-blue-600 hover:underline font-medium">
              SignUp
            </Link>
          </p>

          <p className="text-center text-sm text-gray-500 mt-3">
            By clicking on Sign in, you agree to our{" "}
            <span className="underline text-gray-600 cursor-pointer">Terms and Conditions</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
