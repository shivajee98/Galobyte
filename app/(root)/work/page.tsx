"use client"

import React from 'react'
import dynamic from 'next/dynamic'
const  ProjectsShowcase = dynamic(() => import("@/components/projects-showcase"), { ssr: false })

const WorkPage = () => {
  return (
    <main className="pt-20">
        <ProjectsShowcase />
      </main>
  )
}

export default WorkPage
