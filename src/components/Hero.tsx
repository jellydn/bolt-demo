import React from 'react'
import { Code, Globe, Coffee, Linkedin, Mail, Youtube, Github, Award } from 'lucide-react'

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Huynh Duc Dung</h1>
        <h2 className="text-3xl mb-8">Senior Full Stack Software Engineer</h2>
        
        <div className="max-w-3xl mx-auto mb-12 text-lg">
          <p>
            With over a decade of experience leading teams across Asia, I specialize in full-stack development,
            microservices architecture, and cloud deployments. Passionate about learning in public and contributing to open-source projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center">
            <Code size={48} className="mb-2" />
            <h3 className="text-xl font-semibold mb-2">Full Stack Dev</h3>
            <p>TypeScript, ReactJS, NodeJS</p>
          </div>
          <div className="flex flex-col items-center">
            <Globe size={48} className="mb-2" />
            <h3 className="text-xl font-semibold mb-2">Cloud & Microservices</h3>
            <p>Scalable architecture</p>
          </div>
          <div className="flex flex-col items-center">
            <Coffee size={48} className="mb-2" />
            <h3 className="text-xl font-semibold mb-2">Open Source</h3>
            <p>Active contributor</p>
          </div>
          <div className="flex flex-col items-center">
            <Award size={48} className="mb-2" />
            <h3 className="text-xl font-semibold mb-2">Top Rated</h3>
            <p>Upwork developer</p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/jellydn" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300">
            <Github className="inline-block mr-2" size={20} />
            GitHub
          </a>
          <a href="https://www.youtube.com/c/ITManVietnam" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300">
            <Youtube className="inline-block mr-2" size={20} />
            IT Man Channel
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero