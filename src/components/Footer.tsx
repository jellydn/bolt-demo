import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Dung Huynh Duc. All rights reserved.</p>
        <p className="mt-2">
          Built with React, Vite, and Tailwind CSS | 
          <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-400 hover:text-blue-300">
            View Source
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer