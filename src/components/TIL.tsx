import React from 'react'
import { ExternalLink } from 'lucide-react'

interface TILPost {
  id: number
  title: string
  date: string
  excerpt: string
  link: string
}

const tilPosts: TILPost[] = [
  {
    id: 43,
    title: "Delete all remote branches except main",
    date: "Jan 13, 2024",
    excerpt: "How to delete all remote branches except main",
    link: "https://blog.productsway.com/posts/delete-all-remote-branches-except-main"
  },
  {
    id: 42,
    title: "Cherry pick from pull request",
    date: "Oct 16, 2023",
    excerpt: "This is simple trick to cherry pick from pull request",
    link: "https://blog.productsway.com/posts/cherry-pick-from-pull-request"
  },
  {
    id: 41,
    title: "How to deploy old legacy documentation with MkDocs",
    date: "Jul 14, 2023",
    excerpt: "The motivation behind this is that sometimes, the homepage only displays the latest version of a document. For instance, typeorm.com only shows the latest version (e.g., TypeORM v0.3), making it hard to find previous versions.",
    link: "https://blog.productsway.com/posts/how-to-deploy-old-legacy-documentation-with-mkdocs"
  },
  {
    id: 40,
    title: "How to Set Up Folding in Neovim",
    date: "Apr 11, 2023",
    excerpt: "How to setup folding on Neovim, including support preview the fold",
    link: "https://blog.productsway.com/posts/how-to-set-up-folding-in-neovim"
  },
  // Add more TIL posts as needed
]

const TIL: React.FC = () => {
  return (
    <section id="til" className="my-16">
      <h2 className="text-3xl font-bold mb-4">Today I Learned (#TIL)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tilPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">#{post.id} - {post.title}</h3>
            <p className="text-gray-600 mb-2">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <a 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              Read more <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a 
          href="https://blog.productsway.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 inline-flex items-center"
        >
          Visit My Blog <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </section>
  )
}

export default TIL