import { FaSearch, FaBriefcase, FaUsers, FaChartLine, FaShieldAlt } from 'react-icons/fa'
import JobCard from '@/components/JobCard'
import StatsSection from '@/components/StatsSection'

export default function Home() {
  const featuredJobs = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      salary: '$120,000 - $150,000',
      type: 'Full-time',
      posted: '2 days ago',
    },
    {
      title: 'Product Manager',
      company: 'Innovate Solutions',
      location: 'New York, NY',
      salary: '$130,000 - $160,000',
      type: 'Full-time',
      posted: '3 days ago',
    },
    {
      title: 'Data Scientist',
      company: 'DataWorks LLC',
      location: 'San Francisco, CA',
      salary: '$140,000 - $170,000',
      type: 'Full-time',
      posted: '1 week ago',
    },
    {
      title: 'UX Designer',
      company: 'Creative Minds',
      location: 'Austin, TX',
      salary: '$90,000 - $120,000',
      type: 'Contract',
      posted: '4 days ago',
    },
  ]

  const services = [
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      title: 'Permanent Recruitment',
      description: 'End-to-end permanent hiring solutions for all levels.',
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: 'Contract Staffing',
      description: 'Flexible contract staffing for project-based needs.',
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: 'Executive Search',
      description: 'C-level and senior executive recruitment services.',
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'HR Consulting',
      description: 'Comprehensive HR and talent management consulting.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-blue-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your <span className="text-primary-600">Dream</span> Job or
            <span className="text-primary-600"> Perfect</span> Candidate
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            We connect top talent with leading companies. Start your journey today.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-2">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1">
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    className="w-full pl-12 pr-4 py-4 border-0 focus:ring-2 focus:ring-primary-500 rounded-xl"
                  />
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  className="w-full px-4 py-4 border-0 focus:ring-2 focus:ring-primary-500 rounded-xl"
                />
              </div>
              <button className="btn-primary py-4 px-8 text-lg rounded-xl">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Jobs */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
            <p className="text-gray-600">Discover opportunities from top companies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredJobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="/jobs" className="btn-secondary">
              View All Jobs
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600">Comprehensive recruitment solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career or Team?</h2>
          <p className="text-xl mb-10 text-primary-100 max-w-2xl mx-auto">
            Join thousands of successful placements and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register-candidate" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
              Find a Job
            </a>
            <a href="/register-employer" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10">
              Hire Talent
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
