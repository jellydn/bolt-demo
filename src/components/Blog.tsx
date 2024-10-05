import React from 'react'

const blogPosts = [
  {
    title: "Learning in Public: My Journey as a Developer",
    date: "2023-03-15",
    excerpt: "In this post, I share my experiences and insights on the benefits of learning in public...",
    link: "/blog/learning-in-public"
  },
  {
    title: "5 Open Source Projects Every Developer Should Contribute To",
    date: "2023-02-28",
    excerpt: "Discover five impactful open source projects that can help you grow as a developer...",
    link: "/blog/open-source-projects"
  },
  // Add more blog posts as needed
]

const Blog = () => {
  return (
    <section id="blog" className="my-16">
      <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-2">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <a href={post.link} className="text-blue-600 hover:text-blue-800">
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog