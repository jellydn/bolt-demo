import React from 'react'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    title: "Sr. Full Stack Software Engineer",
    company: "AirCarbon Pte. Ltd.",
    period: "Mar 2020 - Present",
    description: "Working on a carbon exchange platform using TypeScript and ReactJS. Responsible for full-stack development, microservices architecture, and cloud deployments."
  },
  {
    title: "Lead Frontend Engineer",
    company: "Zenport Inc.",
    period: "Sep 2018 - Feb 2020",
    description: "Led a team of front-end developers in building a core logistics platform in Tokyo. Managed project timelines, code reviews, and implemented agile practices."
  },
  {
    title: "Web Developer",
    company: "Zanroo",
    period: "Nov 2017 - Jun 2018",
    description: "Developed web applications using NodeJS, TypeScript, and ReactJS. Contributed to scalable solutions for marketing technologies."
  },
  {
    title: "Lead Engineer",
    company: "Global Cybersoft",
    period: "May 2014 - Jul 2015",
    description: "Led a team for website projects targeting the Japanese market. Responsible for project management, client communication, and technical leadership."
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-600 mr-2" size={24} />
                <h3 className="text-xl font-semibold">{exp.title}</h3>
              </div>
              <p className="text-gray-600 mb-2">{exp.company} | {exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience