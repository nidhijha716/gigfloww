"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const Hiring = () => {
  const [formData, setFormData] = useState({
    role: "",
    skills: "",
    experience: "",
    employmentType: "",
    workplaceType: "",
    stipend: "",
    openings: "",
    description: "",
    links: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const jobPostings = [
    {
      title: "UI Designer Intern (Remote)",
      company: "Article studio",
      location: "Bangalore, India",
      status: "Under applying",
      posted: "12/02/24",
      views: 24,
      applicants: 106,
    },
    {
      title: "UI Designer Intern (Remote)",
      company: "Article studio",
      location: "Bangalore, India",
      status: "Under applying",
      posted: "12/02/24",
      views: 24,
      applicants: 106,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Job Form */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Posting</h1>
            <p className="text-gray-600">Post Job for free. Add details for your job post</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Fill in Job Details</h2>

            <form className="space-y-6">
              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <input
                  type="text"
                  name="role"
                  placeholder="e.g UI/UX Designer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>

              {/* Skills Required */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Skill(s) Required</label>
                <div className="relative">
                  <input
                    type="text"
                    name="skills"
                    placeholder="Enter required skill(s)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    value={formData.skills}
                    onChange={handleChange}
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>

              {/* Years of Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience/Experience Level
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="experience"
                    placeholder="e.g 0-2 years"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>

              {/* Employment Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
                <div className="relative">
                  <input
                    type="text"
                    name="employmentType"
                    placeholder="e.g Full time"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    value={formData.employmentType}
                    onChange={handleChange}
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>

              {/* Workplace Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Workplace Type</label>
                <div className="relative">
                  <input
                    type="text"
                    name="workplaceType"
                    placeholder="e.g Hybrid"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    value={formData.workplaceType}
                    onChange={handleChange}
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>

              {/* Stipend */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Stipend</label>
                <div className="relative">
                  <input
                    type="text"
                    name="stipend"
                    placeholder="Enter the payment per month"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    value={formData.stipend}
                    onChange={handleChange}
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>

              {/* Number of Openings */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  No of Opening (if it is more than 1 one)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="openings"
                    placeholder="e.g 2"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    value={formData.openings}
                    onChange={handleChange}
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>

              {/* Job Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
                <textarea
                  name="description"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              {/* Relevant Links */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relevant Link(s)</label>
                <input
                  type="text"
                  name="links"
                  placeholder="Enter link"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.links}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Manage Posting */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Manage Posting</h3>
              <button className="text-blue-600 text-sm hover:text-blue-700">See all</button>
            </div>

            <div className="space-y-4">
              {jobPostings.map((job, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start mb-3">
                    <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold mr-3">
                      UI
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{job.title}</h4>
                      <p className="text-sm text-gray-600">{job.company}</p>
                      <p className="text-sm text-gray-600">{job.location}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                      {job.status} (posted {job.posted})
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{job.views}</div>
                      <div className="text-gray-600">Views</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{job.applicants}</div>
                      <div className="text-gray-600">Applicants</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Writing Assistant */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center mb-4">
              <div className="h-24 w-24 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-blue-600">
                  <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Use AI to write</h3>
              <p className="text-sm text-gray-600 mb-4">
                Write perfectly and flawless with AI. If you want help with job description and other fields, AI will
                support for you.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Write with AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hiring
