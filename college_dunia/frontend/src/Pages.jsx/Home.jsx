import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import CourseSearchBar from '../Components/CourseSearchBar'

const Home = () => {
  return (
    <div style={{position:'relative'}}>
        <Navbar />
        <Carousel />
        <CourseSearchBar />
    </div>
  )
}

export default Home