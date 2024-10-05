import React from 'react'
import { Star, GitFork } from 'lucide-react'

const projects = [
  {
    title: "typescript-tips",
    description: "A curated list of awesome 🔥 TypeScript Tips 🔥",
    stars: 401,
    forks: 89,
    link: "https://github.com/jellydn/typescript-tips"
  },
  {
    title: "dapp-starter",
    description: "Opinionated Dapp Starter Template provides a solid foundation for building Ethereum-based applications. It incorporates various tools and frameworks such as React, Next.js, Hardhat, TypeChain, web3.",
    stars: 326,
    forks: 77,
    link: "https://github.com/jellydn/dapp-starter"
  },
  {
    title: "next-swagger-doc",
    description: "This package reads your JSDoc-annotated source code on NextJS API route and generates an OpenAPI (Swagger) specification.",
    stars: 446,
    forks: 37,
    link: "https://github.com/jellydn/next-swagger-doc"
  },
  {
    title: "next-app-starter",
    description: "Another awesome starter for your app based on Next.js + Tailwind + React Query + Zod + React Hook Form + NextAuth + Jotai",
    stars: 244,
    forks: 30,
    link: "https://github.com/jellydn/next-app-starter"
  },
  {
    title: "hurl.nvim",
    description: "Hurl.nvim is a Neovim plugin designed to run HTTP requests directly from `.hurl` files. Elevate your API development workflow by executing and viewing responses without leaving your editor.",
    stars: 154,
    forks: 16,
    link: "https://github.com/jellydn/hurl.nvim"
  },
  {
    title: "CopilotChat.nvim",
    description: "Chat with GitHub Copilot in Neovim",
    stars: 1600,
    forks: 71,
    link: "https://github.com/CopilotC-Nvim/CopilotChat.nvim"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="my-16">
      <h2 className="text-3xl font-bold mb-4">Top Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4 text-gray-600">{project.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <span className="flex items-center">
                  <Star size={16} className="mr-1 text-yellow-400" />
                  {project.stars}
                </span>
                <span className="flex items-center">
                  <GitFork size={16} className="mr-1 text-gray-400" />
                  {project.forks}
                </span>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="https://github.com/jellydn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">
          View More On Github
        </a>
      </div>
    </section>
  )
}

export default Projects