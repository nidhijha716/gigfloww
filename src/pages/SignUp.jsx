
// "use client"

// import React, { useState } from "react"
// import { Eye, EyeOff } from "lucide-react"

// import { Link, useNavigate } from "react-router-dom"


// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

  
// const handleSubmit = (e) => {
//   e.preventDefault()
//   navigate("/app/login")
// }

//   return (
//     <div className="min-h-screen flex w-full bg-white">
//       {/* Left - Image Side */}
//       <div className="hidden lg:flex w-1/2 relative">
//         <img src="/img.jpg" alt="Team collaboration" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-black/10" />
//       </div>

//       {/* Right - Form Side */}
//       <div
//         className="w-full lg:w-1/2 flex items-center justify-center p-8"
//         style={{
//           background: "linear-gradient(135.3deg, #FBFBFB 18.61%, #185170 131.41%)",
//         }}
//       >
//         <div className="w-full max-w-md relative z-10">
//       {/* Logo + Heading */}
// <div className="text-center mb-8">
//   <div className="flex items-center justify-center gap-2 mb-4">
//     <img
//       src="/image.png"
//       alt="Gigfloww Logo"
//       className="w-10 h-10 object-contain"
//     />
//     <span className="text-2xl font-bold text-blue-400">GIGFLOWW</span>
//   </div>
//   <h1 className="text-2xl font-bold text-black">Welcome to Gigfloww</h1>
//   <h2 className="text-xl font-semibold text-black mt-2">Register</h2>
//   <p className="text-sm text-gray-600 leading-tight">
//     Seamless HR operations start now!
//     <br /> Sign up
//   </p>
// </div>

//           {/* Form */}
//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//               <input
//                 type="text"
//                 placeholder="Your full name"
//                 value={formData.name}
//                 onChange={(e) => handleInputChange("name", e.target.value)}
//                 className="w-full px-4 py-3 rounded-full border border-gray-300 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange("email", e.target.value)}
//                 className="w-full px-4 py-3 rounded-full border border-gray-300 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Your password"
//                   value={formData.password}
//                   onChange={(e) => handleInputChange("password", e.target.value)}
//                   className="w-full px-4 py-3 rounded-full border border-gray-300 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? <EyeOff /> : <Eye />}
//                 </button>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
//               <div className="relative">
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   placeholder="Re confirm your password"
//                   value={formData.confirmPassword}
//                   onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
//                   className="w-full px-4 py-3 rounded-full border border-gray-300 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showConfirmPassword ? <EyeOff /> : <Eye />}
//                 </button>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 bg-gradient-to-r from-[#2784B8] to-[#113B52] text-white font-semibold rounded-full hover:opacity-90 transition"
//             >
//               Register
//             </button>
//           </form>

//           {/* Footer & Login Redirect */}
//           <p className="text-sm text-gray-600 mt-4 text-center">
//             Already on Gigfloww?{" "}
//             <Link to="/login" className="text-blue-600 hover:underline font-medium">
//               Log in
//             </Link>
//           </p>

//           {/* Social Login Buttons */}
//           <div className="mt-6 flex justify-between gap-4">
//             <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-full bg-white shadow-sm text-sm text-gray-700 hover:bg-gray-50 transition-colors">
//               <img
//                 src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//                 alt="Google"
//                 className="w-5 h-5"
//               />
//               Register with Google
//             </button>
//             <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-full bg-white shadow-sm text-sm text-gray-700 hover:bg-gray-50 transition-colors">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
//                 alt="Apple"
//                 className="w-5 h-5"
//               />
//               Register with Apple
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Signup





















"use client"

import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const navigate = useNavigate()

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can validate or send data to backend here before redirecting
    navigate("/login")
  }

  return (
    <div className="min-h-screen flex w-full bg-white">
      {/* Left - Image Side */}
      <div className="hidden lg:flex w-1/2 relative">
        <img src="/img.jpg" alt="Team collaboration" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Right - Form Side */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center p-8"
        style={{
          background: "linear-gradient(135.3deg, #FBFBFB 18.61%, #185170 131.41%)",
        }}
      >
        <div className="w-full max-w-md relative z-10">
          {/* Logo + Heading */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img
                src="/image.png"
                alt="Gigfloww Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-blue-400">GIGFLOWW</span>
            </div>
            <h1 className="text-2xl font-bold text-black">Welcome to Gigfloww</h1>
            <h2 className="text-xl font-semibold text-black mt-2">Register</h2>
            <p className="text-sm text-gray-600 leading-tight">
              Seamless HR operations start now!
              <br /> Sign up
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full px-4 py-3 rounded-full border border-gray-300 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="w-full px-4 py-3 rounded-full border border-gray-300 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#2784B8] to-[#113B52] text-white font-semibold rounded-full hover:opacity-90 transition"
            >
              Register
            </button>
          </form>

          {/* Footer & Login Redirect */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            Already on Gigfloww?{" "}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Log in
            </Link>
          </p>

          {/* Social Login Buttons */}
          <div className="mt-6 flex justify-between gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-full bg-white shadow-sm text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Register with Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-full bg-white shadow-sm text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-5 h-5"
              />
              Register with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
