import React from 'react'

function SectionThree() {
  return (
    <footer className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">&copy; 2025 MORI. All rights reserved.</p>
      <div className="flex space-x-4 mt-4 sm:mt-0">
        <a href="/terms" className="text-sm hover:text-gray-400">Terms of Service</a>
        <a href="/privacy" className="text-sm hover:text-gray-400">Privacy Policy</a>
        <a href="https://twitter.com/hulylabs" className="text-sm hover:text-gray-400">Twitter</a>
        <a href="https://www.linkedin.com/company/huly-labs" className="text-sm hover:text-gray-400">LinkedIn</a>
        <a href="https://github.com/hulylabs" className="text-sm hover:text-gray-400">GitHub</a>
        <a href="https://dribbble.com/hulylabs" className="text-sm hover:text-gray-400">Dribbble</a>
      </div>
    </div>
  </footer>
  )
}

export default SectionThree