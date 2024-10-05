import React from 'react'
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ProductsWay</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-blue-200">About</a></li>
            <li><a href="#projects" className="hover:text-blue-200">Projects</a></li>
            <li><a href="#til" className="hover:text-blue-200">TIL</a></li>
            <li><a href="#videos" className="hover:text-blue-200">Videos</a></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="https://github.com/jellydn" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/dung-huynh-duc" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
          <a href="https://twitter.com/jellydn" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
          <a href="https://www.youtube.com/c/ITManVietnam" target="_blank" rel="noopener noreferrer"><Youtube size={24} /></a>
        </div>
      </div>
    </header>
  )
}

export default Header