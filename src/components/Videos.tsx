import React from 'react'

const videos = [
  {
    title: "IT Man - Tech #9 - Blockchain - DApp 101 - How to get started [Vietnamese]",
    description: "How to get started with blockchain development",
    date: "Aug 15, 2021",
    link: "https://www.youtube.com/watch?v=LXRgV99S0Zk",
    thumbnail: "https://i.ytimg.com/vi/LXRgV99S0Zk/mqdefault.jpg"
  },
  {
    title: "IT Man - Talk #33 NeoVim as IDE [Vietnamese]",
    description: "Using NeoVim as an IDE",
    date: "Mar 12, 2023",
    link: "https://www.youtube.com/watch?v=dFi8CzvqkNE",
    thumbnail: "https://i.ytimg.com/vi/dFi8CzvqkNE/mqdefault.jpg"
  },
  {
    title: "ITMan - Tech #17 - Moleculer - Progressive microservices framework for Node.js [Vietnamese]",
    description: "Introduction to Moleculer framework",
    date: "Mar 27, 2022",
    link: "https://www.youtube.com/watch?v=peb2OflRu-4",
    thumbnail: "https://i.ytimg.com/vi/peb2OflRu-4/mqdefault.jpg"
  },
  {
    title: "IT Man - Tech #38 - Setting Up Your Own Free GPT-4 API with gpt4free-ts [Vietnamese]",
    description: "Setting up a free GPT-4 API",
    date: "Jun 11, 2023",
    link: "https://www.youtube.com/watch?v=Z0ZUdFqvR_I",
    thumbnail: "https://i.ytimg.com/vi/Z0ZUdFqvR_I/mqdefault.jpg"
  }
]

const Videos = () => {
  return (
    <section id="videos" className="my-16">
      <h2 className="text-3xl font-bold mb-4">Most Viewed Videos</h2>
      <p className="mb-6">Check out some of my most popular videos on IT Man Channel.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-600 mb-2">{video.date}</p>
              <p className="mb-4">{video.description}</p>
              <a href={video.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="https://www.youtube.com/c/ITManVietnam" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
          Visit IT Man Channel
        </a>
      </div>
    </section>
  )
}

export default Videos