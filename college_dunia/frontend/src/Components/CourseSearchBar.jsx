import React from 'react'
import { BiSearch } from "react-icons/bi";
import '../Styles/coursesearch.css'
import { Link } from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom'

const CourseSearchBar = () => {
    const navigate=useNavigate()
    const handleNavigate=(props)=>{
        if(props=="clicked") navigate("/register")
    }
  return (
    <div className='courses'>
        <h2 className='searchColleges'>Search BBA/BBM Colleges, Courses and Exams</h2>
        <div className='searchInputDiv'>
            <BiSearch className='searchIcon'/>
            <input className='searchInput' type="text" placeholder='Seach for colleges, exams, courses and many more..' />
            <button className='searchButton'>Search</button>
        </div>
        <div className='recentVisitparentDiv'>
            <div className='recentVisitDiv'><h3>Your Recents Visits</h3> <div><h3>NPAT</h3></div></div>
            <button className='counsellingButton' onClick={()=>{handleNavigate("clicked")}}>Need Counselling</button>
        </div>
    </div>
  )
}

export default CourseSearchBar