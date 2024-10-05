import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Videos from './components/Videos'
import About from './components/About'
import Footer from './components/Footer'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <Hero />
          <Experience />
          <div className="container mx-auto px-4 py-8">
            <Projects />
            <Videos />
            <About />
          </div>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App