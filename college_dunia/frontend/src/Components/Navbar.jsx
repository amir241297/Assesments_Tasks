import React from 'react'
import Carousel from './Carousel'
import { Link } from '@chakra-ui/react'
import { GiGraduateCap } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { BiSearch, BiRupee, BiBell, BiMenu, BiPencil } from "react-icons/bi";
import { GrMoreVertical } from "react-icons/gr";
import "../Styles/navbar.css"
import collegelogo from '../collegelogo.png'



const Navbar = () => {
    return (
        <div className='nav_par_div'>
            <div className='image_search_div'>
                <img src={collegelogo}></img>
                <div className='BBA_div'>
                    <div className='degree_icon'>
                        <GiGraduateCap /> Select Goal &
                        <CiLocationOn /> City
                    </div>
                    <Link> BBA/BBM</Link>
                </div>
                <div className='Search_div'>
                    <BiSearch />
                    <input className='search_bar' type="text" placeholder='Search for Colleges, Exama, Courses and More' />
                </div>
                <div className='review'>
                    <BiPencil className='icon' />
                    <div className='review_offer'>
                        <div>
                            <p>Write a Review</p>
                        </div>
                        <div className='yellow_par_div'>
                            <p className='yellow'>Get Upto <BiRupee className='BiRupee' />500*</p>
                        </div>
                    </div>
                </div>
                <div className='explore'>
                    <div>
                        <GrMoreVertical />
                        <p>Explore</p>
                    </div>
                    <div className='bell'>
                        <BiBell />
                    </div>
                    <div className='bell'>
                        <BiMenu />
                    </div>
                </div>

            </div>

            <div className='div2_parent'>
                <div>
                    <Link>All Courses</Link>
                    <Link>B.Tech</Link>
                    <Link>MBA</Link>
                    <Link>M.Tech</Link>
                    <Link>MBBS</Link>
                    <Link>B.Com</Link>
                    <Link>B.Sc</Link>
                    <Link>B.Sc(Nursing)</Link>
                    <Link>BA</Link>
                    <Link>BBA</Link>
                    <Link>BCA</Link>
                </div>
                <div>
                    <Link>Course Finder</Link>
                </div>
            </div>
            {/* <Carousel /> */}
        </div>
    )
}

export default Navbar